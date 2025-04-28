import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PoolsController } from './pools.controller';
import { PoolsService } from './pools.service';

@Module({
  imports: [PrismaModule],        // ← make sure this is here
  controllers: [PoolsController],
  providers:    [PoolsService],
})
export class PoolsModule {}
