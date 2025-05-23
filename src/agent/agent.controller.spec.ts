/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AgentController } from './agent.controller';
import { AgentService } from './agent.service';
import { mockAgent, mockDepositRequest, mockWithdrawRequest } from './helpers/libs';
import { ValidationPipe, INestApplication } from '@nestjs/common';
import { DepositStatus } from '@prisma/client';

describe('AgentController', () => {
  let controller: AgentController;
  let service: AgentService;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgentController],
      providers: [
        {
          provide: AgentService,
          useValue: {
            createAgent: jest.fn(),
            getAllAgents: jest.fn(),
            findAgentsByType: jest.fn(),
            getAgentById: jest.fn(),
            updateAgentLimits: jest.fn(),
            addAgentBalance: jest.fn(),
            createWithdrawRequest: jest.fn(),
            approveWithdrawal: jest.fn(),
            createDepositRequest: jest.fn(),
            approveDeposit: jest.fn(),
            cancelDeposit: jest.fn(),
            agentWithdrawBalance: jest.fn(),
            getAgentAccountDetails: jest.fn(),
          },
        },
      ],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    controller = app.get<AgentController>(AgentController);
    service = app.get<AgentService>(AgentService);
  });

  it('should create a new agent with valid data', async () => {
    const createAgentDto = {
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

    const createdAgent = mockAgent(createAgentDto);
    jest.spyOn(service, 'createAgent').mockResolvedValue(createdAgent);

    const result = await controller.create(createAgentDto);
    expect(result).toEqual(createdAgent);
    expect(service.createAgent).toHaveBeenCalledWith(createAgentDto);
  });

  it('should throw an error if the service fails to create the agent', async () => {
    const createAgentDto = {
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

    jest.spyOn(service, 'createAgent').mockRejectedValue(new Error('Service error'));

    await expect(controller.create(createAgentDto)).rejects.toThrow('Service error');
    expect(service.createAgent).toHaveBeenCalledWith(createAgentDto);
  });

  describe('AgentController - Get All Agents', () => {
    it('should return a list of all agents', async () => {
      const agents = [
        mockAgent({ id: '1', name: 'Agent 1' }),
        mockAgent({ id: '2', name: 'Agent 2' })
      ];

      jest.spyOn(service, 'getAllAgents').mockResolvedValue(agents);

      const result = await controller.findAll();
      expect(result).toEqual(agents);
      expect(service.getAllAgents).toHaveBeenCalled();
    });

    it('should throw a NotFound Error if no agents exist', async () => {
      jest.spyOn(service, 'getAllAgents').mockResolvedValue([]);

      await expect(controller.findAll()).rejects.toThrow('No agents found');
      expect(service.getAllAgents).toHaveBeenCalled();
    });

    it('should throw an error if the service fails to retrieve agents', async () => {
      jest.spyOn(service, 'getAllAgents').mockRejectedValue(new Error('Service error'));

      await expect(controller.findAll()).rejects.toThrow('Service error');
      expect(service.getAllAgents).toHaveBeenCalled();
    });
  });

  describe('AgentController - Find Agents by Coin Type', () => {
    it('should return a list of agents filtered by coin type', async () => {
      const coinType = 'SUI';
      const agents = [
        mockAgent({ id: '1', coinType: 'SUI', name: 'Agent 1' }),
        mockAgent({ id: '2', coinType: 'SUI', name: 'Agent 2' }),
      ];

      jest.spyOn(service, 'findAgentsByType').mockResolvedValue(agents);

      const result = await controller.findByType(coinType);
      expect(result).toEqual(agents);
      expect(service.findAgentsByType).toHaveBeenCalledWith(coinType);
    });

    it('should throw error if no agents match the coin type', async () => {
      const coinType = 'SUI';

      jest.spyOn(service, 'findAgentsByType').mockResolvedValue([]); // Simulate service returning null

      await expect(controller.findByType(coinType)).rejects.toThrow(
        `Agents with type '${coinType}' not found`
      );

      expect(service.findAgentsByType).toHaveBeenCalledWith(coinType);
    });

    it('should throw an error if the service fails to retrieve agents by coin type', async () => {
      const coinType = 'SUI';

      jest.spyOn(service, 'findAgentsByType').mockRejectedValue(new Error('Service error'));

      await expect(controller.findByType(coinType)).rejects.toThrow('Service error');
      expect(service.findAgentsByType).toHaveBeenCalledWith(coinType);
    });
  });

  describe('AgentController - Find Agent by ID', () => {
    it('should return the details of an agent with a valid ID', async () => {
      const agentId = '1';
      const agent = mockAgent({ id: agentId, name: 'Agent 1' });

      jest.spyOn(service, 'getAgentById').mockResolvedValue(agent);

      const result = await controller.findOne(agentId);
      expect(result).toEqual(agent);
      expect(service.getAgentById).toHaveBeenCalledWith(agentId);
    });

    it('should throw NotFound Error for an invalid ID', async () => {
      const agentId = '999';

      jest.spyOn(service, 'getAgentById').mockResolvedValue(null);

      await expect(controller.findOne(agentId)).rejects.toThrow(`Agent with ID '${agentId}' not found`);
      expect(service.getAgentById).toHaveBeenCalledWith(agentId);
    });

    it('should throw an error if the service fails to retrieve the agent', async () => {
      const agentId = '1';

      jest.spyOn(service, 'getAgentById').mockRejectedValue(new Error('Service error'));

      await expect(controller.findOne(agentId)).rejects.toThrow('Service error');
      expect(service.getAgentById).toHaveBeenCalledWith(agentId);
    });
  });

  describe('AgentController - Update Agent Limits', () => {
    it('should update the withdrawal and deposit limits for a valid agent ID', async () => {
      const agentId = '1';
      const updateDto = {
        minWithdrawLimit: 50,
        maxWithdrawLimit: 1000,
        minDepositLimit: 100,
        maxDepositLimit: 5000,
      };
      const updatedAgent = mockAgent({ id: agentId, ...updateDto });

      jest.spyOn(service, 'updateAgentLimits').mockResolvedValue(updatedAgent);

      const result = await controller.updateLimits(agentId, updateDto);
      expect(result).toEqual(updatedAgent);
      expect(service.updateAgentLimits).toHaveBeenCalledWith(agentId, updateDto);
    });

    it('should throw an error if the agent is not found', async () => {
      const agentId = '999';
      const updateDto = {
        minWithdrawLimit: 50,
        maxWithdrawLimit: 1000,
        minDepositLimit: 100,
        maxDepositLimit: 5000,
      };

      jest.spyOn(service, 'updateAgentLimits').mockRejectedValue(new Error('Agent not found'));

      await expect(controller.updateLimits(agentId, updateDto)).rejects.toThrow('Agent not found');
      expect(service.updateAgentLimits).toHaveBeenCalledWith(agentId, updateDto);
    });

    it('should throw an error if the update operation fails', async () => {
      const agentId = '1';
      const updateDto = {
        minWithdrawLimit: 50,
        maxWithdrawLimit: 1000,
        minDepositLimit: 100,
        maxDepositLimit: 5000,
      };

      jest.spyOn(service, 'updateAgentLimits').mockRejectedValue(new Error('Update failed'));

      await expect(controller.updateLimits(agentId, updateDto)).rejects.toThrow('Update failed');
      expect(service.updateAgentLimits).toHaveBeenCalledWith(agentId, updateDto);
    });
  });

  describe('AgentController - Add Balance to Agent', () => {
    it('should add the specified amount to the agent\'s balance', async () => {
      const agentId = '1';
      const balanceDto = { amount: 500 };
      const updatedAgent = mockAgent({ id: agentId, balance: 1500 });

      jest.spyOn(service, 'addAgentBalance').mockResolvedValue(updatedAgent);

      const result = await controller.addBalance(agentId, balanceDto);
      expect(result).toEqual(updatedAgent);
      expect(service.addAgentBalance).toHaveBeenCalledWith(agentId, balanceDto.amount);
    });

    it('should throw an error if the agent is not found', async () => {
      const agentId = '999';
      const balanceDto = { amount: 500 };

      jest.spyOn(service, 'addAgentBalance').mockRejectedValue(new Error('Agent not found'));

      await expect(controller.addBalance(agentId, balanceDto)).rejects.toThrow('Agent not found');
      expect(service.addAgentBalance).toHaveBeenCalledWith(agentId, balanceDto.amount);
    });

    it('should throw an error if the update operation fails', async () => {
      const agentId = '1';
      const balanceDto = { amount: 500 };

      jest.spyOn(service, 'addAgentBalance').mockRejectedValue(new Error('Update failed'));

      await expect(controller.addBalance(agentId, balanceDto)).rejects.toThrow('Update failed');
      expect(service.addAgentBalance).toHaveBeenCalledWith(agentId, balanceDto.amount);
    });
  });

  describe('AgentController - Create Withdrawal Request', () => {
    it('should create a withdrawal request with valid data', async () => {
      const withdrawDto = {
        requestId: 'req123',
        amount: 500,
        user: 'user123',
        agentId: 'agent123',
        coinType: 'BTC',
      };
      const createdRequest = mockWithdrawRequest({ ...withdrawDto, status: 'PENDING' });

      jest.spyOn(service, 'createWithdrawRequest').mockResolvedValue(createdRequest);

      const result = await controller.createWithdrawRequest(withdrawDto);
      expect(result).toEqual(createdRequest);
      expect(service.createWithdrawRequest).toHaveBeenCalledWith(withdrawDto);
    });

    it('should throw an error if the service fails to create the withdrawal request', async () => {
      const withdrawDto = {
        requestId: 'req123',
        amount: 500,
        user: 'user123',
        agentId: 'agent123',
        coinType: 'BTC',
      };

      jest.spyOn(service, 'createWithdrawRequest').mockRejectedValue(new Error('Service error'));

      await expect(controller.createWithdrawRequest(withdrawDto)).rejects.toThrow('Service error');
      expect(service.createWithdrawRequest).toHaveBeenCalledWith(withdrawDto);
    });
  });

  describe('AgentController - Approve Withdrawal', () => {
    it('should approve a withdrawal request with a valid ID and agent ID', async () => {
      const withdrawalId = 'withdraw123';
      const approveDto = { agentId: 'agent123' };
      const approvedWithdrawal = mockWithdrawRequest({
        id: withdrawalId,
        agentId: approveDto.agentId,
        status: DepositStatus.COMPLETED,
      });

      jest.spyOn(service, 'approveWithdrawal').mockResolvedValue(approvedWithdrawal);

      const result = await controller.approveWithdrawal(withdrawalId, approveDto);
      expect(result).toEqual(approvedWithdrawal);
      expect(service.approveWithdrawal).toHaveBeenCalledWith(withdrawalId, approveDto.agentId);
    });

    it('should throw an error if the withdrawal request is not found', async () => {
      const withdrawalId = 'withdraw999';
      const approveDto = { agentId: 'agent123' };

      jest.spyOn(service, 'approveWithdrawal').mockRejectedValue(new Error('Withdrawal request not found'));

      await expect(controller.approveWithdrawal(withdrawalId, approveDto)).rejects.toThrow(
        'Withdrawal request not found',
      );
      expect(service.approveWithdrawal).toHaveBeenCalledWith(withdrawalId, approveDto.agentId);
    });

    it('should throw an error if the agent is not found', async () => {
      const withdrawalId = 'withdraw123';
      const approveDto = { agentId: 'agent999' };

      jest.spyOn(service, 'approveWithdrawal').mockRejectedValue(new Error('Agent not found'));

      await expect(controller.approveWithdrawal(withdrawalId, approveDto)).rejects.toThrow('Agent not found');
      expect(service.approveWithdrawal).toHaveBeenCalledWith(withdrawalId, approveDto.agentId);
    });

    it('should throw an error if the approval operation fails', async () => {
      const withdrawalId = 'withdraw123';
      const approveDto = { agentId: 'agent123' };

      jest.spyOn(service, 'approveWithdrawal').mockRejectedValue(new Error('Approval failed'));

      await expect(controller.approveWithdrawal(withdrawalId, approveDto)).rejects.toThrow('Approval failed');
      expect(service.approveWithdrawal).toHaveBeenCalledWith(withdrawalId, approveDto.agentId);
    });
  });

  describe('AgentController - Create Deposit Request', () => {
    it('should create a deposit request with valid data', async () => {
      const depositDto = {
        requestId: 'req123',
        amount: 1000,
        user: 'user123',
        agentId: 'agent123',
        coinType: 'BTC',
      };
      const createdRequest = mockWithdrawRequest({ ...depositDto, status: DepositStatus.PENDING });
      const bestAgent = mockAgent({});

      jest.spyOn(service, 'createDepositRequest').mockResolvedValue([bestAgent, createdRequest]);

      const result = await controller.createDepositRequest(depositDto);
      expect(result).toEqual([bestAgent, createdRequest]);
      expect(service.createDepositRequest).toHaveBeenCalledWith(depositDto);
    });

    it('should throw an error if the service fails to create the deposit request', async () => {
      const depositDto = {
        requestId: 'req123',
        amount: 1000,
        user: 'user123',
        agentId: 'agent123',
        coinType: 'BTC',
      };

      jest.spyOn(service, 'createDepositRequest').mockRejectedValue(new Error('Service error'));

      await expect(controller.createDepositRequest(depositDto)).rejects.toThrow('Service error');
      expect(service.createDepositRequest).toHaveBeenCalledWith(depositDto);
    });
  });

  describe('AgentController - Approve Deposit', () => {
    it('should approve a deposit request with a valid ID and agent ID', async () => {
      const depositId = 'deposit123';
      const approveDto = { agentId: 'agent123' };
      const approvedDeposit = mockDepositRequest({
        id: depositId,
        agentId: approveDto.agentId,
        status: DepositStatus.COMPLETED,
      });

      jest.spyOn(service, 'approveDeposit').mockResolvedValue(approvedDeposit);

      const result = await controller.approveDeposit(depositId, approveDto);
      expect(result).toEqual(approvedDeposit);
      expect(service.approveDeposit).toHaveBeenCalledWith(depositId, approveDto.agentId);
    });

    it('should throw an error if the deposit request is not found', async () => {
      const depositId = 'deposit999';
      const approveDto = { agentId: 'agent123' };

      jest.spyOn(service, 'approveDeposit').mockRejectedValue(new Error('Deposit request not found'));

      await expect(controller.approveDeposit(depositId, approveDto)).rejects.toThrow(
        'Deposit request not found',
      );
      expect(service.approveDeposit).toHaveBeenCalledWith(depositId, approveDto.agentId);
    });

    it('should throw an error if the agent is not found', async () => {
      const depositId = 'deposit123';
      const approveDto = { agentId: 'agent999' };

      jest.spyOn(service, 'approveDeposit').mockRejectedValue(new Error('Agent not found'));

      await expect(controller.approveDeposit(depositId, approveDto)).rejects.toThrow('Agent not found');
      expect(service.approveDeposit).toHaveBeenCalledWith(depositId, approveDto.agentId);
    });

    it('should throw an error if the approval operation fails', async () => {
      const depositId = 'deposit123';
      const approveDto = { agentId: 'agent123' };

      jest.spyOn(service, 'approveDeposit').mockRejectedValue(new Error('Approval failed'));

      await expect(controller.approveDeposit(depositId, approveDto)).rejects.toThrow('Approval failed');
      expect(service.approveDeposit).toHaveBeenCalledWith(depositId, approveDto.agentId);
    });
  });

  describe('AgentController - Cancel Deposit', () => {
    it('should cancel a deposit request with a valid ID and agent ID', async () => {
      const depositId = 'deposit123';
      const cancelDto = { agentId: 'agent123' };
      const canceledDeposit = mockDepositRequest({
        id: depositId,
        agentId: cancelDto.agentId,
        status: DepositStatus.CANCELLED,
      });

      jest.spyOn(service, 'cancelDeposit').mockResolvedValue(canceledDeposit);

      const result = await controller.cancelDeposit(depositId, cancelDto);
      expect(result).toEqual(canceledDeposit);
      expect(service.cancelDeposit).toHaveBeenCalledWith(depositId, cancelDto.agentId);
    });

    it('should throw an error if the deposit request is not found', async () => {
      const depositId = 'deposit999';
      const cancelDto = { agentId: 'agent123' };

      jest.spyOn(service, 'cancelDeposit').mockRejectedValue(new Error('Deposit request not found'));

      await expect(controller.cancelDeposit(depositId, cancelDto)).rejects.toThrow(
        'Deposit request not found',
      );
      expect(service.cancelDeposit).toHaveBeenCalledWith(depositId, cancelDto.agentId);
    });

    it('should throw an error if the agent is not found', async () => {
      const depositId = 'deposit123';
      const cancelDto = { agentId: 'agent999' };

      jest.spyOn(service, 'cancelDeposit').mockRejectedValue(new Error('Agent not found'));

      await expect(controller.cancelDeposit(depositId, cancelDto)).rejects.toThrow('Agent not found');
      expect(service.cancelDeposit).toHaveBeenCalledWith(depositId, cancelDto.agentId);
    });

    it('should throw an error if the cancellation operation fails', async () => {
      const depositId = 'deposit123';
      const cancelDto = { agentId: 'agent123' };

      jest.spyOn(service, 'cancelDeposit').mockRejectedValue(new Error('Cancellation failed'));

      await expect(controller.cancelDeposit(depositId, cancelDto)).rejects.toThrow('Cancellation failed');
      expect(service.cancelDeposit).toHaveBeenCalledWith(depositId, cancelDto.agentId);
    });

    describe('AgentController - Cancel Deposit', () => {
      it('should cancel a deposit request with a valid ID and agent ID', async () => {
        const depositId = 'deposit123';
        const cancelDto = { agentId: 'agent123' };
        const canceledDeposit = mockDepositRequest({
          id: depositId,
          agentId: cancelDto.agentId,
          status: DepositStatus.CANCELLED,
        });

        jest.spyOn(service, 'cancelDeposit').mockResolvedValue(canceledDeposit);

        const result = await controller.cancelDeposit(depositId, cancelDto);
        expect(result).toEqual(canceledDeposit);
        expect(service.cancelDeposit).toHaveBeenCalledWith(depositId, cancelDto.agentId);
      });

      it('should throw an error if the deposit request is not found', async () => {
        const depositId = 'deposit999';
        const cancelDto = { agentId: 'agent123' };

        jest.spyOn(service, 'cancelDeposit').mockRejectedValue(new Error('Deposit request not found'));

        await expect(controller.cancelDeposit(depositId, cancelDto)).rejects.toThrow(
          'Deposit request not found',
        );
        expect(service.cancelDeposit).toHaveBeenCalledWith(depositId, cancelDto.agentId);
      });

      it('should throw an error if the agent is not found', async () => {
        const depositId = 'deposit123';
        const cancelDto = { agentId: 'agent999' };

        jest.spyOn(service, 'cancelDeposit').mockRejectedValue(new Error('Agent not found'));

        await expect(controller.cancelDeposit(depositId, cancelDto)).rejects.toThrow('Agent not found');
        expect(service.cancelDeposit).toHaveBeenCalledWith(depositId, cancelDto.agentId);
      });

      it('should throw an error if the cancellation operation fails', async () => {
        const depositId = 'deposit123';
        const cancelDto = { agentId: 'agent123' };

        jest.spyOn(service, 'cancelDeposit').mockRejectedValue(new Error('Cancellation failed'));

        await expect(controller.cancelDeposit(depositId, cancelDto)).rejects.toThrow('Cancellation failed');
        expect(service.cancelDeposit).toHaveBeenCalledWith(depositId, cancelDto.agentId);
      });
    });
  });

  describe('AgentController - Agent Withdraw Balance', () => {
    it('should withdraw the specified amount from the agent\'s balance', async () => {
      const agentId = 'agent123';
      const withdrawDto = { amount: 500 };
      const updatedAgent = mockAgent({ id: agentId, balance: 1500 });

      jest.spyOn(service, 'agentWithdrawBalance').mockResolvedValue(updatedAgent);

      const result = await controller.agentWithdrawBalance(agentId, withdrawDto);
      expect(result).toEqual(updatedAgent);
      expect(service.agentWithdrawBalance).toHaveBeenCalledWith(agentId, withdrawDto.amount);
    });

    it('should throw an error if the agent is not found', async () => {
      const agentId = 'agent999';
      const withdrawDto = { amount: 500 };

      jest.spyOn(service, 'agentWithdrawBalance').mockRejectedValue(new Error('Agent not found'));

      await expect(controller.agentWithdrawBalance(agentId, withdrawDto)).rejects.toThrow('Agent not found');
      expect(service.agentWithdrawBalance).toHaveBeenCalledWith(agentId, withdrawDto.amount);
    });

    it('should throw an error if the withdrawal operation fails', async () => {
      const agentId = 'agent123';
      const withdrawDto = { amount: 500 };

      jest.spyOn(service, 'agentWithdrawBalance').mockRejectedValue(new Error('Withdrawal failed'));

      await expect(controller.agentWithdrawBalance(agentId, withdrawDto)).rejects.toThrow('Withdrawal failed');
      expect(service.agentWithdrawBalance).toHaveBeenCalledWith(agentId, withdrawDto.amount);
    });
  });

  describe('AgentController - General Error Handling', () => {
    it('should throw a NotFoundException if no agents are found', async () => {
      jest.spyOn(service, 'getAllAgents').mockResolvedValue([]);

      await expect(controller.findAll()).rejects.toThrow('No agents found');
      expect(service.getAllAgents).toHaveBeenCalled();
    });

    it('should throw a NotFoundException if an agent is not found by ID', async () => {
      const agentId = 'nonexistent-id';

      jest.spyOn(service, 'getAgentById').mockResolvedValue(null);

      await expect(controller.findOne(agentId)).rejects.toThrow(`Agent with ID '${agentId}' not found`);
      expect(service.getAgentById).toHaveBeenCalledWith(agentId);
    });

    it('should throw a NotFoundException if account details are not found', async () => {
      const agentId = 'nonexistent-id';

      jest.spyOn(service, 'getAgentAccountDetails').mockResolvedValue(null);

      await expect(controller.getAccountDetails(agentId)).rejects.toThrow(
        `Account details for agent with ID '${agentId}' not found`,
      );
      expect(service.getAgentAccountDetails).toHaveBeenCalledWith(agentId);
    });

    it('should throw an error if the service fails unexpectedly', async () => {
      jest.spyOn(service, 'getAllAgents').mockRejectedValue(new Error('Unexpected service error'));

      await expect(controller.findAll()).rejects.toThrow('Unexpected service error');
      expect(service.getAllAgents).toHaveBeenCalled();
    });

    it('should throw a NotFoundException if agents by coin type are not found', async () => {
      const coinType = 'BTC';

      jest.spyOn(service, 'findAgentsByType').mockResolvedValue([]);

      await expect(controller.findByType(coinType)).rejects.toThrow(
        `Agents with type '${coinType}' not found`,
      );
      expect(service.findAgentsByType).toHaveBeenCalledWith(coinType);
    });
  });
});
