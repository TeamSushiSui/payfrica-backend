// src/event-listeners/indexers/transaction-history-handlers.ts

import { SuiEvent } from '@mysten/sui/client';
import { prisma } from '../../db';
import { TransactionType, TransactionStatus } from "@prisma/client";
import { fetchMetadata } from "sui-utils";


// Shape of deposit/withdrawal events coming from bridge
type BridgePayload = {
  request_id?: string;
  user: string;
  amount: number | string;
  coin_type: { name: string };
  status?: string;
  time: number | string;
};

export async function handleTransactionHistory(
  events: SuiEvent[],
  expectedPrefix: string
) {
  // 1) Collect all user addresses
  const addrs = new Set<string>();
  for (const evt of events) {
    if (!evt.type.startsWith(expectedPrefix)) continue;
    const name = evt.type.split('::').pop()!;
    if (['DepositRequestEvent', 'WithdrawalRequestEvent'].includes(name)) {
      const data = evt.parsedJson as BridgePayload;
      addrs.add(data.user);
    }

    
  }

  // 2) Bulk-fetch users once
  const users = await prisma.user.findMany({
    where: { address: { in: Array.from(addrs) } },
    select: { address: true },
  });
  const idByAddress = new Map(users.map(u => [u.address, u.address]));

  // 3) Build operations
  const ops: Array<Promise<any>> = [];

  for (const evt of events) {
    if (!evt.type.startsWith(expectedPrefix)) continue;
    // const transactionId = evt.id.txDigest;

    const eventName = evt.type.split('::').pop()!;
    const data = evt.parsedJson as BridgePayload;
    // Determine timestamp  
    const tsMs = evt.timestampMs
      ? Number(evt.timestampMs)
      : Number(data.time) * 1000;
    const date = new Date(tsMs);
    if (isNaN(date.getTime())) {
      throw new Error(`Invalid timestamp for ${evt.id.txDigest}: ${data.time}`);
    }

    // Parse amount
    const amt = typeof data.amount === 'string'
      ? parseFloat(data.amount)
      : data.amount;

    // Lookup userId
    const userId = idByAddress.get(data.user);
    if (!userId) {
      console.warn(`No user found for address ${data.user}, skipping.`);
      continue;
    }

    switch (eventName) {
      case 'DepositRequestEvent': {
        // const parts = data.coin_type.name.split('::');
        const assetName = data.coin_type.name.split('::').pop()!;
        const coinMeta = await fetchMetadata("0x" + data.coin_type.name);
        
        const decimal = Number(coinMeta.decimals) || 0;
        const amount = amt / Math.pow(10, decimal)
        // Only create if not already present
        const exists = await prisma.transaction.findFirst({
          where: { transactionId: data.request_id! , userId }
        });
        if (!exists) {
          ops.push(prisma.transaction.create({
            data: {
              transactionId: data.request_id!,
              userId,
              type: TransactionType.DEPOSIT,
              interactedWith: "payfrica Agent", 
              status: TransactionStatus.PENDING,
              date,
              incomingAsset: assetName,
              incomingAmount: amount,
              outgoingAsset: null,
              outgoingAmount: null,
              fees: 0,
            }
          }));
        }
        break;
      }

      case 'DepositApprovedEvent': {
        ops.push(prisma.transaction.updateMany({
          where: {
            transactionId: data.request_id!,
            userId,
          },
          data: { status: TransactionStatus.SUCCESS }
        }));
        break;
      }

      case 'DepositCancelledEvent': {
        // console.log(data);

        const p = ops.push(prisma.transaction.updateMany({
          where: {
            transactionId: data.request_id!,
            userId,
          },
          data: { status: TransactionStatus.FAILED }
        }));
        break;
      }

      case 'WithdrawalRequestEvent': {
        const parts = data.coin_type.name.split('::');
        const assetName = parts[parts.length - 1];
        const coinMeta = await fetchMetadata("0x" + data.coin_type.name);
        const decimal = Number(coinMeta.decimals) || 0;
        const exists = await prisma.transaction.findFirst({
          where: { transactionId: data.request_id!, userId }
        });
        if (!exists) {
          ops.push(prisma.transaction.create({
            data: {
              transactionId: data.request_id!,
              userId,
              type: TransactionType.WITHDRAW,
              interactedWith: "payfrica Agent",
              status: TransactionStatus.PENDING,
              date,
              incomingAsset: null,
              incomingAmount: null,
              outgoingAsset: assetName,
              outgoingAmount: amt / Math.pow(10, decimal),
              fees: 0,
            }
          }));
        }
        break;
      }

      case 'WithdrawalApprovedEvent': {
        ops.push(prisma.transaction.updateMany({
          where: { transactionId: data.request_id!, userId },
          data: { status: TransactionStatus.SUCCESS }
        }));
        break;
      }

      case 'WithdrawalCancelledEvent': {
        // console.log(data);
        ops.push(prisma.transaction.updateMany({
          where: { transactionId: data.request_id!, userId },
          data: { status: TransactionStatus.FAILED }
        }));
        break;
      }
      default:
        break;
    }
  }

  await Promise.all(ops);
}
