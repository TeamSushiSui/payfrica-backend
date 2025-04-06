/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import { Agent } from '@prisma/client';
import { WithdrawStatus, DepositStatus } from '@prisma/client';
import { UsersService } from '../../src/users/users.service';

@Injectable()
export class AgentService {
  constructor(private readonly prisma: PrismaService, private usersService: UsersService) {}
  async createAgent(data: {
    addr: string;
    coinType: string;
    minWithdrawLimit?: number;
    maxWithdrawLimit?: number;
    minDepositLimit?: number;
    maxDepositLimit?: number;
    accountNumber: string;
    bank: string;
    name: string
  }) {
    return this.prisma.prismaClient.agent.create({
      data: {
        addr: data.addr,
        coinType: data.coinType,
        balance: 0,
        minWithdrawLimit: data.minWithdrawLimit || 0,
        maxWithdrawLimit: data.maxWithdrawLimit || 0,
        minDepositLimit: data.minDepositLimit || 0,
        maxDepositLimit: data.maxDepositLimit || 0,
        accountNumber: data.accountNumber,
        bank: data.bank, 
        name: data.name,
      },
    });
  }

  async getAllAgents(): Promise<Agent[]> {
    return this.prisma.prismaClient.agent.findMany();
  }

  async findAgentsByType(coinType: string) {
    return this.prisma.prismaClient.agent.findMany({
      where: { coinType },
    });
  }

  async getAgentById(agentId: string): Promise<Agent | null> {
    return this.prisma.prismaClient.agent.findUnique({
      where: { id: agentId },
    });
  }

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
        const withinMaxLimit = amount <= agent.maxDepositLimit || agent.maxDepositLimit === 0;
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

async getBestWithdrawalAgent(coinType: string, amount: number): Promise<{ id: string} | null> {
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
      const withinMaxLimit = amount <= agent.maxWithdrawLimit || agent.maxWithdrawLimit === 0;
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

  async updateAgentLimits(id: string, data: {
    minWithdrawLimit?: number;
    maxWithdrawLimit?: number;
    minDepositLimit?: number;
    maxDepositLimit?: number;
  }) {
    return this.prisma.prismaClient.agent.update({
      where: { id },
      data,
    });
  }

  async addAgentBalance(id: string, amount: number) {
    const agent = await this.prisma.prismaClient.agent.findUnique({ where: { id } });
    if (!agent) {
      throw new Error('Agent not found');
    }
    return this.prisma.prismaClient.agent.update({
      where: { id },
      data: { balance: agent.balance + amount },
    });
  }

  async createWithdrawRequest(data: {
    requestId: string;
    amount: number;
    user: string;
    coinType: string;
  }) {
    const best_agent = await this.getBestWithdrawalAgent(data.coinType, data.amount); 
    if (!best_agent) {
      throw new Error('Best Agent not found');
    }
    const agentId = best_agent.id;
    const agent = await this.prisma.prismaClient.agent.findUnique({ 
      where: { id: agentId } 
    });

    // Find or create user record
    const user = await this.usersService.findOrCreateUser(data.user);

    // Update agent's pending withdrawals total
    if (!agent) {
      throw new Error('Agent not found');
    }
    await this.prisma.prismaClient.agent.update({
      where: { id: agentId },
      data: {
        totalPendingWithdrawals: agent.totalPendingWithdrawals + 1,
        totalPendingWithdrawalsAmount: agent.totalPendingWithdrawalsAmount + data.amount,
        balance: agent.balance + data.amount, // Adding to balance as in the smart contract
      },
    });

    // Create withdrawal request
    const withdrawRequest = await this.prisma.prismaClient.withdrawRequest.create({
      data: {
        requestId: data.requestId,
        amount: data.amount,
        user: data.user,
        agentId,
        coinType: data.coinType,
        status: WithdrawStatus.PENDING,
        requestTime: new Date(),
      },
    });

    // Record withdrawal in user history
    await this.usersService.recordWithdrawal({
      userId: user.id,
      withdrawalId: withdrawRequest.id,
      amount: data.amount,
      agentId: agentId,
      coinType: data.coinType,
      status: 'PENDING',
      timestamp: new Date()
    });

    return withdrawRequest;
  }

  async approveWithdrawal(id: string, agentId: string) {
    const withdrawRequest = await this.prisma.prismaClient.withdrawRequest.findUnique({
      where: { id },
    });

    if (!withdrawRequest) {
      throw new Error('withdrawRequest not found');
    }

    const agent = await this.prisma.prismaClient.agent.findUnique({
      where: { id: agentId },
    });

    if (!agent) {
      throw new Error('Agent not found');
    }

    if (agent.balance < withdrawRequest.amount) {
      throw new Error('Insufficient agent balance')
    }
    // Update the status and move the request to successful withdrawals
    const updatedRequest = await this.prisma.prismaClient.withdrawRequest.update({
      where: { id },
      data: {
        status: WithdrawStatus.COMPLETED,
        statusTime: new Date(),
        successfulAgentId: agentId,
        // agent: { disconnect: true },
      },
    });

    // Update agent's totals
    await this.prisma.prismaClient.agent.update({
      where: { id: agentId },
      data: {
        totalSuccessfulWithdrawals: agent.totalSuccessfulWithdrawals + 1,
        totalPendingWithdrawals: agent.totalPendingWithdrawals - 1,
        totalSuccessfulWithdrawalsAmount: agent.totalSuccessfulWithdrawalsAmount + withdrawRequest.amount,
        totalPendingWithdrawalsAmount: agent.totalPendingWithdrawalsAmount - withdrawRequest.amount,
      },
    });

    // Find user and update their transaction history
    const user = await this.prisma.prismaClient.user.findFirst({
      where: { address: withdrawRequest.user }
    });

    if (user) {
      await this.usersService.recordWithdrawal({
        userId: user.id,
        withdrawalId: withdrawRequest.id,
        amount: withdrawRequest.amount,
        agentId: agentId,
        coinType: withdrawRequest.coinType,
        status: 'COMPLETED',
        timestamp: new Date()
      });
    }
    return updatedRequest;
  }

  async createDepositRequest(data: {
    requestId: string;
    amount: number;
    user: string;
    coinType: string;
  }) {
    const best_agent = await this.getBestDepositAgent(data.coinType, data.amount)
    if (!best_agent) {
      throw new Error('best_agent not found');
    }
    const agentId = best_agent.id;
    const agent = await this.prisma.prismaClient.agent.findUnique({
      where: { id: agentId },
    });

    if (!agent) {
      throw new Error('Agent not found');
    }

    // Find or create user record
    const user = await this.usersService.findOrCreateUser(data.user);

    // Update agent's pending deposits total
    await this.prisma.prismaClient.agent.update({
      where: { id: agentId },
      data: {
        totalPendingDeposits: agent.totalPendingDeposits + 1,
        totalPendingDepositsAmount: agent.totalPendingDepositsAmount + data.amount,
      },
    });

    // Create deposit request
    const depositRequest = await this.prisma.prismaClient.depositRequest.create({
      data: {
        requestId: data.requestId,
        amount: data.amount,
        user: data.user,
        agentId,
        coinType: data.coinType,
        status: DepositStatus.PENDING,
        requestTime: new Date(),
      },
    });

    // Record deposit in user history
    await this.usersService.recordDeposit({
      userId: user.id,
      depositId: depositRequest.id,
      amount: data.amount,
      agentId,
      coinType: data.coinType,
      status: 'PENDING',
      timestamp: new Date()
    });

    return [best_agent,depositRequest];
  }

  async approveDeposit(id: string, agentId: string) {
    const depositRequest = await this.prisma.prismaClient.depositRequest.findUnique({
      where: { id },
    });

    if (!depositRequest) {
      throw new Error('depositRequest not found');
    }

    const agent = await this.prisma.prismaClient.agent.findUnique({
      where: { id: agentId },
    });

    if (!agent) {
      throw new Error('Agent not found');
    }

    // Ensure agent has enough balance
    if (agent.balance < depositRequest.amount) {
      throw new Error('Insufficient agent balance');
    }

    // Update the status and move the request to successful deposits
    const updatedRequest = await this.prisma.prismaClient.depositRequest.update({
      where: { id },
      data: {
        status: DepositStatus.COMPLETED,
        statusTime: new Date(),
        successfulAgentId: agentId,
        // agent: { disconnect: true },
      },
    });

    // Update agent's totals and balance
    await this.prisma.prismaClient.agent.update({
      where: { id: agentId },
      data: {
        balance: agent.balance - depositRequest.amount,
        totalSuccessfulDeposits: agent.totalSuccessfulDeposits + 1,
        totalPendingDeposits: agent.totalPendingDeposits - 1,
        totalSuccessfulDepositsAmount: agent.totalSuccessfulDepositsAmount + depositRequest.amount,
        totalPendingDepositsAmount: agent.totalPendingDepositsAmount - depositRequest.amount,
      },
    });

    // Find user and update their transaction history
    const user = await this.prisma.prismaClient.user.findFirst({
      where: { address: depositRequest.user }
    });

    if (user) {
      await this.usersService.recordDeposit({
        userId: user.id,
        depositId: depositRequest.id,
        amount: depositRequest.amount,
        agentId: agentId,
        coinType: depositRequest.coinType,
        status: 'COMPLETED',
        timestamp: new Date()
      });
    }

    return updatedRequest;
  }

  async cancelDeposit(id: string, agentId: string) {
    const depositRequest = await this.prisma.prismaClient.depositRequest.findUnique({
      where: { id },
    });
    if (!depositRequest) {
      throw new Error('Agent not found');
    }

    const agent = await this.prisma.prismaClient.agent.findUnique({
      where: { id: agentId },
    });

    if (!agent) {
      throw new Error('Agent not found');
    }

    // Update the status and move the request to unsuccessful deposits
    const updatedRequest = await this.prisma.prismaClient.depositRequest.update({
      where: { id },
      data: {
        status: DepositStatus.CANCELLED,
        statusTime: new Date(),
        unsuccessfulAgentId: agentId,
        // agent: { disconnect: true },
      },
    });

    // Update agent's totals
    await this.prisma.prismaClient.agent.update({
      where: { id: agentId },
      data: {
        totalUnsuccessfulDeposits: agent.totalUnsuccessfulDeposits + 1,
        totalPendingDeposits: agent.totalPendingDeposits - 1,
        totalPendingDepositsAmount: agent.totalPendingDepositsAmount - depositRequest.amount,
      },
    });

    // Find user and update their transaction history
    const user = await this.prisma.prismaClient.user.findFirst({
      where: { address: depositRequest.user }
    });

    if (user) {
      await this.usersService.recordDeposit({
        userId: user.id,
        depositId: depositRequest.id,
        amount: depositRequest.amount,
        agentId: agentId,
        coinType: depositRequest.coinType,
        status: 'CANCELLED',
        timestamp: new Date()
      });
    }

    return updatedRequest;
  }

  async agentWithdrawBalance(agentId: string, amount: number) {
    const agent = await this.prisma.prismaClient.agent.findUnique({
      where: { id: agentId },
    });

    if (!agent) {
      throw new Error('Agent not found');
    }

    // Check if agent has enough available balance
    const availableBalance = agent.balance - agent.totalPendingWithdrawalsAmount - agent.totalPendingDepositsAmount;
    
    if (availableBalance < amount) {
      throw new Error('Insufficient available balance');
    }

    // Update agent balance
    return this.prisma.prismaClient.agent.update({
      where: { id: agentId },
      data: {
        balance: agent.balance - amount,
      },
    });
  }
}