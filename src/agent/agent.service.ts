/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import { WithdrawRequest, DepositRequest, Agent } from '@prisma/client';
import { UsersService } from '../../src/users/users.service';
import { UpdateAccountDto } from './dto/update-account.dto';
import { CONFIG } from 'config';

type AgentTransaction =
    | (WithdrawRequest & { type: 'withdrawal' })
    | (DepositRequest & { type: 'deposit' });

const PAYF_RES_ID = CONFIG.PAYF_RES_ID;

function generateBankSafeComment(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];
    const randomDigit = () => Math.floor(Math.random() * 10);

    const comment = [
        randomLetter(), randomLetter(),
        randomDigit(), randomDigit(), randomDigit(),
        Math.random() > 0.5 ? randomLetter() : '' // optional last letter
    ].join('');

    return comment;
}

@Injectable()
export class AgentService {
    constructor(private readonly prisma: PrismaService, private usersService: UsersService) { }
    async getBestDepositAgent(coinType: string, amount: number): Promise<{ id: string, accountNumber: string, bank: string, name: string, comment: string } | null> {
        console.log(coinType, amount);
        const agents = await this.prisma.agent.findMany({
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
        // console.log(agents);

        const suitableAgent = agents.find(agent => {
            const hasEnoughBalance = agent.balance >= amount;
            const withinMinLimit = amount >= agent.minDepositLimit;
            const withinMaxLimit = amount <= Number(agent.maxDepositLimit) || agent.maxDepositLimit === BigInt(0);
            return hasEnoughBalance && withinMinLimit && withinMaxLimit;
        });

        if (!suitableAgent) {
            return null;
        }

        const comment = generateBankSafeComment();

        return {
            id: suitableAgent.id,
            accountNumber: suitableAgent.accountNumber,
            bank: suitableAgent.bank,
            name: suitableAgent.name,
            comment: comment
        };
    }

    async getBestWithdrawalAgent(coinType: string, amount: number): Promise<{ id: string } | null> {
        const agents = await this.prisma.agent.findMany({
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
        return this.prisma.agent.findUnique({
            where: { id: agentId },
            select: {
                accountNumber: true,
                bank: true,
                name: true,
            },
        });
    }

    async findWithdrawRequests(agentId: string): Promise<WithdrawRequest[]> {
        return this.prisma.withdrawRequest.findMany({
            where: { agentId },
            orderBy: { requestTime: 'desc' },
        });
    }
    async findDepositRequests(agentId: string): Promise<DepositRequest[]> {
        return this.prisma.depositRequest.findMany({
            where: { agentId },
            orderBy: { requestTime: 'desc' },
        });
    }

    async findPendingWithdrawRequests(agentId: string) {
        return this.prisma.withdrawRequest.findMany({
            where: { agentId, status: 'PENDING' },
            orderBy: { requestTime: 'desc' },
        });
    }

    async findPendingDepositRequests(agentId: string) {
        return this.prisma.depositRequest.findMany({
            where: { agentId, status: 'PENDING' },
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
        if (!Array.isArray(rec.validTypes) || !rec.validTypes.every(item => typeof item === 'object' && item !== null)) {
            return [];
        }
        return (rec.validTypes as Record<string, string>[]).map((obj) => {
            const shortName = Object.keys(obj)[0];
            return { shortName, fullType: obj[shortName] };
        });
    }

    async getTransactionHistory(agentId: string): Promise<AgentTransaction[]> {
        // first, ensure the agent exists
        const agentExists = await this.prisma.agent.findUnique({ where: { id: agentId } });
        if (!agentExists) {
            throw new NotFoundException(`Agent with id ${agentId} not found.`);
        }
        
        // fetch both sides in parallel
        const [withdrawals, deposits] = await Promise.all([
            this.prisma.withdrawRequest.findMany({
                where: { agentId },
                orderBy: { requestTime: 'desc' },
            }),
            this.prisma.depositRequest.findMany({
                where: { agentId },
                orderBy: { requestTime: 'desc' },
            }),
        ]);

        // tag each record with its type
        const taggedWithdrawals: AgentTransaction[] = withdrawals.map(w => ({
            ...w,
            type: 'withdrawal' as const,
        }));
        const taggedDeposits: AgentTransaction[] = deposits.map(d => ({
            ...d,
            type: 'deposit' as const,
        }));

        // merge & sort by timestamp descending
        return [...taggedWithdrawals, ...taggedDeposits].sort(
            (a, b) => b.requestTime.getTime() - a.requestTime.getTime(),
        );
    }

    async getRequestsByAddress(address: string): Promise<AgentTransaction[]> {
        // console.log(address)
        const agent = await this.prisma.agent.findFirst({
            where: { addr: address },
            select: { id: true },
        });
        if (!agent) {
            throw new NotFoundException(`Agent with address ${address} not found`);
        }
        return this.getTransactionHistory(agent.id);
    }
}