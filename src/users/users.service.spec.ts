/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { PrismaService } from "../../src/prisma/prisma.service";
import { mockAccountDetails, mockDepositRequest, mockUserData, mockWithdrawRequest } from "../../src/agent/helpers/libs";

const mockPrismaService = {
    prismaClient: {
        user: {
            findMany: jest.fn(),
            findFirst: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
        },
        depositRequest: {
            create: jest.fn(),
            findUnique: jest.fn(),
            update: jest.fn(),
            findMany: jest.fn(),
          },
          withdrawRequest: {
            create: jest.fn(),
            findUnique: jest.fn(),
            update: jest.fn(),
            findMany: jest.fn(),
          }
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
                { id: '1', walletAddress: '0x123', username: 'user1' },
                { id: '2', walletAddress: '0x456', username: 'user2' },
            ].map(u => mockUserData(u));
            mockPrismaService.prismaClient.user.findMany.mockResolvedValue(expectedUesrs);

            const result = await service.findAll();

            expect(result).toEqual(expectedUesrs);
            expect(mockPrismaService.prismaClient.user.findMany).toHaveBeenCalledTimes(1);
        });

        it('should return an empty array if no users exist', async () => {
            mockPrismaService.prismaClient.user.findMany.mockResolvedValue([]);

            const result = await service.findAll();
            expect(result).toEqual([]);
        })
    });

    describe('findOrCreateUser', () => {
        it('should return an existing user if found', async () => {
            const mockUser = mockUserData({ id: 'user123', address: '0x123' });

            jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(mockUser);

            const result = await service.findOrCreateUser('0x123');
            expect(result).toEqual(mockUser);
            expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
                where: { address: '0x123' },
            });
        });

        it('should create and return a new user if not found', async () => {
            const mockNewUser = mockUserData({ id: '0x456', address: '0x456' });

            jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(null);
            jest.spyOn(prisma.prismaClient.user, 'create').mockResolvedValue(mockNewUser);

            const result = await service.findOrCreateUser('0x456');
            expect(result).toEqual(mockNewUser);
            expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
                where: { address: '0x456' },
            });
            expect(prisma.prismaClient.user.create).toHaveBeenCalledWith({
                data: { id: '0x456', address: '0x456' },
            });
        });
    });

    describe('updateAccountDetails', () => {
        it('should update account details for an existing user', async () => {
            const userId = 'user123';
            const accountDetails = mockAccountDetails({
                id: "643d1f9e8f1b2c0012345679",
                accountNumber: '1234567890',
                name: 'Updated Name',
                bank: 'Updated Bank',
            });
            const mockUser = mockUserData({
                id: userId,
            });

            jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(mockUser);
            jest.spyOn(prisma.prismaClient.user, 'update').mockResolvedValue({
                ...mockUser,
                accountDetails: jest.fn().mockReturnValue(accountDetails),
            });

            const { accountNumber, name, bank } = accountDetails;
            const result = await service.updateAccountDetails(userId, { accountNumber, name, bank});
            // expect(result.accountDetails).toEqual(accountDetails);
            expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
                where: { id: userId },
                include: { accountDetails: true },
            });
              expect(prisma.prismaClient.user.update).toHaveBeenCalledWith({
                where: { id: userId },
                data: {
                  accountDetails: {
                    upsert: {
                      update: {
                        accountNumber,
                        bank,
                        name,
                        },
                      create: {
                        accountNumber,
                        bank,
                        name,
                        },
                    },
                  },
                },
                include: { accountDetails: true },
              });
        });

        it('should create account details if none exist', async () => {
          const userId = 'user123';
          const accountDetails = mockAccountDetails({
            accountNumber: '1234567890',
            name: 'John Doe',
            bank: 'Test Bank',
          });
          const mockUser = mockUserData({
            id: userId,
          });

          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(mockUser);
          jest.spyOn(prisma.prismaClient.user, 'update').mockResolvedValue({
            ...mockUser,
            accountDetails: jest.fn().mockReturnValue(accountDetails)
          })
          const { accountNumber, bank, name, }  = accountDetails;
          const result = await service.updateAccountDetails(userId, accountDetails);

        //   expect(result.accountDetails).toEqual(accountDetails);
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { id: userId },
            include: { accountDetails: true },
          });
          expect(prisma.prismaClient.user.update).toHaveBeenCalledWith({
            where: { id: userId },
            data: {
              accountDetails: {
                upsert: {
                  update: { accountNumber, bank, name, },
                  create: { accountNumber, bank, name, },
                },
              },
            },
            include: { accountDetails: true },
          });
        });

        it('should throw an error if the user is not found', async () => {
          const userId = 'nonexistent-user';
          const accountDetails = mockAccountDetails({
            accountNumber: '1234567890',
            name: 'John Doe',
            bank: 'Test Bank',
          });

          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(null);

          await expect(service.updateAccountDetails(userId, accountDetails)).rejects.toThrow(
            'User not found',
          );
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { id: userId },
            include: { accountDetails: true },
          });
          expect(prisma.prismaClient.user.update).not.toHaveBeenCalled();
        });
    });

    describe('getUserTransactionHistory', () => {
        it('should return transaction history for an existing user', async () => {
          const address = '0x123';
          const mockUser = mockUserData({ id: 'user123', address });
          const mockWithdrawals = [
            { id: 'withdraw1', amount: 100, user: address, requestTime: new Date() },
            { id: 'withdraw2', amount: 200, user: address, requestTime: new Date() },
          ].map(i => mockWithdrawRequest(i));
          const mockDeposits = [
            { id: 'deposit1', amount: 300, user: address, requestTime: new Date() },
            { id: 'deposit2', amount: 400, user: address, requestTime: new Date() },
          ].map(i => mockDepositRequest(i));
      
          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(mockUser);
          jest.spyOn(prisma.prismaClient.withdrawRequest, 'findMany').mockResolvedValue(mockWithdrawals);
          jest.spyOn(prisma.prismaClient.depositRequest, 'findMany').mockResolvedValue(mockDeposits);
      
          const result = await service.getUserTransactionHistory(address);
      
          expect(result).toEqual({
            user: mockUser,
            withdrawals: mockWithdrawals,
            deposits: mockDeposits,
          });
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { address },
          });
          expect(prisma.prismaClient.withdrawRequest.findMany).toHaveBeenCalledWith({
            where: { user: address },
            orderBy: { requestTime: 'desc' },
          });
          expect(prisma.prismaClient.depositRequest.findMany).toHaveBeenCalledWith({
            where: { user: address },
            orderBy: { requestTime: 'desc' },
          });
        });
      
        it('should return null if the user is not found', async () => {
          const address = '0x456';
      
          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(null);
      
          const result = await service.getUserTransactionHistory(address);
      
          expect(result).toBeNull();
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { address },
          });
          expect(prisma.prismaClient.withdrawRequest.findMany).not.toHaveBeenCalled();
          expect(prisma.prismaClient.depositRequest.findMany).not.toHaveBeenCalled();
        });
      });
    
      describe('recordWithdrawal', () => {
        it('should record a withdrawal and update the total withdrawn amount if the withdrawal is completed', async () => {
          const data = {
            userId: 'user123',
            withdrawalId: 'withdraw1',
            amount: 100,
            agentId: 'agent123',
            coinType: 'BTC',
            status: 'COMPLETED',
            timestamp: new Date(),
          };
          const mockUser = mockUserData({
            id: data.userId,
            totalWithdrawn: 500,
          });
      
          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(mockUser);
          jest.spyOn(prisma.prismaClient.user, 'update').mockResolvedValue({
            ...mockUser,
            totalWithdrawn: mockUser.totalWithdrawn + data.amount,
          });
      
          const result = await service.recordWithdrawal(data);
      
          expect(result.totalWithdrawn).toEqual(mockUser.totalWithdrawn + data.amount);
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { id: data.userId },
          });
          expect(prisma.prismaClient.user.update).toHaveBeenCalledWith({
            where: { id: data.userId },
            data: {
              withdrawals: {
                push: {
                  id: data.withdrawalId,
                  amount: data.amount,
                  agentId: data.agentId,
                  coinType: data.coinType,
                  status: data.status,
                  timestamp: data.timestamp,
                },
              },
              totalWithdrawn: mockUser.totalWithdrawn + data.amount,
            },
          });
        });
      
        it('should record a withdrawal without updating the total withdrawn amount if the withdrawal is not completed', async () => {
          const data = {
            userId: 'user123',
            withdrawalId: 'withdraw2',
            amount: 100,
            agentId: 'agent123',
            coinType: 'BTC',
            status: 'PENDING',
            timestamp: new Date(),
          };
          const mockUser = mockUserData({
            id: data.userId,
            totalWithdrawn: 500,
          });
      
          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(mockUser);
          jest.spyOn(prisma.prismaClient.user, 'update').mockResolvedValue(mockUser);
      
          const result = await service.recordWithdrawal(data);
      
          expect(result.totalWithdrawn).toEqual(mockUser.totalWithdrawn);
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { id: data.userId },
          });
          expect(prisma.prismaClient.user.update).toHaveBeenCalledWith({
            where: { id: data.userId },
            data: {
              withdrawals: {
                push: {
                  id: data.withdrawalId,
                  amount: data.amount,
                  agentId: data.agentId,
                  coinType: data.coinType,
                  status: data.status,
                  timestamp: data.timestamp,
                },
              },
              totalWithdrawn: mockUser.totalWithdrawn,
            },
          });
        });
      
        it('should throw an error if the user is not found', async () => {
          const data = {
            userId: 'nonexistent-user',
            withdrawalId: 'withdraw3',
            amount: 100,
            agentId: 'agent123',
            coinType: 'BTC',
            status: 'COMPLETED',
            timestamp: new Date(),
          };
      
          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(null);
      
          await expect(service.recordWithdrawal(data)).rejects.toThrow('User not found');
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { id: data.userId },
          });
          expect(prisma.prismaClient.user.update).not.toHaveBeenCalled();
        });
      });
      describe('recordDeposit', () => {
        it('should record a deposit and update the total deposited amount if the deposit is completed', async () => {
          const data = {
            userId: 'user123',
            depositId: 'deposit1',
            amount: 200,
            agentId: 'agent123',
            coinType: 'BTC',
            status: 'COMPLETED',
            timestamp: new Date(),
          };
          const mockUser = mockUserData({
            id: data.userId,
            totalDeposited: 1000,
          });
      
          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(mockUser);
          jest.spyOn(prisma.prismaClient.user, 'update').mockResolvedValue({
            ...mockUser,
            totalDeposited: mockUser.totalDeposited + data.amount,
          });
      
          const result = await service.recordDeposit(data);
      
          expect(result.totalDeposited).toEqual(mockUser.totalDeposited + data.amount);
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { id: data.userId },
          });
          expect(prisma.prismaClient.user.update).toHaveBeenCalledWith({
            where: { id: data.userId },
            data: {
              deposits: {
                push: {
                  id: data.depositId,
                  amount: data.amount,
                  agentId: data.agentId,
                  coinType: data.coinType,
                  status: data.status,
                  timestamp: data.timestamp,
                },
              },
              totalDeposited: mockUser.totalDeposited + data.amount,
            },
          });
        });
      
        it('should record a deposit without updating the total deposited amount if the deposit is not completed', async () => {
          const data = {
            userId: 'user123',
            depositId: 'deposit2',
            amount: 200,
            agentId: 'agent123',
            coinType: 'BTC',
            status: 'PENDING',
            timestamp: new Date(),
          };
          const mockUser = mockUserData({
            id: data.userId,
            totalDeposited: 1000,
          });
      
          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(mockUser);
          jest.spyOn(prisma.prismaClient.user, 'update').mockResolvedValue(mockUser);
      
          const result = await service.recordDeposit(data);
      
          expect(result.totalDeposited).toEqual(mockUser.totalDeposited);
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { id: data.userId },
          });
          expect(prisma.prismaClient.user.update).toHaveBeenCalledWith({
            where: { id: data.userId },
            data: {
              deposits: {
                push: {
                  id: data.depositId,
                  amount: data.amount,
                  agentId: data.agentId,
                  coinType: data.coinType,
                  status: data.status,
                  timestamp: data.timestamp,
                },
              },
              totalDeposited: mockUser.totalDeposited,
            },
          });
        });
      
        it('should throw an error if the user is not found', async () => {
          const data = {
            userId: 'nonexistent-user',
            depositId: 'deposit3',
            amount: 200,
            agentId: 'agent123',
            coinType: 'BTC',
            status: 'COMPLETED',
            timestamp: new Date(),
          };
      
          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(null);
      
          await expect(service.recordDeposit(data)).rejects.toThrow('User not found');
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { id: data.userId },
          });
          expect(prisma.prismaClient.user.update).not.toHaveBeenCalled();
        });
      });

      describe('getUserStats', () => {
        it('should return user stats, including totals and active transactions, for an existing user', async () => {
          const address = '0x123';
          const mockUser = mockUserData({
            id: 'user123',
            address,
            totalWithdrawn: 1000,
            totalDeposited: 2000,
          });
          const mockActiveWithdrawals = [
            { id: 'withdraw1', amount: 100, user: address },
            { id: 'withdraw2', amount: 200, user: address },
          ].map(i => mockWithdrawRequest(i));
          const mockActiveDeposits = [
            { id: 'deposit1', amount: 300, user: address },
            { id: 'deposit2', amount: 400, user: address },
          ].map(i => mockDepositRequest(i));
      
          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(mockUser);
          jest.spyOn(prisma.prismaClient.withdrawRequest, 'findMany').mockResolvedValue(mockActiveWithdrawals);
          jest.spyOn(prisma.prismaClient.depositRequest, 'findMany').mockResolvedValue(mockActiveDeposits);
      
          const result = await service.getUserStats(address);
      
          expect(result).toEqual({
            address: mockUser.address,
            totalWithdrawn: mockUser.totalWithdrawn,
            totalDeposited: mockUser.totalDeposited,
            activeWithdrawals: mockActiveWithdrawals.length,
            activeDeposits: mockActiveDeposits.length,
            activeWithdrawalAmount: mockActiveWithdrawals.reduce((sum, w) => sum + w.amount, 0),
            activeDepositAmount: mockActiveDeposits.reduce((sum, d) => sum + d.amount, 0),
          });
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { address },
          });
          expect(prisma.prismaClient.withdrawRequest.findMany).toHaveBeenCalledWith({
            where: { user: address, status: 'PENDING' },
          });
          expect(prisma.prismaClient.depositRequest.findMany).toHaveBeenCalledWith({
            where: { user: address, status: 'PENDING' },
          });
        });
      
        it('should return null if the user is not found', async () => {
          const address = '0x456';
      
          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(null);
      
          const result = await service.getUserStats(address);
      
          expect(result).toBeNull();
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { address },
          });
          expect(prisma.prismaClient.withdrawRequest.findMany).not.toHaveBeenCalled();
          expect(prisma.prismaClient.depositRequest.findMany).not.toHaveBeenCalled();
        });
      });

      describe('Error Handling', () => {
        it('should throw a NotFoundException if a user is not found', async () => {
          const userId = 'nonexistent-user';
      
          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(null);
      
          await expect(service.updateUsername(userId, 'newUsername')).rejects.toThrow('User not found');
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { id: userId },
          });
        });
      
        // it('should throw a ValidationError for invalid input in createWithdrawRequest', async () => {
        //   const invalidWithdrawDto = {
        //     amount: 1000,
        //     user: 'user123',
        //     // Missing required fields like requestId, agentId, and coinType
        //   } as any;
      
        //   await expect(service.recordWithdrawal(invalidWithdrawDto)).rejects.toThrow();
        //   expect(prisma.prismaClient.user.findUnique).not.toHaveBeenCalled();
        // });
      
        // it('should propagate unexpected errors from Prisma', async () => {
        //   const userId = 'user123';
        //   const prismaError = new Error('Unexpected Prisma error');
      
        //   jest.spyOn(prisma.prismaClient.user, 'findUnique').mockRejectedValue(prismaError);
      
        //   await expect(service.findAll()).rejects.toThrow('Unexpected Prisma error');
        //   expect(prisma.prismaClient.user.findMany).toHaveBeenCalled();
        // });
      
        it('should throw a NotFoundException if account details are not found', async () => {
          const userId = 'nonexistent-user';
      
          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(null);
      
          await expect(service.updateAccountDetails(userId, {
            accountNumber: '1234567890',
            name: 'John Doe',
            bank: 'Test Bank',
          })).rejects.toThrow('User not found');
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { id: userId },
            include: { accountDetails: true },
          });
        });
      
        it('should throw a NotFoundException if transaction history is not found', async () => {
          const address = 'nonexistent-address';
      
          jest.spyOn(prisma.prismaClient.user, 'findUnique').mockResolvedValue(null);
      
          const result = await service.getUserTransactionHistory(address);
      
          expect(result).toBeNull();
          expect(prisma.prismaClient.user.findUnique).toHaveBeenCalledWith({
            where: { address },
          });
          expect(prisma.prismaClient.withdrawRequest.findMany).not.toHaveBeenCalled();
          expect(prisma.prismaClient.depositRequest.findMany).not.toHaveBeenCalled();
        });
      });
});
