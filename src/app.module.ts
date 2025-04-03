import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AgentModule } from './agent/agent.module';

@Module({
  imports: [PrismaModule, UsersModule, AgentModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
