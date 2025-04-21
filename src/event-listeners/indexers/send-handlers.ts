// src/event-listeners/indexers/send-handlers.ts

import { PrismaClient, TransactionType, TransactionStatus } from '@prisma/client';
import { SuiEvent } from '@mysten/sui/client';

const prisma = new PrismaClient();

type CoinEvent = {
  coin_type: { name: string };
  amount: number | string;
  recipient: string;
  sender: string;
  time: number | string;
};

export async function handleSend(events: SuiEvent[], expectedType: string) {
  for (const event of events) {
    if (!event.type.startsWith(expectedType)) continue;

    const data = event.parsedJson as CoinEvent;

    // 1) Determine timestamp in ms
    const timestampMs = event.timestampMs
      ? Number(event.timestampMs)
      : Number(data.time) * 1000;
    const date = new Date(timestampMs);
    if (isNaN(date.getTime())) {
      throw new Error(`Invalid timestamp for ${event.id.txDigest}: ${data.time}`);
    }

    // 2) Parse amount
    const amountNum = typeof data.amount === 'string'
      ? parseFloat(data.amount)
      : data.amount;

    // 3) Asset short name
    const parts = data.coin_type.name.split('::');
    const assetName = parts[parts.length - 1];

    // 4) Core fields
    const transactionId    = event.id.txDigest;
    const senderAddress    = data.sender;
    const recipientAddress = data.recipient;

    // 5) Bulk‐fetch both users
    const users = await prisma.user.findMany({
      where: { address: { in: [senderAddress, recipientAddress] } },
      select: { id: true, address: true },
    });
    const idByAddress = new Map(users.map(u => [u.address, u.id]));

    // 6) If neither exist, skip the event entirely
    if (!idByAddress.has(senderAddress) && !idByAddress.has(recipientAddress)) {
      console.warn(`No users found for tx ${transactionId}, skipping.`);
      continue;
    }

    // 7) Write sender’s SEND record (only if they exist)
    const senderId = idByAddress.get(senderAddress);
    if (senderId) {
      await prisma.transaction.create({
        data: {
          userId:         senderId,
          transactionId,
          type:           TransactionType.SEND,
          interactedWith: recipientAddress,
          date,
          status:         TransactionStatus.SUCCESS,
          fees:           0,
          incomingAsset:  null,
          incomingAmount: null,
          outgoingAsset:  assetName,
          outgoingAmount: amountNum,
        },
      });
    }

    // 8) Write receiver’s RECEIVE record (only if they exist)
    const receiverId = idByAddress.get(recipientAddress);
    if (receiverId) {
      await prisma.transaction.create({
        data: {
          userId:         receiverId,
          transactionId,
          type:           TransactionType.RECEIVE,
          interactedWith: senderAddress,
          date,
          status:         TransactionStatus.SUCCESS,
          fees:           0,
          incomingAsset:  assetName,
          incomingAmount: amountNum,
          outgoingAsset:  null,
          outgoingAmount: null,
        },
      });
    }
  }
}
