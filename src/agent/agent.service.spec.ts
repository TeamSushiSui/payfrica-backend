/* eslint-disable prettier/prettier */
import { Test, TestingModule } from "@nestjs/testing";
import { AgentService } from "./agent.service"
import { PrismaService } from "../../src/prisma/prisma.service";
import { UsersService } from "../../src/users/users.service";
import { Agent, DepositRequest, DepositStatus, User, WithdrawRequest } from "@prisma/client";


const mockAgent = (agentData: Partial<Agent>) => {
  return {
    id: "643d1f9e8f1b2c0012345678", // Mock ObjectId
    balance: 0, // Mock balance
    addr: "0x123456789abcdef", // Mock blockchain address
    coinType: "BTC", // Mock coin type
    minWithdrawLimit: 100,
    maxWithdrawLimit: 5000,
    minDepositLimit: 100,
    maxDepositLimit: 5000,
    accountNumber: "1234567890", // Mock account number
    bank: "Mock Bank", // Mock bank name
    name: "John Doe", // Mock agent name
    pendingWithdrawals: [], // Empty array for pending withdrawals
    successfulWithdrawals: [], // Empty array for successful withdrawals
    totalSuccessfulWithdrawals: 0, // Mock total successful withdrawals
    totalPendingWithdrawals: 0, // Mock total pending withdrawals
    totalSuccessfulWithdrawalsAmount: 0, // Mock total successful withdrawals amount
    totalPendingWithdrawalsAmount: 0, // Mock total pending withdrawals amount
    pendingDeposits: [], // Empty array for pending deposits
    successfulDeposits: [], // Empty array for successful deposits
    totalSuccessfulDeposits: 0, // Mock total successful deposits
    totalPendingDeposits: 0, // Mock total pending deposits
    totalSuccessfulDepositsAmount: 0, // Mock total successful deposits amount
    totalPendingDepositsAmount: 0, // Mock total pending deposits amount
    unsuccessfulDeposits: [], // Empty array for unsuccessful deposits
    totalUnsuccessfulDeposits: 1, // Mock total unsuccessful deposits
    createdAt: new Date("2025-01-01T10:00:00Z"), // Mock creation date
    updatedAt: new Date("2025-04-01T15:00:00Z"), // Mock last updated date
    ...agentData,
  }
}

const mockAccountDetails = (accountDetails: {
  id?: string,
  accountNumber?: string,
  name?: string,
  bank?: string,
  userId?: string 
}) => {
  return {
    id: "643d1f9e8f1b2c0012345679", // Mock ObjectId for the account details
    accountNumber: "9876543210", // Mock account number
    name: "Jane Doe", // Mock account holder name
    bank: "Mock Bank", // Mock bank name
    userId: "643d1f9e8f1b2c0012345678", // Reference to the user's ID
    ...accountDetails
  }
}
const mockUserData = (userData: Partial<User>) => {
  return {
    id: "643d1f9e8f1b2c0012345678", // Mock ObjectId
    address: "0xabcdef1234567890", // Mock blockchain address
    username: "john_doe", // Mock username
    accountDetails: {
      id: "643d1f9e8f1b2c0012345679", // Mock ObjectId for account details
      accountNumber: "1234567890", // Mock account number
      name: "John Doe", // Mock account holder name
      bank: "Mock Bank", // Mock bank name
      userId: "643d1f9e8f1b2c0012345678", // Reference to the user ID
    },
    withdrawals: [], // Empty array for withdrawal history
    deposits: [], // Empty array for deposit history
    totalWithdrawn: 0, // Default total withdrawn amount
    totalDeposited: 0, // Default total deposited amount
    createdAt: new Date("2025-04-01T10:00:00Z"), // Mock creation date
    updatedAt: new Date("2025-04-01T10:00:00Z"), // Mock last updated date
    ...userData,
  }
}
const mockWithdrawRequest = (withdrawData: Partial<WithdrawRequest>): WithdrawRequest => {
  return {
    id: "643d1f9e8f1b2c0012345678",
    requestId: "req123",
    amount: 500.0,
    user: "0xabcdef1234567890",
    agentId: "643d1f9e8f1b2c0012345679", // Use agentId instead of agent
    successfulAgentId: null,
    coinType: "BTC",
    status: "PENDING",
    requestTime: new Date("2025-04-01T10:00:00Z"),
    statusTime: null,
    createdAt: new Date("2025-04-01T10:00:00Z"),
    updatedAt: new Date("2025-04-01T10:00:00Z"),
    ...withdrawData,
  };
}
const mockDepositRequest = (depositData: Partial<DepositRequest>) => {
  return {
    id: "643d1f9e8f1b2c0012345678", // Mock ObjectId for the deposit request
    requestId: "req123", // Mock original blockchain request ID
    amount: 500.75, // Mock deposit amount
    user: "0xabcdef1234567890", // Mock user's blockchain address
    agentId: "643d1f9e8f1b2c0012345679", // Mock agent ID
    agent: {
      id: "643d1f9e8f1b2c0012345679", // Mock agent ObjectId
      name: "John Doe", // Mock agent name
      coinType: "BTC", // Mock coin type
    },
    successfulAgent: null, // No successful agent yet
    successfulAgentId: null, // No successful agent ID yet
    unsuccessfulAgent: null, // No unsuccessful agent yet
    unsuccessfulAgentId: null, // No unsuccessful agent ID yet
    coinType: "SUI", // Mock coin type
    status: DepositStatus.PENDING, // Default status
    requestTime: new Date("2025-04-01T10:00:00Z"), // Mock request time
    statusTime: null, // No status time yet
    createdAt: new Date("2025-04-01T10:00:00Z"), // Mock creation date
    updatedAt: new Date("2025-04-01T10:00:00Z"), // Mock last updated date
    ...depositData
  }
}

describe('AgentService', () => {
  let service: AgentService;
  let prismaService: PrismaService;
  let usersService: UsersService;
   
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AgentService,
        {
          provide: PrismaService,
          useValue: {
            prismaClient: {
              agent: {
                create: jest.fn(),
                findMany: jest.fn(),
                findUnique: jest.fn(),
                update: jest.fn(),
              },
              depositRequest: {
                create: jest.fn(),
                findUnique: jest.fn(),
                update: jest.fn(),
              },
              withdrawRequest: {
                create: jest.fn(),
                findUnique: jest.fn(),
                update: jest.fn(),
              },
              user: {
                findFirst: jest.fn(),
              }
            }
          }
        },
        {
          provide: UsersService,
          useValue: {
            findOrCreateUser: jest.fn(),
            recordDeposit: jest.fn(),
            recordWithdrawal: jest.fn(),
          }
        }
      ]
    }).compile();

    service = module.get<AgentService>(AgentService);
    prismaService = module.get<PrismaService>(PrismaService);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('AgentService - Agent Management', () => {

    describe('createAgent', () => {
      it('should create an agent with valid data', async () => {
        const agentData = {
          addr: '0x123',
          coinType: 'SUI',
          minWithdrawLimit: 10,
          maxWithdrawLimit: 1000,
          minDepositLimit: 5,
          maxDepositLimit: 500,
          accountNumber: '123456789',
          bank: 'Test Bank',
          name: 'Test Agent',
        };
  
        const createdAgent = mockAgent(agentData);
        jest.spyOn(prismaService.prismaClient.agent, 'create').mockResolvedValue(createdAgent)
  
        const result = await service.createAgent(agentData);
        expect(result).toEqual(createdAgent);
        expect(prismaService.prismaClient.agent.create).toHaveBeenCalledWith({
          data: {
            ...agentData,
            balance: 0,
          }
        })
      })
    })
  
    describe('getAllAgents', () => {
      it('should return a list of all agents', async () => {
        const agents = [
          {
            addr: '0x123',
            coinType: 'SUI',
            minWithdrawLimit: 10,
            maxWithdrawLimit: 1000,
            minDepositLimit: 5,
            maxDepositLimit: 500,
            accountNumber: '123456789',
            bank: 'Test Bank',
            name: 'Test Agent',
          },
          {
            addr: '0x123',
            coinType: 'SUI',
            minWithdrawLimit: 10,
            maxWithdrawLimit: 1000,
            minDepositLimit: 5,
            maxDepositLimit: 500,
            accountNumber: '123456789',
            bank: 'Test Bank',
            name: 'Test Agent',
          }
        ]
        const agentsDetails = agents.map(a => mockAgent(a));
        jest.spyOn(prismaService.prismaClient.agent, 'findMany').mockResolvedValue(agentsDetails);
  
        const result = await service.getAllAgents();
        expect(result).toEqual(agentsDetails);
        expect(prismaService.prismaClient.agent.findMany).toHaveBeenCalled();
      })
    })
  
    describe('findAgentsByType', () => {
      it('should return agents filtered by coin type', async () => {
        const coinType = 'SUI';
        const agents = [
          {
            addr: '0x123',
            coinType: 'SUI',
            minWithdrawLimit: 10,
            maxWithdrawLimit: 1000,
            minDepositLimit: 5,
            maxDepositLimit: 500,
            accountNumber: '123456789',
            bank: 'SUI Bank',
            name: 'SUI Agent',
          }
        ]
        const agentDetails = agents.map(a => mockAgent(a))
        jest.spyOn(prismaService.prismaClient.agent, 'findMany').mockResolvedValue(agentDetails);
  
        const result = await service.findAgentsByType(coinType);
        expect(result).toEqual(agentDetails);
        expect(prismaService.prismaClient.agent.findMany).toHaveBeenCalledWith({
          where: { coinType },
        })
      })
  
      it('should return an empty list if no agents match the coin type', async () => {
        const coinType = 'DOGE';
        jest.spyOn(prismaService.prismaClient.agent, 'findMany').mockResolvedValue([]);
  
        const result = await service.findAgentsByType(coinType);
        expect(result).toEqual([]);
        expect(prismaService.prismaClient.agent.findMany).toHaveBeenCalledWith({
          where: { coinType },
        });
      });
    });
  
    describe('getAgentById', () => {
      it('should return the agent details for a valid ID', async () => {
        const agentId = '1';
        const agent = {
          id: agentId,
          addr: '0x123',
          coinType: 'SUI',
          minWithdrawLimit: 10,
          maxWithdrawLimit: 1000,
          minDepositLimit: 5,
          maxDepositLimit: 500,
          accountNumber: '123456789',
          bank: 'Test Bank',
          name: 'Test Agent',
        };
  
        const agentData = mockAgent(agent);
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(agentData);
  
        const result = await service.getAgentById(agentId);
        expect(result).toEqual(agentData);
        expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({
          where: { id: agentId },
        });
      });
  
      it('should return null for an invalid ID', async () => {
        const agentId = '999';
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(null);
  
        const result = await service.getAgentById(agentId);
        expect(result).toBeNull();
        expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({
          where: { id: agentId },
        });
      });
    })
  });

  describe('AgentServie Deposit Management', () => {

    describe('getBestDepositAgent', () => {
      it('should return the best agent for a valid coin type and amount', async () => {
        const coinType = 'BTC';
        const amount = 500;
        const agents = [
          {
          id: '1',
          addr: '0x123',
          coinType: 'SUI',
          balance: 1000,
          minWithdrawLimit: 10,
          maxWithdrawLimit: 1000,
          minDepositLimit: 100,
          maxDepositLimit: 1000,
          accountNumber: '0987654322',
          bank: 'Test Bank1',
          name: 'Test Agent1',
        },
        {
          id: '2',
          addr: '0x123',
          coinType: 'SUI',
          minWithdrawLimit: 10,
          maxWithdrawLimit: 1000,
          minDepositLimit: 5,
          maxDepositLimit: 500,
          accountNumber: '123456789',
          bank: 'Test Bank1',
          name: 'Test Agent1',
        }
        ];
        const agentDetails = agents.map(a => mockAgent(a))
        jest.spyOn(prismaService.prismaClient.agent, 'findMany').mockResolvedValue(agentDetails);
  
        const result = await service.getBestDepositAgent(coinType, amount);
        expect(result).toEqual({
          id: '1',
          accountNumber: agents[0].accountNumber,
          bank: agents[0].bank,
          name: agents[0].name,
        });
        expect(prismaService.prismaClient.agent.findMany).toHaveBeenCalledWith({
          where: { coinType },
          select: expect.any(Object),
        });
      });
  
      it('should return null if no suitable agent is found', async () => {
        const coinType = 'BTC';
        const amount = 5000;
        jest.spyOn(prismaService.prismaClient.agent, 'findMany').mockResolvedValue([]);
  
        const result = await service.getBestDepositAgent(coinType, amount);
        expect(result).toBeNull();
        expect(prismaService.prismaClient.agent.findMany).toHaveBeenCalledWith({
          where: { coinType },
          select: expect.any(Object),
        });
      });
    });
  
    describe('createDepositRequest', () => {
      it('should approve a deposit request and update agent/usr records', async () => {
        const agentId = '1';
        const data = {
          requestId: 'req123',
          amount: 500,
          user: 'user123',
          coinType: 'SUI'
        }
        const depositRequest = mockDepositRequest({ id: 'req123', ...data});
        const agent = mockAgent({ id: agentId, balance: 1000, totalPendingDeposits: 1, totalPendingDepositsAmount: 500 })
        const user = mockUserData({ id: 'user123'});
  
        jest.spyOn(service, 'getBestDepositAgent').mockResolvedValue(agent);
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(agent);
        jest.spyOn(usersService, 'findOrCreateUser').mockResolvedValue(user);
        jest.spyOn(prismaService.prismaClient.depositRequest, 'create').mockResolvedValue(depositRequest);
  
        const result = await service.createDepositRequest(data);
        expect(result[1]).toEqual(depositRequest);
        expect(service.getBestDepositAgent).toHaveBeenCalledWith(data.coinType, data.amount);
        expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({ where: {id: agent.id }});
        expect(usersService.findOrCreateUser).toHaveBeenCalledWith(data.user);
        expect(prismaService.prismaClient.agent.update).toHaveBeenCalled();
        expect(prismaService.prismaClient.depositRequest.create).toHaveBeenCalledWith({
          data: expect.objectContaining(data),
        });
  
  
      });
  
      it('should throw an error if no suitable agent is found', async () => {
        const data = { requestId: 'req123', amount: 500, user: 'user123', coinType: 'BTC' };
        jest.spyOn(service, 'getBestDepositAgent').mockResolvedValue(null);
  
        await expect(service.createDepositRequest(data)).rejects.toThrow('best_agent not found');
      });
  
      it('should throw an error if the agent is not found', async () => {
        const data = { requestId: 'req123', amount: 500, user: 'user123', coinType: 'BTC' };
        const bestAgent = mockAgent({ id: '1' });
  
        jest.spyOn(service, 'getBestDepositAgent').mockResolvedValue(bestAgent);
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(null);
  
        await expect(service.createDepositRequest(data)).rejects.toThrow('Agent not found');
      });
    });
  
    describe('approveDeposit', () => {
      it('should approve a deposit request and update agent/user records', async () => {
        const id = 'req123';
        const agentId = '1';
        const depositRequest = mockDepositRequest({ id, amount: 500, user: 'user123', coinType: 'SUI' });
        const agent = mockAgent({ id: agentId, balance: 1000, totalPendingDeposits: 1, totalPendingDepositsAmount: 500 });
        const user = mockUserData({ id: 'user123' });
  
        jest.spyOn(prismaService.prismaClient.depositRequest, 'findUnique').mockResolvedValue(depositRequest);
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(agent);
        jest.spyOn(prismaService.prismaClient.depositRequest, 'update').mockResolvedValue(depositRequest);
        jest.spyOn(prismaService.prismaClient.agent, 'update').mockResolvedValue(agent);
        // jest.spyOn(usersService, 'recordDeposit').mockResolvedValue();
  
        const result = await service.approveDeposit(id, agentId);
        expect(result).toEqual(depositRequest);
        expect(prismaService.prismaClient.depositRequest.findUnique).toHaveBeenCalledWith({ where: { id } });
        expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({ where: { id: agentId } });
        expect(prismaService.prismaClient.depositRequest.update).toHaveBeenCalled();
        expect(prismaService.prismaClient.agent.update).toHaveBeenCalled();
        // expect(usersService.recordDeposit).toHaveBeenCalled();
      });
  
      it('should throw an error if the deposit request is not found', async () => {
        const id = 'req123';
        const agentId = '1';
        jest.spyOn(prismaService.prismaClient.depositRequest, 'findUnique').mockResolvedValue(null);
  
        await expect(service.approveDeposit(id, agentId)).rejects.toThrow('depositRequest not found');
      });
  
      it('should throw an error if the agent is not found', async () => {
        const id = 'req123';
        const agentId = '1';
        const depositRequest = mockDepositRequest({ id, amount: 500, user: 'user123', coinType: 'SUI' });
  
        jest.spyOn(prismaService.prismaClient.depositRequest, 'findUnique').mockResolvedValue(depositRequest);
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(null);
  
        await expect(service.approveDeposit(id, agentId)).rejects.toThrow('Agent not found');
      });
  
      it('should throw an error if the agent has insufficient balance', async () => {
        const id = 'req123';
        const agentId = '1';
        const depositRequest = mockDepositRequest({ id, amount: 500, user: 'user123', coinType: 'SUI' });
        const agent = mockAgent({ id: agentId, balance: 100 });
  
        jest.spyOn(prismaService.prismaClient.depositRequest, 'findUnique').mockResolvedValue(depositRequest);
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(agent);
  
        await expect(service.approveDeposit(id, agentId)).rejects.toThrow('Insufficient agent balance');
      });
    });
  
    describe('cancelDesposit', () => {
      it('should cancel a deposit request and update agent/user records', async () => {
        const id = 'req123';
        const agentId = '1';
        const depositRequest = mockDepositRequest({ id, amount: 500, user: 'user123', coinType: 'SUI' });
        const agent = mockAgent({ id: agentId, totalPendingDeposits: 1, totalPendingDepositsAmount: 500 });
        // const user = mockUserData({ id: 'user123' });
  
        jest.spyOn(prismaService.prismaClient.depositRequest, 'findUnique').mockResolvedValue(depositRequest);
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(agent);
        jest.spyOn(prismaService.prismaClient.depositRequest, 'update').mockResolvedValue(depositRequest);
        jest.spyOn(prismaService.prismaClient.agent, 'update').mockResolvedValue(agent);
        // jest.spyOn(usersService, 'recordDeposit').mockResolvedValue();
  
        const result = await service.cancelDeposit(id, agentId);
        expect(result).toEqual(depositRequest);
        expect(prismaService.prismaClient.depositRequest.findUnique).toHaveBeenCalledWith({ where: { id } });
        expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({ where: { id: agentId } });
        expect(prismaService.prismaClient.depositRequest.update).toHaveBeenCalled();
        expect(prismaService.prismaClient.agent.update).toHaveBeenCalled();
        // expect(usersService.recordDeposit).toHaveBeenCalled();
      });
  
      it('should throw an error if the deposit request is not found', async () => {
        const id = 'req123';
        const agentId = '1';
        jest.spyOn(prismaService.prismaClient.depositRequest, 'findUnique').mockResolvedValue(null);
  
        await expect(service.cancelDeposit(id, agentId)).rejects.toThrow('Agent not found');
      });
  
      it('should throw an error if the agent is not found', async () => {
        const id = 'req123';
        const agentId = '1';
        const depositRequest = mockDepositRequest({ id, amount: 500, user: 'user123', coinType: 'SUI' });
  
        jest.spyOn(prismaService.prismaClient.depositRequest, 'findUnique').mockResolvedValue(depositRequest);
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(null);
  
        await expect(service.cancelDeposit(id, agentId)).rejects.toThrow('Agent not found');
      })
    });
  });

  describe('AgentService - Withdrawal Management', () => {

    describe('getBestWithdrawalAgent', () => {
      it('should return the best agent for a valid coin type and amount', async () => {
        const coinType = 'BTC';
        const amount = 500;
        const agents = [
          { id: '1', balance: 1000, minWithdrawLimit: 100, maxWithdrawLimit: 1000 },
          { id: '2', balance: 200, minWithdrawLimit: 50, maxWithdrawLimit: 300 },
        ].map(a => mockAgent(a));
        jest.spyOn(prismaService.prismaClient.agent, 'findMany').mockResolvedValue(agents);
  
        const result = await service.getBestWithdrawalAgent(coinType, amount);
        expect(result).toEqual({ id: '1' });
        expect(prismaService.prismaClient.agent.findMany).toHaveBeenCalledWith({
          where: { coinType },
          select: expect.any(Object),
        });
      });
  
      it('should return null if no suitable agent is found', async () => {
        const coinType = 'SUI';
        const amount = 5000;
        jest.spyOn(prismaService.prismaClient.agent, 'findMany').mockResolvedValue([]);
  
        const result = await service.getBestWithdrawalAgent(coinType, amount);
        expect(result).toBeNull();
        expect(prismaService.prismaClient.agent.findMany).toHaveBeenCalledWith({
          where: { coinType },
          select: expect.any(Object),
        });
      });
    });
  
    describe('createWithdrawalRequest', () => {
      it('should create a withdrawal request with valid data', async () => {
        const data = { requestId: 'req123', amount: 500, user: 'user123', coinType: 'SUI' };
        const bestAgent = mockAgent({ id: '1', balance: 1000 });
        const agent = mockAgent({ id: '1', balance: 1000 });
        const withdrawalRequest = mockWithdrawRequest({ id: 'req123', ...data });
        const user = mockUserData({ id: 'user123'});
  
        jest.spyOn(service, 'getBestWithdrawalAgent').mockResolvedValue(bestAgent);
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(agent);
        jest.spyOn(usersService, 'findOrCreateUser').mockResolvedValue(user);
        jest.spyOn(prismaService.prismaClient.withdrawRequest, 'create').mockResolvedValue(withdrawalRequest);
  
        const result = await service.createWithdrawRequest(data);
        expect(result).toEqual(withdrawalRequest);
        expect(service.getBestWithdrawalAgent).toHaveBeenCalledWith(data.coinType, data.amount);
        expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({ where: { id: bestAgent.id } });
        expect(prismaService.prismaClient.withdrawRequest.create).toHaveBeenCalledWith({
          data: expect.objectContaining(data),
        });
      });
    });
  })

  describe('AgentService - Withdrawal Management', () => {
    describe('getBestWithdrawalAgent', () => {
      it('should return the best agent for a valid coin type and amount', async () => {
        const coinType = 'SUI';
        const amount = 500;
        const agents = [
          { id: '1', balance: 1000, minWithdrawLimit: 100, maxWithdrawLimit: 1000 },
          { id: '2', balance: 200, minWithdrawLimit: 50, maxWithdrawLimit: 300 },
        ].map(a => mockAgent(a));
        jest.spyOn(prismaService.prismaClient.agent, 'findMany').mockResolvedValue(agents);
  
        const result = await service.getBestWithdrawalAgent(coinType, amount);
        expect(result).toEqual({ id: '1' });
        expect(prismaService.prismaClient.agent.findMany).toHaveBeenCalledWith({
          where: { coinType },
          select: expect.any(Object),
        });
      });
  
      it('should return null if no suitable agent is found', async () => {
        const coinType = 'BTC';
        const amount = 5000;
        jest.spyOn(prismaService.prismaClient.agent, 'findMany').mockResolvedValue([]);
  
        const result = await service.getBestWithdrawalAgent(coinType, amount);
        expect(result).toBeNull();
        expect(prismaService.prismaClient.agent.findMany).toHaveBeenCalledWith({
          where: { coinType },
          select: expect.any(Object),
        });
      });
    });

    describe('createWithdrawRequest', () => {
      it('should create a withdrawal request with valid data', async () => {
        const data = { requestId: 'req123', amount: 500, user: 'user123', coinType: 'SUI' };
        // const bestAgent = { id: '1' };
        const agent = mockAgent({ id: '1', balance: 1000 });
        const withdrawalRequest = mockWithdrawRequest({ id: 'req123', ...data });
        const user = mockUserData({});

        jest.spyOn(service, 'getBestWithdrawalAgent').mockResolvedValue(agent);
        jest.spyOn(usersService, 'findOrCreateUser').mockResolvedValue(user);
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(agent);
        jest.spyOn(prismaService.prismaClient.withdrawRequest, 'create').mockResolvedValue(withdrawalRequest);
  
        const result = await service.createWithdrawRequest(data);
        expect(result).toEqual(withdrawalRequest);
        expect(service.getBestWithdrawalAgent).toHaveBeenCalledWith(data.coinType, data.amount);
        expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({ where: { id: agent.id } });
        expect(prismaService.prismaClient.withdrawRequest.create).toHaveBeenCalledWith({
          data: expect.objectContaining(data),
        });
      });

      it('should throw an error if no suitable agent is found', async () => {
        const data = { requestId: 'req123', amount: 500, user: 'user123', coinType: 'BTC' };
        jest.spyOn(service, 'getBestWithdrawalAgent').mockResolvedValue(null);
  
        await expect(service.createWithdrawRequest(data)).rejects.toThrow('Best Agent not found');
      });

      it('should throw an error if the agent is not found', async () => {
        const data = { requestId: 'req123', amount: 500, user: 'user123', coinType: 'BTC' };
        const bestAgent = mockAgent({ id: '1' });
  
        jest.spyOn(service, 'getBestWithdrawalAgent').mockResolvedValue(bestAgent);
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(null);
  
        await expect(service.createWithdrawRequest(data)).rejects.toThrow('Agent not found');
      });
    });

    describe('approveWithdraw', () => {
      it('should approve a withdrawal request and update agent/user records', async () => {
        const id = 'req123';
        const agentId = '1';
        const withdrawalRequest = mockWithdrawRequest({ id, amount: 500, coinType: 'SUI' });
        const agent = mockAgent({ id: agentId, balance: 1000 });
  
        jest.spyOn(prismaService.prismaClient.withdrawRequest, 'findUnique').mockResolvedValue(withdrawalRequest);
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(agent);
        jest.spyOn(prismaService.prismaClient.withdrawRequest, 'update').mockResolvedValue(withdrawalRequest);
        jest.spyOn(prismaService.prismaClient.agent, 'update').mockResolvedValue(agent);
  
        const result = await service.approveWithdrawal(id, agentId);
        expect(result).toEqual(withdrawalRequest);
        expect(prismaService.prismaClient.withdrawRequest.findUnique).toHaveBeenCalledWith({ where: { id } });
        expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({ where: { id: agentId } });
        expect(prismaService.prismaClient.withdrawRequest.update).toHaveBeenCalled();
        expect(prismaService.prismaClient.agent.update).toHaveBeenCalled();
      });

      it('should throw an error if the withdrawal request is not found', async () => {
        const id = 'req123';
        const agentId = '1';
        jest.spyOn(prismaService.prismaClient.withdrawRequest, 'findUnique').mockResolvedValue(null);
  
        await expect(service.approveWithdrawal(id, agentId)).rejects.toThrow('withdrawRequest not found');
      });
      
      it('should throw an error if the agent is not found', async () => {
        const id = 'req123';
        const agentId = '1';
        const withdrawalRequest = mockWithdrawRequest({ id, amount: 500, user: 'user123', coinType: 'SUI' });
  
        jest.spyOn(prismaService.prismaClient.withdrawRequest, 'findUnique').mockResolvedValue(withdrawalRequest);
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(null);
  
        await expect(service.approveWithdrawal(id, agentId)).rejects.toThrow('Agent not found');
      });

      it('should throw an error if the agent has insufficient balance', async () => {
      const id = 'req123';
      const agentId = '1';
      const withdrawalRequest = mockWithdrawRequest({ id, amount: 500, user: 'user123', coinType: 'SUI' });
      const agent = mockAgent({ id: agentId, balance: 100 });

      jest.spyOn(prismaService.prismaClient.withdrawRequest, 'findUnique').mockResolvedValue(withdrawalRequest);
      jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(agent);

      await expect(service.approveWithdrawal(id, agentId)).rejects.toThrow('Insufficient agent balance');
      });
    });

    // describe('cancelWithdrawal', () => {
    //   it('should cancel a withdrawal request and update agent/user records', async () => {
    //     const id = 'req123';
    //     const agentId = '1';
    //     const withdrawalRequest = mockWithdrawRequest({ id, amount: 500, user: 'user123', coinType: 'SUI' });
    //     const agent = mockAgent({ id: agentId });
  
    //     jest.spyOn(prismaService.prismaClient.withdrawRequest, 'findUnique').mockResolvedValue(withdrawalRequest);
    //     jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(agent);
    //     jest.spyOn(prismaService.prismaClient.withdrawRequest, 'update').mockResolvedValue(withdrawalRequest);
    //     jest.spyOn(prismaService.prismaClient.agent, 'update').mockResolvedValue(agent);
  
    //     const result = await service.cancelWithdrawal(id, agentId);
    //     expect(result).toEqual(withdrawalRequest);
    //     expect(prismaService.prismaClient.withdrawRequest.findUnique).toHaveBeenCalledWith({ where: { id } });
    //     expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({ where: { id: agentId } });
    //     expect(prismaService.prismaClient.withdrawRequest.update).toHaveBeenCalled();
    //     expect(prismaService.prismaClient.agent.update).toHaveBeenCalled();
    //   });

    //   it('should throw an error if the withdrawal request is not found', async () => {
    //     const id = 'req123';
    //     const agentId = '1';
    //     jest.spyOn(prismaService.prismaClient.withdrawRequest, 'findUnique').mockResolvedValue(null);
  
    //     await expect(service.cancelWithdrawal(id, agentId)).rejects.toThrow('withdrawRequest not found');
    //   });
  
    //   it('should throw an error if the agent is not found', async () => {
    //     const id = 'req123';
    //     const agentId = '1';
    //     const withdrawalRequest = mockWithdrawRequest({ id, amount: 500, user: 'user123', coinType: 'SUI' });
  
    //     jest.spyOn(prismaService.prismaClient.withdrawRequest, 'findUnique').mockResolvedValue(withdrawalRequest);
    //     jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(null);
  
    //     await expect(service.cancelWithdrawal(id, agentId)).rejects.toThrow('Agent not found');
    //   });
    // })
  });

  describe('AgentService - Agent Account and Limits', () => {
    describe('getAgentAccountDetails', () => {
      it('should return the account details for a valid agent ID', async () => {
        const agentId = '1';
        const accountDetails = {
          accountNumber: '1234567890',
          bank: 'Test Bank',
          name: 'Test Agent',
        };
  
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(accountDetails as any);
  
        const result = await service.getAgentAccountDetails(agentId);
        expect(result).toEqual(accountDetails);
        expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({
          where: { id: agentId },
          select: {
            accountNumber: true,
            bank: true,
            name: true,
          },
        });
      });

      it('should return null if the agent is not found', async () => {
        const agentId = '999';
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(null);
  
        const result = await service.getAgentAccountDetails(agentId);
        expect(result).toBeNull();
        expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({
          where: { id: agentId },
          select: {
            accountNumber: true,
            bank: true,
            name: true,
          },
        });
      });
    });
  });

  describe('updateAgentLimts', () => {
    it('should update the withdrawal and deposit limits for a valid agent ID', async () => {
      const agentId = '1';
      const limits = {
        minWithdrawLimit: 50,
        maxWithdrawLimit: 1000,
        minDepositLimit: 100,
        maxDepositLimit: 5000,
      };

      const updatedAgent = mockAgent({ id: agentId, ...limits });
      jest.spyOn(prismaService.prismaClient.agent, 'update').mockResolvedValue(updatedAgent);

      const result = await service.updateAgentLimits(agentId, limits);
      expect(result).toEqual(updatedAgent);
      expect(prismaService.prismaClient.agent.update).toHaveBeenCalledWith({
        where: { id: agentId },
        data: limits,
      });
    });

    it('should throw an error if the agent is not found', async () => {
      const agentId = '999';
      const limits = {
        minWithdrawLimit: 50,
        maxWithdrawLimit: 1000,
        minDepositLimit: 100,
        maxDepositLimit: 5000,
      };

      jest.spyOn(prismaService.prismaClient.agent, 'update').mockRejectedValue(new Error('Agent not found'));

      await expect(service.updateAgentLimits(agentId, limits)).rejects.toThrow('Agent not found');
      expect(prismaService.prismaClient.agent.update).toHaveBeenCalledWith({
        where: { id: agentId },
        data: limits,
      });
    });
  });

  describe('AgentService - Agent Balance Management', () => {
    describe('addAgentBalance', () => {
      it('should add the specified amount to the agent\'s balance', async () => {
        const agentId = '1';
        const amount = 500;
        const agent = mockAgent({ id: agentId, balance: 1000 });

        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(agent);
        jest.spyOn(prismaService.prismaClient.agent, 'update').mockResolvedValue({
          ...agent,
          balance: agent.balance + amount,
        });

        const result = await service.addAgentBalance(agentId, amount);
        expect(result.balance).toEqual(agent.balance + amount);
        expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({ where: { id: agentId } });
        expect(prismaService.prismaClient.agent.update).toHaveBeenCalledWith({
          where: { id: agentId },
          data: { balance: agent.balance + amount },
        });
      });

      it('should throw an error if the agent is not found', async () => {
        const agentId = '999';
        const amount = 500;

        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(null);

        await expect(service.addAgentBalance(agentId, amount)).rejects.toThrow('Agent not found');
        expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({ where: { id: agentId } });
      });
    });
  });

  describe('AgentService - Error Handling', () => {
    describe('createAgent', () => {
      it('should throw an error if the agent creation fails', async () => {
        const agentData = {
          addr: '0x123',
          coinType: 'SUI',
          minWithdrawLimit: 10,
          maxWithdrawLimit: 1000,
          minDepositLimit: 5,
          maxDepositLimit: 500,
          accountNumber: '123456789',
          bank: 'Test Bank',
          name: 'Test Agent',
        };
  
        jest.spyOn(prismaService.prismaClient.agent, 'create').mockRejectedValue(new Error('Database error'));
  
        await expect(service.createAgent(agentData)).rejects.toThrow('Database error');
        expect(prismaService.prismaClient.agent.create).toHaveBeenCalledWith({
          data: {
            ...agentData,
            balance: 0,
          },
        });
      });
    });

    describe('getAllAgents', () => {
      it('should throw an error if the database query fails', async () => {
        jest.spyOn(prismaService.prismaClient.agent, 'findMany').mockRejectedValue(new Error('Database error'));
  
        await expect(service.getAllAgents()).rejects.toThrow('Database error');
        expect(prismaService.prismaClient.agent.findMany).toHaveBeenCalled();
      });
    });

    describe('updateAgentLimits', () => {
      it('should throw an error if the update operation fails', async () => {
        const agentId = '1';
        const limits = {
          minWithdrawLimit: 50,
          maxWithdrawLimit: 1000,
          minDepositLimit: 100,
          maxDepositLimit: 5000,
        };
  
        jest.spyOn(prismaService.prismaClient.agent, 'update').mockRejectedValue(new Error('Update failed'));
  
        await expect(service.updateAgentLimits(agentId, limits)).rejects.toThrow('Update failed');
        expect(prismaService.prismaClient.agent.update).toHaveBeenCalledWith({
          where: { id: agentId },
          data: limits,
        });
      });
    });

    describe('addAgentBalance', () => {
      it('should throw an error if the agent is not found', async () => {
        const agentId = '999';
        const amount = 500;
  
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(null);
  
        await expect(service.addAgentBalance(agentId, amount)).rejects.toThrow('Agent not found');
        expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({ where: { id: agentId } });
      });
  
      it('should throw an error if the update operation fails', async () => {
        const agentId = '1';
        const amount = 500;
        const agent = mockAgent({ id: agentId, balance: 1000 });
  
        jest.spyOn(prismaService.prismaClient.agent, 'findUnique').mockResolvedValue(agent);
        jest.spyOn(prismaService.prismaClient.agent, 'update').mockRejectedValue(new Error('Update failed'));
  
        await expect(service.addAgentBalance(agentId, amount)).rejects.toThrow('Update failed');
        expect(prismaService.prismaClient.agent.findUnique).toHaveBeenCalledWith({ where: { id: agentId } });
        expect(prismaService.prismaClient.agent.update).toHaveBeenCalledWith({
          where: { id: agentId },
          data: { balance: agent.balance + amount },
        });
      });
    });

    describe('General Error Handling', () => {
      it('should throw an error if the database connection fails', async () => {
        jest.spyOn(prismaService.prismaClient.agent, 'findMany').mockRejectedValue(new Error('Database connection failed'));
  
        await expect(service.getAllAgents()).rejects.toThrow('Database connection failed');
        expect(prismaService.prismaClient.agent.findMany).toHaveBeenCalled();
      });
  
      it('should throw an error if an unexpected exception occurs', async () => {
        jest.spyOn(service, 'getAllAgents').mockRejectedValue(() => {
          throw new Error('Unexpected error');
        });
  
        await expect(service.getAllAgents()).rejects.toThrow('Unexpected error');
      });
    });
  })
});