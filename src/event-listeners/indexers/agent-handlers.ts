import { SuiEvent } from '@mysten/sui/client';
import { prisma } from '../../db';
import { CONFIG } from 'config';

const PAYF_RES_ID = CONFIG.PAYF_RES_ID;

type Payload = Record<string, any>;

type DepositStatus = "PENDING" | "COMPLETED" | "CANCELLED";
type WithdrawStatus = "PENDING" | "COMPLETED" | "CANCELLED";

function parseDepositStatus(raw: any): DepositStatus {
    if (raw && typeof raw === "object" && "variant" in raw) {
        return raw.variant.toUpperCase() as DepositStatus;
    }
    return String(raw).toUpperCase() as DepositStatus;
}

function parseWithdrawStatus(raw: any): WithdrawStatus {
    if (raw && typeof raw === "object" && "variant" in raw) {
        return raw.variant.toUpperCase() as WithdrawStatus;
    }
    return String(raw).toUpperCase() as WithdrawStatus;
}

function parseEventTime(raw: unknown): Date | null {
    let tsVal: number | string;
    if (raw && typeof raw === 'object' && 'value' in raw) {
        // @ts-ignore
        tsVal = (raw as any).value;
    } else {
        tsVal = raw as number | string;
    }

    const n = typeof tsVal === 'string'
        ? parseInt(tsVal, 10)
        : (tsVal as number);

    if (isNaN(n)) return null;

    const d = new Date(n);
    return isNaN(d.getTime()) ? null : d;
}

const coin_decimal = 6
export const handleBridgeEvents = async (events: SuiEvent[], moduleType: string) => {
    const ops: Array<Promise<any>> = [];

    for (const evt of events) {
        if (!evt.type.startsWith(moduleType)) {
            throw new Error(`Expected events from ${moduleType}, got ${evt.type}`);
        }

        const parts = evt.type.split('::');
        const eventName = parts[parts.length - 1]!;
        const data = evt.parsedJson as Payload;

        switch (eventName) {
            case 'AgentAddedEvent': {
                const { agent_id, agent, agent_type } = data;
                ops.push(prisma.agent.upsert({
                    where: { id: agent_id },
                    create: {
                        id: agent_id,
                        addr: agent,
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
                    update: {},
                }));
                break;
            }

            case 'ValidAgentTypeAddedEvent': {
                const { agent_type } = data;
                const fullType = agent_type.name;
                const shortName = fullType.split('::').pop()!;
                const mapping = { [shortName]: fullType };

                ops.push((async () => {
                    const rec = await prisma.payfricaAgents.findUnique({
                        where: { id: PAYF_RES_ID },
                        select: { validTypes: true },
                    });
                    const arr = Array.isArray(rec?.validTypes)
                        ? (rec!.validTypes as any[])
                        : [];

                    const exists = arr.some(o => o[shortName] === fullType);
                    if (!exists) {
                        arr.push(mapping);
                        await prisma.payfricaAgents.upsert({
                            where: { id: PAYF_RES_ID },
                            create: {
                                id: PAYF_RES_ID,
                                validTypes: [mapping],
                                agents: {},
                            },
                            update: {
                                validTypes: arr,
                            },
                        });
                    }
                })());

                break;
            }

            case 'WithdrawalRequestEvent': {
                const {
                    request_id,
                    agent_id,
                    amount,
                    user,
                    coin_type,
                    status: rawStatus,
                    time: rawTime
                } = data;

                const eventDate = parseEventTime(rawTime);
                if (!eventDate) {
                    console.error("Bad withdrawal time:", rawTime);
                    break;
                }
                const exists = await prisma.withdrawRequest.findUnique({
                    where: { id: request_id },
                    select: { id: true },
                });
                if (!exists) {
                    const amt = BigInt(amount) / BigInt(10 ** coin_decimal);
                    ops.push(
                        prisma.withdrawRequest.create({
                            data: {
                                id: request_id,
                                agentId: agent_id,
                                user: user,
                                amount: amt,
                                coinType: coin_type.name,
                                status: parseWithdrawStatus(rawStatus),
                                requestTime: eventDate,
                            },
                        })
                    );
                    ops.push(
                        prisma.agent.update({
                            where: { id: agent_id },
                            data: {
                                totalPendingWithdrawals: { increment: 1 },
                            },
                        })
                    );
                }
                break;
            }

            case 'WithdrawalApprovedEvent':
            case 'WithdrawalCancelledEvent': {
                const { request_id, agent_id, status: rawStatus, time: rawTime } = data;
                const eventDate = parseEventTime(rawTime);
                if (!eventDate) {
                    console.error("Bad withdrawal time:", rawTime);
                    break;
                }
                const statusEnum = parseWithdrawStatus(rawStatus);
                ops.push(
                    prisma.withdrawRequest.update({
                        where: { id: request_id },
                        data: {
                            status: statusEnum,
                            statusTime: eventDate,
                        },
                    })
                );

                const agentUpdate: Record<string, any> = {
                    totalPendingWithdrawals: { decrement: 1 },
                };
                if (statusEnum === 'COMPLETED') {
                    agentUpdate.totalSuccessfulWithdrawals = { increment: 1 };
                }
                ops.push(
                    prisma.agent.update({
                        where: { id: agent_id },
                        data: agentUpdate,
                    })
                );
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

                const eventDate = parseEventTime(rawTime);
                if (!eventDate) {
                    console.error("Bad event time:", rawTime);
                    break;
                }

                const statusEnum = parseDepositStatus(rawStatus);
                const exists = await prisma.depositRequest.findUnique({
                    where: { id: request_id },
                    select: { id: true },
                });
                if (!exists) {
                    const amt = BigInt(amount) / BigInt(10 ** coin_decimal);
                    ops.push(
                        prisma.depositRequest.create({
                            data: {
                                id: request_id,
                                agentId: agent_id,
                                user: user,
                                amount: amt,
                                coinType: coin_type.name,
                                comment: comment,
                                status: statusEnum,
                                requestTime: eventDate,
                            },
                        })
                    );

                    ops.push(
                        prisma.agent.update({
                            where: { id: agent_id },
                            data: {
                                totalPendingDeposits: { increment: 1 },
                            },
                        })
                    );
                }
                break;
            }

            case 'DepositApprovedEvent':
            case 'DepositCancelledEvent': {
                const { request_id, agent_id, status: rawStatus, time: rawTime } = data;
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

                const agentUpdateData: Record<string, any> = {
                    totalPendingDeposits: { decrement: 1 },
                };

                if (statusEnum === 'COMPLETED') {
                    agentUpdateData.totalSuccessfulDeposits = { increment: 1 };
                } else if (statusEnum === 'CANCELLED') {
                    agentUpdateData.totalUnsuccessfulDeposits = { increment: 1 };
                }

                ops.push(prisma.agent.update({
                    where: { id: agent_id },
                    data: agentUpdateData,
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
                            minWithdrawLimit: BigInt(min_withdraw_limit) / BigInt(10 ** coin_decimal),
                            maxWithdrawLimit: BigInt(max_withdraw_limit) / BigInt(10 ** coin_decimal),
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
                            minDepositLimit: BigInt(min_deposit_limit) / BigInt(10 ** coin_decimal),
                            maxDepositLimit: BigInt(max_deposit_limit) / BigInt(10 ** coin_decimal),
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
                        balance: { increment: BigInt(amount) / BigInt(10 ** coin_decimal) }
                    }
                }));
                break;
            }

            case 'AgentBalanceWithdrawEvent': {
                const { agent_id, amount } = data;
                ops.push(prisma.agent.update({
                    where: { id: agent_id },
                    data: {
                        balance: { decrement: BigInt(amount) / BigInt(10 ** coin_decimal) }
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
