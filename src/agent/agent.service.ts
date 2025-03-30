import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Agent } from '@prisma/client';

@Injectable()
export class AgentService {
  constructor(private readonly prisma: PrismaService) {}
  async createAgent(agentId: string, accountNumber: string, bank: string, accountName: string): Promise<Agent> {
    return this.prisma.prismaClient.agent.create({
      data: { agentId, accountNumber, bank, accountName },
    });
  }

  async getAllAgents(): Promise<Agent[]> {
    return this.prisma.prismaClient.agent.findMany();
  }
  
  async getAgentById(agentId: string): Promise<Agent | null> {
    return this.prisma.prismaClient.agent.findUnique({
      where: { agentId },
    });
  }
}