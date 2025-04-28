import { SuiEvent } from '@mysten/sui/client';
import { prisma } from '../../db';
import { CONFIG } from 'config';

const PAYF_RES_ID = CONFIG.PAYF_RES_ID;

type Payload = Record<string, any>;

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
                const fullType  = agent_type.name;                // e.g. "payfrica::agents::Foo"
                const shortName = fullType.split('::').pop()!;    // "Foo"
              
                // single async IIFE so we can both upsert & update in one pass
                ops.push((async () => {
                  // see if we already have a document
                  const rec = await prisma.payfricaAgents.findUnique({
                    where: { id: PAYF_RES_ID },
                    select: { validTypes: true },
                  });
              
                  // build the new entry
                  const mapping = { [shortName]: fullType };
              
                  if (!rec) {
                    // first time — create with a single-element array
                    await prisma.payfricaAgents.create({
                      data: {
                        id:         PAYF_RES_ID,
                        validTypes: [JSON.stringify(mapping)],
                        agents:     {}, 
                      },
                    });
                  } else {
                    // already exists — append if missing
                    const arr = Array.isArray(rec.validTypes) ? rec.validTypes as any[] : [];
                    const exists = arr.some(o => o[shortName] === fullType);
                    if (!exists) {
                      arr.push(mapping);
                      await prisma.payfricaAgents.update({
                        where: { id: PAYF_RES_ID },
                        data:  { validTypes: arr },
                      });
                    }
                  }
                })());
              
                break;
              }
            
            case 'WithdrawalRequestEvent': {
                const { request_id, agent_id, amount, user, coin_type, status, time } = data;
                ops.push(prisma.withdrawRequest.upsert({
                    where: { id: request_id },
                    create: {
                        id: request_id,
                        agentId: agent_id,
                        user: user,
                        amount: BigInt(amount),
                        coinType: coin_type.name,
                        status: status,
                        requestTime: new Date(time),
                    },
                    update: {
                        status: status,
                        statusTime: new Date(time)
                    }
                }));
                break;
            }

            case 'WithdrawalApprovedEvent':
            case 'WithdrawalCancelledEvent': {
                const { request_id, status, time } = data;
                ops.push(prisma.withdrawRequest.update({
                    where: { id: request_id },
                    data: {
                        status,
                        statusTime: new Date(time)
                    }
                }));
                break;
            }

            case 'DepositRequestEvent': {
                const { request_id, agent_id, amount, user, coin_type, comment, status, time } = data;
                ops.push(prisma.depositRequest.upsert({
                    where: { id: request_id },
                    create: {
                        id: request_id,
                        agentId: agent_id,
                        user: user,
                        amount: BigInt(amount),
                        coinType: coin_type.name,
                        comment,
                        status: status,
                        requestTime: new Date(time),
                    },
                    update: {
                        status,
                        statusTime: new Date(time)
                    }
                }));
                break;
            }

            case 'DepositApprovedEvent':
            case 'DepositCancelledEvent': {
                const { request_id, status, time } = data;
                ops.push(prisma.depositRequest.update({
                    where: { id: request_id },
                    data: {
                        status,
                        statusTime: new Date(time)
                    }
                }));
                break;
            }

            case 'SetAgentWithdrawalLimitEvent': {
                const { agent_id, min_withdraw_limit, max_withdraw_limit } = data;
                ops.push(prisma.agent.update({
                    where: { id: agent_id },
                    data: {
                        minWithdrawLimit: BigInt(min_withdraw_limit),
                        maxWithdrawLimit: BigInt(max_withdraw_limit)
                    }
                }));
                break;
            }

            case 'SetAgentDepositLimitEvent': {
                const { agent_id, min_deposit_limit, max_deposit_limit } = data;
                ops.push(prisma.agent.update({
                    where: { id: agent_id },
                    data: {
                        minDepositLimit: BigInt(min_deposit_limit),
                        maxDepositLimit: BigInt(max_deposit_limit)
                    }
                }));
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
