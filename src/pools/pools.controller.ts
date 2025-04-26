import { Controller, Get, Param, Body, Patch } from '@nestjs/common';
import { PoolsService } from './pools.service';
import {
  Pool,
  LiquidityProvider,
  SwapFee,
} from '@prisma/client';

@Controller('pools')
export class PoolsController {
  constructor(private readonly poolsService: PoolsService) {}

  /** GET /pools */
  @Get()
  getAll(): Promise<Pool[]> {
    return this.poolsService.findAll();
  }

  /** GET /pools/:poolId */
  @Get(':poolId')
  getOne(
    @Param('poolId') poolId: string,
  ): Promise<Pool> {
    return this.poolsService.findOne(poolId);
  }

  /** GET /pools/:poolId/providers */
  @Get(':poolId/providers')
  getProviders(
    @Param('poolId') poolId: string,
  ): Promise<LiquidityProvider[]> {
    return this.poolsService.findProviders(poolId);
  }

  /** GET /pools/:poolId/fees/default */
  @Get(':poolId/fees/default')
  getDefaultFees(
    @Param('poolId') poolId: string,
  ): Promise<number | null> {
    return this.poolsService.getDefaultFees(poolId);
  }

  /** GET /pools/:poolId/fees/scenarios */
  @Get(':poolId/fees/scenarios')
  getSwapFeeScenarios(
    @Param('poolId') poolId: string,
  ): Promise<SwapFee[]> {
    return this.poolsService.findSwapFeeScenarios(poolId);
  }

  /** GET /pools/:poolId/rewards/:provider */
  @Get(':poolId/rewards/:provider')
  getUnclaimedRewards(
    @Param('poolId') poolId: string,
    @Param('provider') provider: string,
  ): Promise<bigint> {
    return this.poolsService.getUnclaimedRewards(poolId, provider);
  }

  /** GET /pools/:poolId/rates */
  @Get(':poolId/rates')
  getRates(
    @Param('poolId') poolId: string,
  ): Promise<{ coinDecimal: number; ratesDollar: number }> {
    return this.poolsService.getRates(poolId);
  }

  @Get('coin/:coinName')
  getByCoinName(
    @Param('coinName') coinName: string,
  ): Promise<{
    CoinId: string;
    PoolId: string;
    coinName: string;
    decimals: number;
    rates_dollar: number;
  }> {
    return this.poolsService.findByCoinName(coinName);
  }

  @Patch('coin/:coinName/rates')
  updateRatesByCoinName(
    @Param('coinName') coinName: string,
    @Body('rates_dollar') rates_dollar: number,
  ): Promise<{
    CoinId: string;
    PoolId: string;
    coinName: string;
    decimals: number;
    rates_dollar: number;
  }> {
    return this.poolsService.updateDollarRateByCoinName(coinName, rates_dollar);
  }
}
