import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
// import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AgentModule } from './agent/agent.module';
// import { EventListenersService } from './event-listeners/event-listeners.service';
import { EventListenersModule } from './event-listeners/event-listeners.module';
import { PoolsService } from './pools/pools.service';
import { PoolsController } from './pools/pools.controller';
import { PoolsModule } from './pools/pools.module';

@Module({
  imports: [PrismaModule, UsersModule, AgentModule, EventListenersModule, PoolsModule],
  controllers: [AppController, PoolsController],
  providers: [AppService, PoolsService],
})
export class AppModule {}
