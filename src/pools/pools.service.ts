import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Pool, LiquidityProvider, SwapFee } from "@prisma/client";

@Injectable()
export class PoolsService {
  constructor(private readonly prisma: PrismaService) {}

  /** GET /pools */
  async findAll(): Promise<Pool[]> {
    return this.prisma.pool.findMany();
  }

  /** GET /pools/:poolId */
  async findOne(poolId: string): Promise<Pool> {
    const pool = await this.prisma.pool.findUnique({ where: { id: poolId }});
    if (!pool) {
      throw new NotFoundException(`Pool ${poolId} not found`);
    }
    return pool;
  }

  /** GET /pools/:poolId/providers */
  async findProviders(poolId: string): Promise<LiquidityProvider[]> {
    return this.prisma.liquidityProvider.findMany({
      where: { poolId },
    });
  }

  /** GET /pools/:poolId/fees/default */
  async getDefaultFees(poolId: string): Promise<number | null> {
    const pool = await this.prisma.pool.findUnique({
      where: { id: poolId },
      select: { defaultFees: true },
    });
    if (!pool) {
      throw new NotFoundException(`Pool ${poolId} not found`);
    }
    return pool.defaultFees;
  }

  /** GET /pools/:poolId/fees/scenarios */
  async findSwapFeeScenarios(poolId: string): Promise<SwapFee[]> {
    return this.prisma.swapFee.findMany({
      where: { poolId },
    });
  }

  /** GET /pools/:poolId/rewards/:provider */
  async getUnclaimedRewards(poolId: string, provider: string): Promise<bigint> {
    const lp = await this.prisma.liquidityProvider.findUnique({
      where: { id: `${poolId}-${provider}` },
      select: { rewards: true },
    });
    if (!lp) {
      // if provider or pool not found, return 0 or throw—choice here
      return BigInt(0);
    }
    return lp.rewards;
  }

  /** GET /pools/:poolId/rates */
  async getRates(poolId: string): Promise<{
    coinDecimal: number;
    ratesDollar: number;
  }> {
    const pool = await this.prisma.pool.findUnique({
      where: { id: poolId },
      select: { coinDecimal: true, ratesDollar: true },
    });
    if (!pool) {
      throw new NotFoundException(`Pool ${poolId} not found`);
    }
    return {
      coinDecimal: pool.coinDecimal,
      ratesDollar: pool.ratesDollar,
    };
  }

  async findByCoinName(
    coinName: string,
  ): Promise<{
    CoinId: string;
    PoolId: string;
    coinName: string;
    decimals: number;
    rates_dollar: number;
  }> {
    const pool = await this.prisma.pool.findFirst({
      where: { coinName },
      select: {
        id:         true,
        coinType:   true,
        coinName:   true,
        coinDecimal:true,
        ratesDollar:true,
      },
    });

    if (!pool) {
      throw new NotFoundException(`Pool with coinName="${coinName}" not found`);
    }

    return {
      CoinId:       pool.coinType,
      PoolId:       pool.id,
      coinName:     pool.coinName,
      decimals:     pool.coinDecimal,
      rates_dollar: pool.ratesDollar,
    };
  }

  async updateDollarRateByCoinName(
    coinName: string,
    rates_dollar: number,
  ): Promise<{
    CoinId: string;
    PoolId: string;
    coinName: string;
    decimals: number;
    rates_dollar: number;
  }> {
    // 1) find the pool
    const pool = await this.prisma.pool.findFirst({
      where: { coinName },
      select: {
        id:         true,
        coinType:   true,
        coinName:   true,
        coinDecimal:true,
      },
    });
    if (!pool) {
      throw new NotFoundException(`Pool with coinName="${coinName}" not found`);
    }

    // 2) update its USD rate
    const updated = await this.prisma.pool.update({
      where: { id: pool.id },
      data:  { ratesDollar: rates_dollar },
      select: {
        id:         true,
        coinType:   true,
        coinName:   true,
        coinDecimal:true,
        ratesDollar:true,
      },
    });

    return {
      CoinId:       updated.coinType,
      PoolId:       updated.id,
      coinName:     updated.coinName,
      decimals:     updated.coinDecimal,
      rates_dollar: updated.ratesDollar,
    };
  }
}
