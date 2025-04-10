/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { mockDepositRequest, mockUserData, mockWithdrawRequest } from '../../src/agent/helpers/libs';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findOrCreateUser: jest.fn(),
            getUserTransactionHistory: jest.fn(),
            getUserStats: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  describe('findOne', () => {
    it('should return an existing user if found', async () => {
      const mockUser = mockUserData({ id: 'user123', address: '0x123' });
      jest.spyOn(service, 'findOrCreateUser').mockResolvedValue(mockUser);

      const result = await controller.findOne('0x123');
      expect(result).toEqual(mockUser);
      expect(service.findOrCreateUser).toHaveBeenCalledWith('0x123');
    });

    it('should create and return a new user if not found', async () => {
      const mockNewUser = mockUserData({ id: 'user456', address: '0x456' });
      jest.spyOn(service, 'findOrCreateUser').mockResolvedValue(mockNewUser);

      const result = await controller.findOne('0x456');
      expect(result).toEqual(mockNewUser);
      expect(service.findOrCreateUser).toHaveBeenCalledWith('0x456');
    });
  });

  describe('getTransactionHistory', () => {
    it('should return transaction history for an existing user', async () => {
      const mockTransactions = {
        user: mockUserData({}),
        withdrawals: [{ id: 'withdraw1', amount: 100 }].map(i => mockWithdrawRequest(i)),
        deposits: [{ id: 'deposit1', amount: 200 }].map(i => mockDepositRequest(i)),
      };
      jest.spyOn(service, 'getUserTransactionHistory').mockResolvedValue(mockTransactions);

      const result = await controller.getTransactionHistory('0x123');
      expect(result).toEqual(mockTransactions);
      expect(service.getUserTransactionHistory).toHaveBeenCalledWith('0x123');
    });

    it('should return null if the user is not found', async () => {
      jest.spyOn(service, 'getUserTransactionHistory').mockResolvedValue(null);

      const result = await controller.getTransactionHistory('0x456');
      expect(result).toBeNull();
      expect(service.getUserTransactionHistory).toHaveBeenCalledWith('0x456');
    });
  });

  describe('getUserStats', () => {
    it('should return user stats for an existing user', async () => {
      const mockStats = {
        address: '0x123',
        totalWithdrawn: 1000,
        totalDeposited: 2000,
        activeWithdrawals: 2,
        activeDeposits: 3,
        activeWithdrawalAmount: 500,
        activeDepositAmount: 800,
      };

      jest.spyOn(service, 'getUserStats').mockResolvedValue(mockStats);

      const result = await controller.getUserStats('0x123');
      expect(result).toEqual(mockStats);
      expect(service.getUserStats).toHaveBeenCalledWith('0x123');
    });

    it('should return null if the user is not found', async () => {
      jest.spyOn(service, 'getUserStats').mockResolvedValue(null);

      const result = await controller.getUserStats('0x456');
      expect(result).toBeNull();
      expect(service.getUserStats).toHaveBeenCalledWith('0x456');
    });
  });
});