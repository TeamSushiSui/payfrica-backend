import { SuiEvent } from '@mysten/sui/client';
import { prisma } from '../../db';
import { CardTransactionType, TransactionStatus } from '@prisma/client';

type Payload = Record<string, any>;

const addTransactionIfNotExists = async (
  txId: string,
  data: Omit<Parameters<typeof prisma.temporaryCardTransactionHistory.create>[0]['data'], 'transactionId' | 'cardId'>
) => {
  const exists = await prisma.temporaryCardTransactionHistory.findUnique({
    where: { transactionId: txId },
  });

  if (!exists) {
    const { cardId, ...restData } = data as any;
    return prisma.temporaryCardTransactionHistory.create({
      data: {
        transactionId: txId,
        ...restData,
      }
    });
  }

  return null;
};

export const handleTemporaryCardEvents = async (events: SuiEvent[], moduleType: string) => {
  const ops: Array<Promise<any>> = [];

  for (const evt of events) {
    if (!evt.type.startsWith(moduleType)) {
      throw new Error(`Expected events from ${moduleType}, got ${evt.type}`);
    }

    const parts = evt.type.split('::');
    const eventName = parts[parts.length - 1]!;
    const data = evt.parsedJson as Payload;

    switch (eventName) {
      case 'TemporaryCardCreatedEvent': {
        const {
          card_id, name, card_address, owner,
          expiration_date, hp, s,
          blobId, blobObjectId, blobUrl, creation_time
        } = data;

        ops.push(
          prisma.temporaryCard.create({
            data: {
              id: card_id,
              name,
              cardAddress: card_address,
              owner,
              expirationDate: new Date(expiration_date),
              hp,
              s,
              blobId,
              blobObjectId,
              blobUrl,
              creationTime: new Date(creation_time),
            }
          })
        );

        ops.push(
          addTransactionIfNotExists(evt.id.txDigest, {
            type: CardTransactionType.CREATE,
            interactedWith: "PAYFRICA CARDS",
            amount: 0,
            status: TransactionStatus.SUCCESS,
            date: new Date(creation_time),
            card: { connect: { id: card_id } },
          })
        );
        break;
      }

      case 'CardUnlockedEvent': {
        const {
          card_id, card_address, owner, unlocked_by,
          num_unlocks, false_attemps, blocked, time
        } = data;

        ops.push(
          prisma.temporaryCard.update({
            where: { id: card_id },
            data: {
              cardAddress: card_address,
              owner,
              numUnlocks: num_unlocks,
              falseAttempts: false_attemps,
              blocked,
            }
          })
        );

        ops.push(
          addTransactionIfNotExists(evt.id.txDigest, {
            type: CardTransactionType.UNLOCK,
            interactedWith: unlocked_by,
            amount: 0,
            status: TransactionStatus.SUCCESS,
            date: new Date(time),
            card: { connect: { id: card_id } },
          })
        );
        break;
      }

      case 'CardUsedEvent': {
        const {
          card_id, card_address, receiver, receiver_ns, amount, owner, time
        } = data;

        ops.push(
          addTransactionIfNotExists(evt.id.txDigest, {
            type: CardTransactionType.USE,
            interactedWith: receiver_ns,
            amount,
            status: TransactionStatus.SUCCESS,
            date: new Date(time),
            card: { connect: { id: card_id } },
          })
        );
        break;
      }

      case 'CardBlockedEvent': {
        const {
          card_id, card_address, owner, time
        } = data;

        ops.push(
          prisma.temporaryCard.update({
            where: { id: card_id },
            data: {
              blocked: true,
            }
          })
        );

        ops.push(
          addTransactionIfNotExists(evt.id.txDigest, {
            type: CardTransactionType.BLOCKED,
            interactedWith: null,
            amount: 0,
            status: TransactionStatus.SUCCESS,
            date: new Date(time),
            card: { connect: { id: card_id } },
          })
        );
        break;
      }

      case 'CardAddBalanceEvent': {
        const {
          card_id, card_address, owner, amount, time
        } = data;

        ops.push(
          addTransactionIfNotExists(evt.id.txDigest, {
            type: CardTransactionType.ADD_BALANCE,
            interactedWith: null,
            amount,
            status: TransactionStatus.SUCCESS,
            date: new Date(time),
            card: { connect: { id: card_id } },
          })
        );
        break;
      }

      case 'CardRemoveBalanceEvent': {
        const {
          card_id, card_address, owner, amount, time
        } = data;

        ops.push(
          addTransactionIfNotExists(evt.id.txDigest, {
            type: CardTransactionType.REMOVE_BALANCE,
            interactedWith: null,
            amount,
            status: TransactionStatus.SUCCESS,
            date: new Date(time),
            card: { connect: { id: card_id } },
          })
        );
        break;
      }
    }
  }

  await Promise.all(ops);
};
