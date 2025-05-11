/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Query,
  Param,
  ParseIntPipe,
  NotFoundException,
  Patch,
  Body,
} from '@nestjs/common';
import { AgentService } from './agent.service';
import { UpdateAccountDto } from './dto/update-account.dto';
import { WithdrawRequest, DepositRequest, Agent } from "@prisma/client";

type AgentTransaction =
  | (WithdrawRequest & { type: 'withdrawal' })
  | (DepositRequest  & { type: 'deposit' });

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Get()
  async getAllAgents(): Promise<Agent[]> {
    return this.agentService.getAllAgents();
  }

  /**
   * GET /agent/best-deposit-agent?coinType=NGNC&amount=5000
   */
  @Get('best-deposit-agent')
  async getBestDepositAgent(
    @Query('coinType') coinType: string,
    @Query('amount', ParseIntPipe) amount: number,
  ): Promise<{
    id: string;
    accountNumber: string;
    bank: string;
    name: string;
    comment: string;
  }> {
    // console.log(coinType, amount, "controller");
    const agent = await this.agentService.getBestDepositAgent(
      coinType,
      amount,
    );
    if (!agent) {
      throw new NotFoundException(
        `No suitable deposit agent for ${coinType} amount ${amount}`,
      );
    }
    return agent;
  }

  /**
   * GET /agent/best-withdraw-agent?coinType=NGNC&amount=5000
   */
  @Get('best-withdraw-agent')
  async getBestWithdrawalAgent(
    @Query('coinType') coinType: string,
    @Query('amount', ParseIntPipe) amount: number,
  ): Promise<{ id: string }> {
    const agent = await this.agentService.getBestWithdrawalAgent(
      coinType,
      amount,
    );
    if (!agent) {
      throw new NotFoundException(
        `No suitable withdrawal agent for ${coinType} amount ${amount}`,
      );
    }
    return agent;
  }

  /**
   * GET /agent/account-details?agentId=...
   */
  @Get('account-details')
  async getAgentAccountDetails(
    @Query('agentId') agentId: string,
  ): Promise<{ accountNumber: string; bank: string; name: string }> {
    const details = await this.agentService.getAgentAccountDetails(agentId);
    if (!details) {
      throw new NotFoundException(`Agent ${agentId} not found`);
    }
    return details;
  }

  /**
   * PATCH /agent/:agentId/account
   * body: { accountName, accountNumber, accountBank }
   */
  @Patch(':agentId/account')
  async updateAgentAccount(
    @Param('agentId') agentId: string,
    @Body() dto: UpdateAccountDto,
  ) {
    return this.agentService.updateAccount(agentId, dto);
  }

  /**
   * GET /agent/:agentId/withdraw-requests
   */
  @Get(':agentId/withdraw-requests')
  async findWithdrawRequests(
    @Param('agentId') agentId: string,
  ) {
    return this.agentService.findWithdrawRequests(agentId);
  }

  /**
   * GET /agent/:agentId/deposit-requests
   */
  @Get(':agentId/deposit-requests')
  async findDepositRequests(
    @Param('agentId') agentId: string,
  ) {
    return this.agentService.findDepositRequests(agentId);
  }

  /**
   * GET /agent/:agentId/pending-withdraw-requests
   */
  @Get(':agentId/pending-withdraw-requests')
  async findPendingWithdrawRequests(
    @Param('agentId') agentId: string,
  ) {
    return this.agentService.findPendingWithdrawRequests(agentId);
  }

  /**
   * GET /agent/:agentId/pending-deposit-requests
   */
  @Get(':agentId/pending-deposit-requests')
  async findPendingDepositRequests(
    @Param('agentId') agentId: string,
  ) {
    return this.agentService.findPendingDepositRequests(agentId);
  }

  /**
   * GET /agent/valid-types
   */
  @Get('valid-types')
  async getValidTypes(): Promise<
    { shortName: string; fullType: string }[]
  > {
    return this.agentService.getValidAgentTypes();
  }

  @Get(':agentId/transactions')
  async getTransactionHistory(
    @Param('agentId') agentId: string,
  ): Promise<AgentTransaction[]> {
    return this.agentService.getTransactionHistory(agentId);
  }

  @Get('requests')
  async getRequestsByAddress(
    @Query('address') address: string,
  ): Promise<AgentTransaction[]> {
    return this.agentService.getRequestsByAddress(address);
  }

  @Get('agent')
  async getAgentByAddress(
    @Query('address') address: string,
  ): Promise<{ id: string }> {
    const agent = await this.agentService.getAgentByAddress(address);
    if (!agent) {
      throw new NotFoundException(`Agent with address ${address} not found`);
    }
    return agent;
  }
}
