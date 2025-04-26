import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
    public prismaClient: PrismaClient;
    WithdrawRequest: any;
    DepositRequest: any;
    agent: any;
    payfricaAgents: any;
    pool: any;
    liquidityProvider: any;
    swapFee: any;
  user: any;
  baseToken: any;
    constructor() {
        this.prismaClient = new PrismaClient();
    }
}
