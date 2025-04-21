import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
// import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AgentModule } from './agent/agent.module';
// import { EventListenersService } from './event-listeners/event-listeners.service';
import { EventListenersModule } from './event-listeners/event-listeners.module';

@Module({
  imports: [PrismaModule, UsersModule, AgentModule, EventListenersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
