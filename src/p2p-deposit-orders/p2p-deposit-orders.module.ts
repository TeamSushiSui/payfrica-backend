import { Module } from '@nestjs/common';
import { P2pDepositOrdersService } from './p2p-deposit-orders.service';
import { P2pDepositOrdersController } from './p2p-deposit-orders.controller';

@Module({
  controllers: [P2pDepositOrdersController],
  providers: [P2pDepositOrdersService],
})
export class P2pDepositOrdersModule {}
