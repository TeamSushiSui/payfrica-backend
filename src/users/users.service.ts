/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Transaction } from '@prisma/client';
import { UpdateBaseTokenDto } from './dto/update-base-token.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

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

  async getUserTransactionHistory(address: string): Promise<{
    user: User;
    transactions: Transaction[];
  } | null> {
    const userWithTransactions = await this.prisma.prismaClient.user.findUnique({
      where: { address },
      include: {
        transactions: {
          orderBy: { date: 'desc' },
        },
      },
    });

    if (!userWithTransactions) {
      return null;
    }

    const { transactions, ...user } = userWithTransactions;
    return { user, transactions };
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
      (sum, withdrawal) => sum + Number(withdrawal.amount), 0
    );

    const activeDepositAmount = activeDeposits.reduce(
      (sum, deposit) => sum + Number(deposit.amount), 0
    );

    return {
      address: user.address,
      activeWithdrawals: activeWithdrawals.length,
      activeDeposits: activeDeposits.length,
      activeWithdrawalAmount,
      activeDepositAmount,
    };
  }

  async getUserBaseToken(userId: string): Promise<{
    name: string;
    coinType: string;
    decimals: number;
    symbol: string;
  } | null> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { baseToken: true },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    if (!user.baseToken) {
      return null;
    }
    const { name, coinType, decimals, symbol } = user.baseToken;
    return { name, coinType, decimals, symbol };
  }

  async updateUserBaseToken(
    userId: string,
    dto: UpdateBaseTokenDto,
  ): Promise<{
    name: string;
    coinType: string;
    decimals: number;
    symbol: string;
  }> {
    // 1) Ensure user exists
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    // 2) Upsert the BaseToken (create if missing, else update its fields)
    const token = await this.prisma.baseToken.upsert({
      where: { name: dto.name },
      create: {
        name:     dto.name,
        coinType: dto.coinType,
        decimals: dto.decimals,
        symbol:   dto.symbol,
      },
      update: {
        coinType: dto.coinType,
        decimals: dto.decimals,
        symbol:   dto.symbol,
      },
    });

    // 3) Connect user → this BaseToken
    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: {
        baseToken: { connect: { id: token.id } },
      },
      include: { baseToken: true },
    });

    // 4) Return the BaseToken shape
    const { name, coinType, decimals, symbol } = updatedUser.baseToken!;
    return { name, coinType, decimals, symbol };
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