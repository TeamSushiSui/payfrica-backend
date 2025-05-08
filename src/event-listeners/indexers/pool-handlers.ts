import { SuiEvent } from '@mysten/sui/client';
import { prisma } from '../../db';
import { fetchMetadata } from 'sui-utils';

type Payload = Record<string, any>;

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
                            // swallow or rethrow depending on your needs
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

                ops.push(prisma.liquidityProvider.upsert({
                    where: { id: `${pool_id}-${coin_type}` },
                    create: {
                        id: `${pool_id}-${coin_type}`,
                        poolId: pool_id,
                        provider: '', 
                        amount: BigInt(amount),
                        rewards: BigInt(0),
                    },
                    update: {
                        amount: { increment: BigInt(amount) }
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

                ops.push(prisma.pool.update({
                    where: { id: pool_id },
                    data: {
                        coinBalance: BigInt(coin_balance),
                    },
                }));
                // Reducing liquidityProvider's amount must happen with user tracking
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
