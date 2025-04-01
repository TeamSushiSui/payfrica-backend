import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.prismaClient.user.findMany();
    }

    async createUser(walletAddress: string, username: string) {
        const existingUser = await this.prisma.prismaClient.User.findUnique({
            where: { walletAddress },
        })

        if (existingUser) {
            throw new HttpException(
                'User with this wallet address already exists',
                HttpStatus.CONFLICT,
            );
        }

        return this.prisma.prismaClient.user.create({
            data: { walletAddress, username },
        });
    }

    async findUserByWallet(walletAddress: string) {
        return this.prisma.prismaClient.user.findUnique({
          where: { walletAddress },
        });
    }
}
