/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';


@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async findAll(): Promise<User[]> {
        return await this.prisma.prismaClient.user.findMany();
    }

    async findOrCreateUser(address: string) {
        // Find user or create if doesn't exist
        const user = await this.prisma.prismaClient.user.findUnique({
          where: { address },
        });
    
        if (user) {
          return user;
        }
    
        return this.prisma.prismaClient.user.create({
          data: { id: address, address }
        });
    }

    async updateUsername(userId: string, newUsername: string): Promise<User> {
        const user = await this.prisma.prismaClient.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        return this.prisma.prismaClient.user.update({
            where: { id: userId },
            data: { username: newUsername },
        });
    }

    async updateAccountDetails(userId: string, account_details: { accountNumber: string, name: string, bank: string }): Promise<User> {
        const user = await this.prisma.prismaClient.user.findUnique({
            where: { id: userId },
            include: { accountDetails: true }, // Include existing accountDetails
        });
    
        if (!user) {
            throw new Error('User not found');
        }
    
        const updatedUser = await this.prisma.prismaClient.user.update({
            where: { id: userId },
            data: {
            accountDetails: {
                upsert: {
                update: {
                    accountNumber: account_details.accountNumber,
                    name: account_details.name,
                    bank: account_details.bank,
                },
                create: {
                    accountNumber: account_details.accountNumber,
                    name: account_details.name,
                    bank: account_details.bank,
                },
                },
            },
            },
            include: { accountDetails: true },
        });
        return updatedUser;
    }

    async getUserTransactionHistory(address: string) {
        const user = await this.prisma.prismaClient.user.findUnique({
          where: { address },
        });
    
        if (!user) {
          return null;
        }
    
        const withdrawals = await this.prisma.prismaClient.withdrawRequest.findMany({
          where: { user: address },
          orderBy: { requestTime: 'desc' },
        });
    
        const deposits = await this.prisma.prismaClient.depositRequest.findMany({
          where: { user: address },
          orderBy: { requestTime: 'desc' },
        });
    
        return {
          user,
          withdrawals,
          deposits,
        };
    }

    async recordWithdrawal(data: {
        userId: string,
        withdrawalId: string,
        amount: number,
        agentId: string,
        coinType: string,
        status: string,
        timestamp: Date
      }) {
        const user = await this.prisma.prismaClient.user.findUnique({
          where: { id: data.userId },
        });
    
        // Update total withdrawn amount if the withdrawal is completed
        if (!user) {
          throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        let totalWithdrawn = user.totalWithdrawn;
        if (data.status === 'COMPLETED') {
          totalWithdrawn += data.amount;
        }
    
        // Add withdrawal to history and update totals
        return this.prisma.prismaClient.user.update({
          where: { id: data.userId },
          data: {
            withdrawals: {
              push: {
                id: data.withdrawalId,
                amount: data.amount,
                agentId: data.agentId,
                coinType: data.coinType,
                status: data.status,
                timestamp: data.timestamp
              }
            },
            totalWithdrawn,
          }
        });
    }

    async recordDeposit(data: {
        userId: string,
        depositId: string,
        amount: number,
        agentId: string,
        coinType: string,
        status: string,
        timestamp: Date
      }) {
        const user = await this.prisma.prismaClient.user.findUnique({
          where: { id: data.userId },
        });
    
        // Update total deposited amount if the deposit is completed
        if (!user) {
          throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        let totalDeposited = user.totalDeposited;
        if (data.status === 'COMPLETED') {
          totalDeposited += data.amount;
        }
    
        // Add deposit to history and update totals
        return this.prisma.prismaClient.user.update({
          where: { id: data.userId },
          data: {
            deposits: {
              push: {
                id: data.depositId,
                amount: data.amount,
                agentId: data.agentId,
                coinType: data.coinType,
                status: data.status,
                timestamp: data.timestamp
              }
            },
            totalDeposited,
          }
        });
    }

    async getUserStats(address: string) {
        const user = await this.prisma.prismaClient.user.findUnique({
          where: { address },
        });
    
        if (!user) {
          return null;
        }
    
        // Get active (pending) withdrawals
        const activeWithdrawals = await this.prisma.prismaClient.withdrawRequest.findMany({
          where: { 
            user: address,
            status: 'PENDING'
          },
        });
    
        // Get active (pending) deposits
        const activeDeposits = await this.prisma.prismaClient.depositRequest.findMany({
          where: { 
            user: address,
            status: 'PENDING'
          },
        });
    
        // Calculate active amounts
        const activeWithdrawalAmount = activeWithdrawals.reduce(
          (sum, withdrawal) => sum + withdrawal.amount, 0
        );
        
        const activeDepositAmount = activeDeposits.reduce(
          (sum, deposit) => sum + deposit.amount, 0
        );
    
        return {
          address: user.address,
          totalWithdrawn: user.totalWithdrawn,
          totalDeposited: user.totalDeposited,
          activeWithdrawals: activeWithdrawals.length,
          activeDeposits: activeDeposits.length,
          activeWithdrawalAmount,
          activeDepositAmount,
        };
    }

    // async findUserByWallet(walletAddress: string): Promise<User | null> {
    //     return await this.prisma.prismaClient.user.findUnique({
    //       where: { walletAddress },
    //     });
    // }

    // async findUserByName(username: string) {
    //     return await this.prisma.prismaClient.user.findFirst({
    //         where: { username },
    //     });
    // }
}