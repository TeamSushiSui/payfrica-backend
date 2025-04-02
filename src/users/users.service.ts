import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';


@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async findAll(): Promise<User[]> {
        return await this.prisma.prismaClient.user.findMany();
    }

    async createUser(walletAddress: string, username: string): Promise<User> {
        const existingUser = await this.prisma.prismaClient.user.findFirst({
            where: {
                OR: [
                    { walletAddress },
                    { username }
                ],
            }
        });

        if (existingUser) {
            throw new HttpException(
                'User or wallet address already exists',
                HttpStatus.CONFLICT,
            );
        }

        return this.prisma.prismaClient.user.create({
            data: { walletAddress, username },
        });
    }

    async findUserByWallet(walletAddress: string): Promise<User | null> {
        return await this.prisma.prismaClient.user.findUnique({
          where: { walletAddress },
        });
    }

    async findUserByName(username: string) {
        return await this.prisma.prismaClient.user.findFirst({
            where: { username },
        });
    }
}