import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { PrismaService } from "../../src/prisma/prisma.service";
import { HttpException, HttpStatus } from "@nestjs/common";


const mockPrismaService = {
    prismaClient: {
        user: {
            findMany: jest.fn(),
            findFirst: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
        },
    },
};

describe('UserService', () => {
    let service: UsersService;
    let prisma: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                {
                    provide: PrismaService,
                    useValue: mockPrismaService,
                },
            ],
        }).compile();

        service = module.get<UsersService>(UsersService);
        prisma = module.get<PrismaService>(PrismaService);

        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('findAll', () => {
        it('should return an array of users', async () => {
            const expectedUesrs = [
                { id: 1, walletAddress: '0x123', username: 'user1'},
                { id: 2, walletAddress: '0x456', username: 'user2'},
            ];
            mockPrismaService.prismaClient.user.findMany.mockResolvedValue(expectedUesrs);

            const result = await service.findAll();

            expect(result).toEqual(expectedUesrs);
            expect(mockPrismaService.prismaClient.user.findMany).toHaveBeenCalledTimes(1);
        });
    });

    describe('createUser', () => {
        it('should create user if address and username are unique', async () => {
            mockPrismaService.prismaClient.user.findFirst.mockResolvedValue(null);

            const newUser = { id: 1, walletAddress: '0x123', username: 'newUser' };
            mockPrismaService.prismaClient.user.create.mockResolvedValue(newUser);

            const result = await service.createUser('0x123', 'newUser');

            expect(mockPrismaService.prismaClient.user.findFirst).toHaveBeenCalledWith({
                where: {
                    OR: [
                        { walletAddress: '0x123' },
                        { username: 'newUser' }
                    ]
                }
            });

            expect(result).toEqual(newUser);
        })
    });

    it('should throw HttpException if wallet address exists', async () => {
        const existingUser = { id: 1, walletAddress: '0x123', username: 'existingUser' };
        mockPrismaService.prismaClient.user.findFirst.mockResolvedValue(existingUser);

        await expect(service.createUser('0x123', 'newUser')).rejects.toThrow(
            new HttpException('User or wallet address already exists', HttpStatus.CONFLICT)
        );

        expect(mockPrismaService.prismaClient.user.create).not.toHaveBeenCalled();
    })

    it('should throw HttpException if username alreadly exists', async () => {
        const  existingUser = { id: 1, walletAddres: '0x456', username: 'existingUser' };
        mockPrismaService.prismaClient.user.findFirst.mockResolvedValue(existingUser);

        await expect(service.createUser('0x123', 'existingUser')).rejects.toThrow(
            new HttpException('User or wallet address already exists', HttpStatus.CONFLICT)
        );

        expect(mockPrismaService.prismaClient.user.create).not.toHaveBeenCalled();
    })

    describe('findUserByWallet', () => {
        it('should return a user if found by wallet address', async () => {
            const expectedUser = { id: 1, walletAddress: '0x123', username: 'user1'};
            mockPrismaService.prismaClient.user.findUnique.mockResolvedValue(expectedUser);
    
            const result = await service.findUserByWallet('0x123');
    
            expect(mockPrismaService.prismaClient.user.findUnique).toHaveBeenCalledWith({
                where: { walletAddress: '0x123'}
            });
            expect(result).toEqual(expectedUser);
    
        });

        it('should return null if no user found by username', async () => {
            mockPrismaService.prismaClient.user.findUnique.mockResolvedValue(null);

            const result = await service.findUserByWallet('0x123');

            expect(mockPrismaService.prismaClient.user.findUnique).toHaveBeenCalledWith({
                where: { walletAddress: '0x123' }
            });
            expect(result).toBeNull();
        })
    })

    describe('findUserByName', () => {
        it('should return a user if found by username', async () => {
            const existedUser = { id: 1, walletAddress: '0x123', username: 'user1'};
            mockPrismaService.prismaClient.user.findFirst.mockResolvedValue(existedUser);

            const result = await service.findUserByName('user1');

            expect(mockPrismaService.prismaClient.user.findFirst).toHaveBeenCalledWith({
                where: { username: 'user1'}
            });

            expect(result).toEqual(existedUser);
        });

        it('should return null if user not found by username', async () => {
            mockPrismaService.prismaClient.user.findFirst.mockResolvedValue(null);

            const result = await service.findUserByName('user1');

            expect(mockPrismaService.prismaClient.user.findFirst).toHaveBeenCalledWith({
                where: { username: 'user1'}
            });

            expect(result).toBeNull();
        })

    })
});
