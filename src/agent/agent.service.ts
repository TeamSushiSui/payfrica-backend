/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import { WithdrawRequest, DepositRequest, Agent } from '@prisma/client';
import { UsersService } from '../../src/users/users.service';
import { UpdateAccountDto } from './dto/update-account.dto';

const PAYF_RES_ID =
  '0xe009bc22cd83b37ee9eca0bf2dea89fefb49574099d669f16f1541ba491dd6b1';
@Injectable()
export class AgentService {
    constructor(private readonly prisma: PrismaService, private usersService: UsersService) { }
    async getBestDepositAgent(coinType: string, amount: number): Promise<{ id: string, accountNumber: string, bank: string, name: string } | null> {
        const agents = await this.prisma.prismaClient.agent.findMany({
            where: {
                coinType: coinType
            },
            select: {
                id: true,
                accountNumber: true,
                bank: true,
                name: true,
                balance: true,
                minDepositLimit: true,
                maxDepositLimit: true
            }
        });

        const suitableAgent = agents.find(agent => {
            const hasEnoughBalance = agent.balance >= amount;
            const withinMinLimit = amount >= agent.minDepositLimit;
            const withinMaxLimit = amount <= Number(agent.maxDepositLimit) || agent.maxDepositLimit === BigInt(0);
            return hasEnoughBalance && withinMinLimit && withinMaxLimit;
        });

        if (!suitableAgent) {
            return null;
        }

        return {
            id: suitableAgent.id,
            accountNumber: suitableAgent.accountNumber,
            bank: suitableAgent.bank,
            name: suitableAgent.name
        };
    }

    async getBestWithdrawalAgent(coinType: string, amount: number): Promise<{ id: string } | null> {
        const agents = await this.prisma.prismaClient.agent.findMany({
            where: {
                coinType: coinType
            },
            select: {
                id: true,
                balance: true,
                minWithdrawLimit: true,
                maxWithdrawLimit: true
            }
        });

        const suitableAgent = agents.find(agent => {
            const hasEnoughBalance = agent.balance >= amount;
            const withinMinLimit = amount >= agent.minWithdrawLimit;
            const withinMaxLimit = amount <= Number(agent.maxWithdrawLimit) || agent.maxWithdrawLimit === BigInt(0);
            return hasEnoughBalance && withinMinLimit && withinMaxLimit;
        });

        if (!suitableAgent) {
            return null;
        }

        return {
            id: suitableAgent.id,
        };
    }

    async getAgentAccountDetails(agentId: string): Promise<{ accountNumber: string; bank: string; name: string } | null> {
        return this.prisma.prismaClient.agent.findUnique({
            where: { id: agentId },
            select: {
                accountNumber: true,
                bank: true,
                name: true,
            },
        });
    }

    async findWithdrawRequests(agentId: string): Promise<WithdrawRequest[]> {
        return this.prisma.WithdrawRequest.findMany({
            where: { agentId },
            orderBy: { requestTime: 'desc' },
        });
    }
    async findDepositRequests(agentId: string): Promise<DepositRequest[]> {
        return this.prisma.DepositRequest.findMany({
            where: { agentId },
            orderBy: { requestTime: 'desc' },
        });
    }

    async findPendingWithdrawRequests(agentId: string) {
        return this.prisma.WithdrawRequest.findMany({
            where: { agentId, status: 'Pending' },
            orderBy: { requestTime: 'desc' },
        });
    }

    async findPendingDepositRequests(agentId: string) {
        return this.prisma.DepositRequest.findMany({
            where: { agentId, status: 'Pending' },
            orderBy: { requestTime: 'desc' },
        });
    }

    async updateAccount(agentId: string, dto: UpdateAccountDto): Promise<Agent> {
        return this.prisma.agent.update({
            where: { id: agentId },
            data: {
                name: dto.accountName,
                accountNumber: dto.accountNumber,
                bank: dto.accountBank,
            },
        });
    }

    async getValidAgentTypes(): Promise<{ shortName: string; fullType: string }[]> {
        const rec = await this.prisma.payfricaAgents.findUnique({
          where: { id: PAYF_RES_ID },
          select: { validTypes: true },
        });
        if (!rec || !Array.isArray(rec.validTypes)) {
          return [];
        }
        return (rec.validTypes as Record<string, string>[]).map((obj) => {
          const shortName = Object.keys(obj)[0];
          return { shortName, fullType: obj[shortName] };
        });
      }
}