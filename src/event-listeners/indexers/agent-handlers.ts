import { SuiEvent } from '@mysten/sui/client';
import { prisma } from '../../db';
import { CONFIG } from 'config';

const PAYF_RES_ID = CONFIG.PAYF_RES_ID;

type Payload = Record<string, any>;

type DepositStatus = "PENDING" | "COMPLETED" | "CANCELLED";
type WithdrawStatus = "PENDING" | "COMPLETED" | "CANCELLED";

function parseDepositStatus(raw: any): DepositStatus {
    // if it’s wrapped in { variant, fields }
    if (raw && typeof raw === "object" && "variant" in raw) {
        return raw.variant.toUpperCase() as DepositStatus;
    }
    // if it’s already a string
    return String(raw).toUpperCase() as DepositStatus;
}

function parseWithdrawStatus(raw: any): WithdrawStatus {
    if (raw && typeof raw === "object" && "variant" in raw) {
        return raw.variant.toUpperCase() as WithdrawStatus;
    }
    return String(raw).toUpperCase() as WithdrawStatus;
}

function parseEventTime(raw: unknown): Date | null {
    // 1) pull out the raw value if it’s wrapped in an object
    let tsVal: number | string;
    if (raw && typeof raw === 'object' && 'value' in raw) {
        // @ts-ignore
        tsVal = (raw as any).value;
    } else {
        tsVal = raw as number | string;
    }

    // 2) coerce to a number
    const n = typeof tsVal === 'string'
        ? parseInt(tsVal, 10)
        : (tsVal as number);

    if (isNaN(n)) return null;

    // 3) since this n is already milliseconds, use it directly
    const d = new Date(n);
    return isNaN(d.getTime()) ? null : d;
}


export const handleBridgeEvents = async (events: SuiEvent[], moduleType: string) => {
    const ops: Array<Promise<any>> = [];

    for (const evt of events) {
        if (!evt.type.startsWith(moduleType)) {
            throw new Error(`Expected events from ${moduleType}, got ${evt.type}`);
        }

        // e.g. "payfrica::bridge_agents::WithdrawalRequestEvent"
        const parts = evt.type.split('::');
        const eventName = parts[parts.length - 1]!;
        const data = evt.parsedJson as Payload;
        // const when = data.time ? new Date(data.time) : new Date();

        // 1) always log to the generic event table
        // ops.push(prisma.Events.create({
        //     data: {
        //         module: moduleType,
        //         eventType: eventName,
        //         txDigest: evt.id.txDigest,
        //         payload: data,
        //         timestamp: when,
        //     }
        // }));

        // 2) now handle domain updates
        switch (eventName) {
            case 'AgentAddedEvent': {
                const { agent_id, agent, agent_type } = data;
                ops.push(prisma.agent.upsert({
                    where: { id: agent_id },
                    create: {
                        id: agent_id,
                        addr: agent,

                        // new account-detail fields, initialized empty
                        name: '',
                        accountNumber: '',
                        bank: '',

                        coinType: agent_type.name,
                        balance: BigInt(0),
                        pendingWithdrawals: [],
                        successfulWithdrawals: [],
                        pendingDeposits: [],
                        successfulDeposits: [],
                        unsuccessfulDeposits: [],
                        totalPendingWithdrawals: 0,
                        totalSuccessfulWithdrawals: 0,
                        totalPendingWithdrawalsAmount: BigInt(0),
                        totalSuccessfulWithdrawalsAmount: BigInt(0),
                        totalPendingDeposits: 0,
                        totalSuccessfulDeposits: 0,
                        totalUnsuccessfulDeposits: 0,
                        totalPendingDepositsAmount: BigInt(0),
                        totalSuccessfulDepositsAmount: BigInt(0),
                        maxWithdrawLimit: BigInt(0),
                        minWithdrawLimit: BigInt(0),
                        maxDepositLimit: BigInt(0),
                        minDepositLimit: BigInt(0),
                    },
                    update: {
                        // no-op on update
                    },
                }));
                break;
            }

            case 'ValidAgentTypeAddedEvent': {
                const { agent_type } = data;
                const fullType = agent_type.name;             // e.g. "payfrica::agents::Foo"
                const shortName = fullType.split('::').pop()!; // "Foo"
                const mapping = { [shortName]: fullType };   // JSON object

                ops.push((async () => {
                    // Fetch existing JSON array (if any)
                    const rec = await prisma.payfricaAgents.findUnique({
                        where: { id: PAYF_RES_ID },
                        select: { validTypes: true },
                    });
                    const arr = Array.isArray(rec?.validTypes)
                        ? (rec!.validTypes as any[])
                        : [];

                    // Only proceed if this mapping is not yet in the array
                    const exists = arr.some(o => o[shortName] === fullType);
                    if (!exists) {
                        arr.push(mapping);

                        // Upsert will create if missing, or update the array if present
                        await prisma.payfricaAgents.upsert({
                            where: { id: PAYF_RES_ID },
                            create: {
                                id: PAYF_RES_ID,
                                validTypes: [mapping],  // first‐time create
                                agents: {},
                            },
                            update: {
                                validTypes: arr,        // overwrite with the new array
                            },
                        });
                    }
                })());

                break;
            }

            case 'WithdrawalRequestEvent': {
                const { request_id, agent_id, amount, user, coin_type, status: rawStatus, time: rawTime } = data;
                const eventDate = parseEventTime(rawTime);
                if (!eventDate) {
                    console.error("Bad withdrawal time:", rawTime);
                    break;
                }
                const statusEnum = parseWithdrawStatus(rawStatus);

                ops.push(prisma.withdrawRequest.upsert({
                    where: { id: request_id },
                    create: {
                        id: request_id,
                        agentId: agent_id,
                        user: user,
                        amount: BigInt(amount),
                        coinType: coin_type.name,
                        status: statusEnum,
                        requestTime: eventDate,
                    },
                    update: {
                        status: statusEnum,
                        statusTime: eventDate,
                    },
                }));
                break;
            }

            case 'WithdrawalApprovedEvent':
            case 'WithdrawalCancelledEvent': {
                const { request_id, status: rawStatus, time: rawTime } = data;
                const eventDate = parseEventTime(rawTime);
                if (!eventDate) {
                    console.error("Bad withdrawal time:", rawTime);
                    break;
                }
                const statusEnum = parseWithdrawStatus(rawStatus);

                ops.push(prisma.withdrawRequest.update({
                    where: { id: request_id },
                    data: {
                        status: statusEnum,
                        statusTime: eventDate,
                    },
                }));
                break;
            }

            case 'DepositRequestEvent': {
                const {
                    request_id,
                    agent_id,
                    amount,
                    user,
                    coin_type,
                    comment,
                    status: rawStatus,
                    time: rawTime
                } = data;

                const eventDate = parseEventTime(rawTime);   // from our previous helper
                if (!eventDate) {
                    console.error("Bad event time:", rawTime);
                    break;
                }

                const statusEnum = parseDepositStatus(rawStatus);

                ops.push(
                    prisma.depositRequest.upsert({
                        where: { id: request_id },
                        create: {
                            id: request_id,
                            agentId: agent_id,
                            user: user,
                            amount: BigInt(amount),
                            coinType: coin_type.name,
                            comment: comment,
                            status: statusEnum,      // ← now a string, e.g. "PENDING"
                            requestTime: eventDate,
                        },
                        update: {
                            status: statusEnum,      // ← also a string
                            statusTime: eventDate,
                        },
                    })
                );
                break;
            }


            case 'DepositApprovedEvent':
            case 'DepositCancelledEvent': {
                const { request_id, status: rawStatus, time: rawTime } = data;
                const eventDate = parseEventTime(rawTime);
                if (!eventDate) {
                    console.error("Bad deposit time:", rawTime);
                    break;
                }
                const statusEnum = parseDepositStatus(rawStatus);

                ops.push(prisma.depositRequest.update({
                    where: { id: request_id },
                    data: {
                        status: statusEnum,
                        statusTime: eventDate,
                    },
                }));
                break;
            }


            case 'SetAgentWithdrawalLimitEvent': {
                const { agent_id, min_withdraw_limit, max_withdraw_limit } = data;
                ops.push((async () => {
                    // guard against missing agent
                    const agent = await prisma.agent.findUnique({ where: { id: agent_id } });
                    // if (!agent) {
                    //     console.warn(`Skipping withdraw‐limit update: agent ${agent_id} not found.`);
                    //     return;
                    // }

                    return prisma.agent.update({
                        where: { id: agent_id },
                        data: {
                            minWithdrawLimit: BigInt(min_withdraw_limit),
                            maxWithdrawLimit: BigInt(max_withdraw_limit),
                        },
                    });
                })());
                break;
            }

            case 'SetAgentDepositLimitEvent': {
                const { agent_id, min_deposit_limit, max_deposit_limit } = data;
                ops.push((async () => {
                    // guard against missing agent
                    const agent = await prisma.agent.findUnique({ where: { id: agent_id } });
                    // if (!agent) {
                    //     console.warn(`Skipping deposit‐limit update: agent ${agent_id} not found.`);
                    //     return;
                    // }

                    return prisma.agent.update({
                        where: { id: agent_id },
                        data: {
                            minDepositLimit: BigInt(min_deposit_limit),
                            maxDepositLimit: BigInt(max_deposit_limit),
                        },
                    });
                })());
                break;
            }

            case 'AddAgentBalanceEvent': {
                const { agent_id, amount } = data;
                ops.push(prisma.agent.update({
                    where: { id: agent_id },
                    data: {
                        balance: { increment: BigInt(amount) }
                    }
                }));
                break;
            }

            case 'AgentBalanceWithdrawEvent': {
                const { agent_id, amount } = data;
                ops.push(prisma.agent.update({
                    where: { id: agent_id },
                    data: {
                        balance: { decrement: BigInt(amount) }
                    }
                }));
                break;
            }

            default:
                break;
        }
    }

    await Promise.all(ops);
};
