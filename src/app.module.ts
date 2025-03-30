import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { P2pDepositOrdersModule } from './p2p-deposit-orders/p2p-deposit-orders.module';
import { AgentModule } from './agent/agent.module';

@Module({
  imports: [PrismaModule, UsersModule, P2pDepositOrdersModule, AgentModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
