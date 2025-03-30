import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { P2PDepositOrder } from '@prisma/client';

@Injectable()
export class P2pDepositOrdersService {
  constructor(private readonly prisma: PrismaService) {}
  async createOrder(wallet: string, amount: number, agentId: string, accountNumber: string, bank: string, name: string): Promise<P2PDepositOrder> {
    return this.prisma.prismaClient.p2PDepositOrder.create({
      data: {
        wallet,
        amount,
        agentId,
        status: 'pending',
        accountNumber,
        bank,
        name,
      },
    });
  }

  async getAllOrders(): Promise<P2PDepositOrder[]> {
    return this.prisma.prismaClient.p2PDepositOrder.findMany();
  }

  async getOrderById(id: string): Promise<P2PDepositOrder | null> {
    return this.prisma.prismaClient.p2PDepositOrder.findUnique({
      where: { id },
    });
  }

  async updateOrderStatus(id: string, status: string): Promise<P2PDepositOrder> {
    return this.prisma.prismaClient.p2PDepositOrder.update({
      where: { id },
      data: {
        status,
        completedAt: status === 'completed' ? new Date() : null,
      },
    });
  }

  async getPendingOrders(): Promise<P2PDepositOrder[]> {
    return this.prisma.prismaClient.p2PDepositOrder.findMany({
      where: { status: 'pending' },
    });
  }

  async getPendingOrdersByAgent(agentId: string): Promise<P2PDepositOrder[]> {
    return this.prisma.prismaClient.p2PDepositOrder.findMany({
      where: { status: 'pending', agentId },
    });
  }
}                              
