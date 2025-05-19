import { SuiEvent } from '@mysten/sui/client';
import { prisma } from '../../db';
import { fetchMetadata } from 'sui-utils';
import { TransactionStatus, TransactionType } from '@prisma/client';

type Payload = Record<string, any>;

function parseEventTime(raw: unknown): Date | null {
    let tsVal: number | string;
    if (raw && typeof raw === 'object' && 'value' in raw) {

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

export const handlePoolEvents = async (events: SuiEvent[], moduleType: string) => {
    const ops: Array<Promise<any>> = [];

    for (const evt of events) {
        if (!evt.type.startsWith(moduleType)) {
            throw new Error(`Expected events from ${moduleType}, got ${evt.type}`);
        }

        const parts = evt.type.split('::');
        const eventName = parts[parts.length - 1]!;
        const data = evt.parsedJson as Payload;
        // console.log(data)

        switch (eventName) {
            case 'PoolCreatedEvent': {
                const { pool_id, coin_decimal, coin_type } = data;
                const shortName = coin_type.name.split('::').pop()!;
                const coinTypeName = `0x${coin_type.name}`;

                ops.push(
                    fetchMetadata(coinTypeName)
                        .then(meta => prisma.tokens.upsert({
                            where: { coinType: coinTypeName },
                            create: {
                                name: meta.name,
                                decimals: meta.decimals,
                                symbol: meta.symbol,
                                coinType: coinTypeName,
                            },
                            update: {
                                name: meta.name,
                                decimals: meta.decimals,
                                symbol: meta.symbol,
                            },
                        }))
                        .catch(err => {
                            console.error(`Failed to upsert token metadata for ${coinTypeName}:`, err);
                        })
                );

                ops.push(prisma.pool.upsert({
                    where: { id: pool_id },
                    create: {
                        id: pool_id,
                        coinType: coinTypeName,
                        coinName: shortName,
                        coinBalance: BigInt(0),
                        rewardsBalance: BigInt(0),
                        feeDecimal: 2,
                        defaultFees: null,
                        coinDecimal: coin_decimal,
                        ratesDollar: 0,
                        createdAt: new Date(),
                    },
                    update: {},
                }));
                break;
            }

            case 'AddMintEvent': {
                const { pool_id, coin_type, amount, coin_balance } = data;

                ops.push(prisma.pool.update({
                    where: { id: pool_id },
                    data: {
                        coinBalance: BigInt(coin_balance),
                    },
                }));
                break;
            }

            case 'AddedToLiquidityPoolEvent': {
                const { pool_id, coin_type, amount, coin_balance } = data;
                const transaction_id = evt.id.txDigest;
                const date = parseEventTime(evt.timestampMs);
                if (!date) {
                    console.error("Bad added liquidity time:", evt.timestampMs);
                    break;
                }

                const txExists = await prisma.transaction.findFirst({
                    where: { transactionId: transaction_id }
                });
                if (!txExists) {
                    const coinTypeName = `0x${coin_type.name}`;
                    const symbol = coin_type.name.split('::').pop()!;
                    const meta = await fetchMetadata(coinTypeName);
                    const decimals = Number(meta.decimals) || 0;

                    ops.push(
                        prisma.transaction.create({
                            data: {
                                transactionId: transaction_id,
                                userId: evt.sender,
                                type: TransactionType.ADD_LIQUIDITY,
                                interactedWith: "Liquidity Pool",
                                status: TransactionStatus.SUCCESS,
                                date,
                                incomingAsset: null,
                                incomingAmount: null,
                                outgoingAsset: symbol,
                                outgoingAmount: Number(amount) / Math.pow(10, decimals),
                                fees: 0,
                            }
                        })
                    );
                }

                ops.push(prisma.liquidityProvider.upsert({
                    where: { id: `${pool_id}-${coin_type}` },
                    create: {
                        id: `${pool_id}-${coin_type}`,
                        poolId: pool_id,
                        provider: evt.sender,
                        amount: BigInt(amount),
                        rewards: BigInt(0),
                    },
                    update: {
                        amount: BigInt(amount) 
                    },
                }));

                ops.push(prisma.pool.update({
                    where: { id: pool_id },
                    data: {
                        coinBalance: BigInt(coin_balance),
                    },
                }));
                break;
            }


            case 'RemovedFromLiquidityPoolEvent': {
                const { pool_id, coin_type, amount, coin_balance } = data;
                const transaction_id = evt.id.txDigest;
                const date = parseEventTime(evt.timestampMs);
                if (!date) {
                    console.error("Bad removed liquidity time:", evt.timestampMs);
                    break;
                }

                const txExists = await prisma.transaction.findFirst({
                    where: { transactionId: transaction_id }
                });
                if (!txExists) {
                    const coinTypeName = `0x${coin_type.name}`;
                    const symbol = coin_type.name.split('::').pop()!;
                    const meta = await fetchMetadata(coinTypeName);
                    const decimals = Number(meta.decimals) || 0;

                    ops.push(
                        prisma.transaction.create({
                            data: {
                                transactionId: transaction_id,
                                userId: evt.sender,
                                type: TransactionType.REMOVE_LIQUIDITY,
                                interactedWith: "Liquidity Pool",
                                status: TransactionStatus.SUCCESS,
                                date,
                                incomingAsset: symbol,
                                incomingAmount: Number(amount) / Math.pow(10, decimals),
                                outgoingAsset: null,
                                outgoingAmount: null,
                                fees: 0,
                            }
                        })
                    );
                }

                ops.push(prisma.pool.update({
                    where: { id: pool_id },
                    data: {
                        coinBalance: BigInt(coin_balance),
                    },
                }));
                break;
            }


            case 'PoolDefualtFeesUpdatedEvent': {
                const { pool_id, defualt_fees } = data;

                ops.push(prisma.pool.update({
                    where: { id: pool_id },
                    data: {
                        defaultFees: defualt_fees,
                    },
                }));
                break;
            }

            case 'PoolSwapFeesScenerioAddedEvent': {
                const { pool_id, threshold, fee } = data;

                ops.push(prisma.swapFee.create({
                    data: {
                        id: `${pool_id}-${threshold}`,
                        poolId: pool_id,
                        threshold: BigInt(threshold),
                        fee: fee,
                    },
                }));

                break;
            }

            case 'PoolSwapFeesScenerioRemovedEvent': {
                const { pool_id, threshold } = data;

                ops.push(prisma.swapFee.delete({
                    where: { id: `${pool_id}-${threshold}` },
                }));

                break;
            }

            case 'PoolSwapFeesScenerioUpdatedEvent': {
                const { pool_id, threshold, new_fee } = data;

                ops.push(prisma.swapFee.update({
                    where: { id: `${pool_id}-${threshold}` },
                    data: { fee: new_fee },
                }));

                break;
            }

            case 'PoolRewardClaimEvent': {
                const { pool_id, amount } = data;

                ops.push(prisma.pool.update({
                    where: { id: pool_id },
                    data: {
                        rewardsBalance: { decrement: BigInt(amount) },
                    },
                }));

                break;
            }

            case 'SwapCreatedEvent': {
                const { pool_a_id, pool_b_id, input_coin_amount, output_coin_amount, coin_a_balance, coin_b_balance } = data;
                const transaction_id = evt.id.txDigest;

                const date = parseEventTime(evt.timestampMs);
                if (!date) {
                    console.error("Bad swap time:", evt.timestampMs);
                    break;
                }
                const txExists = await prisma.transaction.findFirst({
                    where: { transactionId: transaction_id }
                });
                if (!txExists) {

                    const [poolA, poolB] = await Promise.all([
                        prisma.pool.findUnique({ where: { id: pool_a_id }, select: { coinType: true } }),
                        prisma.pool.findUnique({ where: { id: pool_b_id }, select: { coinType: true } }),
                    ]);

                    const symbolA = poolA!.coinType.split('::').pop()!;
                    const symbolB = poolB!.coinType.split('::').pop()!;

                    const [metaA, metaB] = await Promise.all([
                        fetchMetadata(poolA!.coinType),
                        fetchMetadata(poolB!.coinType),
                    ]);
                    const decA = Number(metaA.decimals) || 0;
                    const decB = Number(metaB.decimals) || 0;
                    ops.push(
                        prisma.transaction.create({
                            data: {
                                transactionId: transaction_id,
                                userId: evt.sender,
                                type: TransactionType.SWAP,
                                interactedWith: "Swap Pool",
                                status: TransactionStatus.SUCCESS,
                                date,
                                incomingAsset: symbolA,
                                incomingAmount: Number(input_coin_amount) / Math.pow(10, decA),
                                outgoingAsset: symbolB,
                                outgoingAmount: Number(output_coin_amount) / Math.pow(10, decB),
                                fees: 0,
                            }
                        })
                    );
                }

                ops.push(prisma.pool.update({
                    where: { id: pool_a_id },
                    data: {
                        coinBalance: BigInt(coin_a_balance),
                    },
                }));

                ops.push(prisma.pool.update({
                    where: { id: pool_b_id },
                    data: {
                        coinBalance: BigInt(coin_b_balance),
                    },
                }));
                break;
            }

            default:
                break;
        }

        // log all events too
        // ops.push(prisma.poolEvent.create({
        //     data: {
        //         id: evt.id.txDigest,
        //         eventType: eventName,
        //         poolId: data.pool_id ?? '',
        //         coinType: data.coin_type?.name ?? '',
        //         details: data,
        //         timestamp: new Date(),
        //     }
        // }));
    }

    await Promise.all(ops);
};
