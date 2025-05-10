// src/event-listeners/indexers/send-handlers.ts
import { TransactionType, TransactionStatus } from "@prisma/client";
import { SuiEvent } from '@mysten/sui/client';
import { prisma } from '../../db';
import { getNsAddress } from 'sui-utils';

// Define the shape of a coin transfer event
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
    const transactionId = event.id.txDigest;
    const senderAddress = data.sender;
    let recipient = data.recipient;
    let recipientAddress = recipient;
    if (recipient.includes('.sui')) {
      const parts = recipient.split(".");
      recipient = `${parts[0]}@${parts[1]}`; 
      const resolvedRecipient = await getNsAddress(recipient);
      recipientAddress = resolvedRecipient ?? recipientAddress;
    }


    // 5) Bulk‐fetch both users
    const users = await prisma.user.findMany({
      where: { address: { in: [senderAddress, recipientAddress] } },
      select: { address: true },
    });

    const idByAddress = new Map(users.map(u => [u.address, u.address]));

    // 6) If neither user exists, skip event
    if (!idByAddress.has(senderAddress) && !idByAddress.has(recipientAddress)) {
      console.warn(`No users for tx ${transactionId}, skipping.`);
      continue;
    }

    // 7) Create SEND record only if it doesn't exist
    const senderId = idByAddress.get(senderAddress);
    if (senderId) {
      const sendExists = await prisma.transaction.findFirst({
        where: { transactionId, userId: senderId }
      });
      if (!sendExists) {
        await prisma.transaction.create({
          data: {
            userId:         senderId,
            transactionId,
            type:           TransactionType.SEND,
            interactedWith: recipient,
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
    }

    const senderDetails = await prisma.user.findUnique({
      where: { address: senderAddress }
    });
    const senderUsername = senderDetails?.username;

    // 8) Create RECEIVE record only if it doesn't exist
    const receiverId = idByAddress.get(recipientAddress);
    if (receiverId) {
      const receiveExists = await prisma.transaction.findFirst({
        where: { transactionId, userId: receiverId }
      });
      if (!receiveExists) {
        await prisma.transaction.create({
          data: {
            userId:         receiverId,
            transactionId,
            type:           TransactionType.RECEIVE,
            interactedWith: senderUsername ? senderUsername + "@payfrica": senderAddress,
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
}
