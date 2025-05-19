import { EventId, SuiClient, SuiEvent, SuiEventFilter } from '@mysten/sui/client';
import { CONFIG } from 'config';
import { handleSend } from './send-handlers';
import { handleBridgeEvents } from './agent-handlers';
import { handleTransactionHistory } from './transactionHistory-handlers';
import { handlePoolEvents } from './pool-handlers';
import { getClient } from 'sui-utils';
import { PrismaClient } from '@prisma/client';
import { handleTemporaryCardEvents } from './card-handlers';

type SuiEventsCursor = EventId | null | undefined;

type EventExecutionResult = {
  cursor: SuiEventsCursor;
  hasNextPage: boolean;
};

type EventTracker = {
  type: string;                 
  filter: SuiEventFilter;
  callback: (events: SuiEvent[], type: string) => Promise<any>;
};

const EVENTS_TO_TRACK: EventTracker[] = [
  // 1) SEND events
  {
    type: `${CONFIG.PACKAGE_ID}::send`,
    filter: {
      MoveEventModule: {
        module: 'send',
        package: CONFIG.PACKAGE_ID,
      },
    },
    callback: handleSend,
  },

  {
    type: `${CONFIG.PACKAGE_ID}::agents`,
    filter: {
      MoveEventModule: {
        module: 'agents',
        package: CONFIG.PACKAGE_ID,
      },
    },
    callback: async (events, type) => {
      await Promise.all([
        handleBridgeEvents(events, type),
        handleTransactionHistory(events, type),
      ]);
    },
  },

  {
    type: `${CONFIG.PACKAGE_ID}::pool`,
    filter: {
      MoveEventModule: {
        module: 'pool',
        package: CONFIG.PACKAGE_ID,
      },
    },
    callback: handlePoolEvents,
  },

  {
    type: `${CONFIG.PACKAGE_ID}::temporary_card`,
    filter: {
      MoveEventModule: {
        module: 'temporary_card',
        package: CONFIG.PACKAGE_ID,
      },
    },
    callback: handleTemporaryCardEvents,
  },
];

const prisma = new PrismaClient();

const executeEventJob = async (
  client: SuiClient,
  tracker: EventTracker,
  cursor: SuiEventsCursor
): Promise<EventExecutionResult> => {
  try {
    const { data, hasNextPage, nextCursor } = await client.queryEvents({
      query: tracker.filter,
      cursor,
      order: 'ascending',
    });

    await tracker.callback(data, tracker.type);

    if (nextCursor && data.length > 0) {
      await saveLatestCursor(tracker, nextCursor);
      return { cursor: nextCursor, hasNextPage };
    }
  } catch (e) {
    console.error('Event job error:', e);
  }

  return { cursor, hasNextPage: false };
};

const runEventJob = async (
  client: SuiClient,
  tracker: EventTracker,
  cursor: SuiEventsCursor
) => {
  const result = await executeEventJob(client, tracker, cursor);
  setTimeout(
    () => runEventJob(client, tracker, result.cursor),
    result.hasNextPage ? 0 : CONFIG.POLLING_INTERVAL_MS
  );
};

const getLatestCursor = async (
  tracker: EventTracker
): Promise<SuiEventsCursor> => {
  const record = await prisma.cursor.findUnique({
    where: { id: tracker.type },
  });
  return record
    ? { eventSeq: record.eventSeq, txDigest: record.txDigest }
    : undefined;
};

const saveLatestCursor = async (
  tracker: EventTracker,
  cursor: EventId
) => {
  const id = tracker.type;
  await prisma.$runCommandRaw({
    update: 'Cursor',
    updates: [
      {
        q: { id },
        u: {
          $set: {
            eventSeq: cursor.eventSeq,
            txDigest: cursor.txDigest,
          },
        },
        upsert: true,
      },
    ],
  });
};

export const setupListeners = async () => {
  const client = getClient(CONFIG.NETWORK);
  for (const tracker of EVENTS_TO_TRACK) {
    const lastCursor = await getLatestCursor(tracker);
    runEventJob(client, tracker, lastCursor);
  }
};
