/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Transaction } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
import { Country, AccountDetails } from '@prisma/client';
import { Tokens } from '@prisma/client';
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOrCreateUser(address: string) {
    // Find user or create if doesn't exist
    const user = await this.prisma.user.findUnique({
      where: { address },
    });

    if (user) {
      return user;
    }

    return this.prisma.user.create({
      data: { address: address }
    });
  }

  async updateUsername(address: string, newUsername: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { address },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return this.prisma.user.update({
      where: { address },
      data: { username: newUsername },
    });
  }

  async updateAccountDetails(address: string, account_details: { accountNumber: string, name: string, bank: string }): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { address },
      include: { accountDetails: true }, // Include existing accountDetails
    });

    if (!user) {
      throw new Error('User not found');
    }

    const updatedUser = await this.prisma.user.update({
      where: { address },
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
    const userWithTransactions = await this.prisma.user.findUnique({
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
    const user = await this.prisma.user.findUnique({
      where: { address }, 
    });

    if (!user) {
      return null;
    }

    // Get active (pending) withdrawals
    const activeWithdrawals = await this.prisma.withdrawRequest.findMany({
      where: {
        user: address,
        status: 'PENDING'
      },
    });

    // Get active (pending) deposits
    const activeDeposits = await this.prisma.depositRequest.findMany({
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

  async update(address: string, dto: UpdateUserDto): Promise<User> {
    const data: any = {};
    if (dto.username !== undefined) {
      data.username = dto.username;
    }
    if (dto.language !== undefined) {
      data.language = dto.language;
    }
    if (dto.countryName !== undefined) {
      data.country = { connect: { name: dto.countryName } };
    }

    try {
      return await this.prisma.user.update({
        where: { address },
        data,
      });
    } catch (e) {
      throw new NotFoundException(`User with address ${address} not found.`);
    }
  }

  async findOne(
    address: string,
  ): Promise<
    User & {
      country?: Country & { baseToken?: Tokens };
      accountDetails?: AccountDetails;
    }
  > {
    const user = await this.prisma.user.findUnique({
      where: { address },
      include: {
        // include the country relation and, within it, the baseToken relation
        country: {
          include: {
            baseToken: true,
          },
        },
        accountDetails: true,
      },
    });
  
    if (!user) {
      throw new NotFoundException(`User with address ${address} not found.`);
    }
  
    // Destructure out the relations
    const { country, accountDetails, ...rest } = user;
  
    return {
      ...rest,
      // map null → undefined for both relations
      country: country
        ? {
            ...country,
            baseToken: country.baseToken ?? undefined,
          }
        : undefined,
      accountDetails: accountDetails ?? undefined,
    };
  }
}