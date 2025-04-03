import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AgentService } from './agent.service';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Post()
  create(@Body() createAgentDto: {
    addr: string;
    coinType: string;
    minWithdrawLimit?: number;
    maxWithdrawLimit?: number;
    minDepositLimit?: number;
    maxDepositLimit?: number;
    accountNumber: string;
    bank: string;
    name: string
  }) {
    return this.agentService.createAgent(createAgentDto);
  }

  @Get()
  findAll() {
    return this.agentService.getAllAgents();
  }

  @Get('type/:coinType')
  findByType(@Param('coinType') coinType: string) {
    return this.agentService.findAgentsByType(coinType);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agentService.getAgentById(id);
  }

  @Get(':id/account')
  getAccountDetails(@Param('id') id: string) {
    return this.agentService.getAgentAccountDetails(id);
  }

  @Put(':id/limits')
  updateLimits(
    @Param('id') id: string,
    @Body() updateDto: {
      minWithdrawLimit?: number;
      maxWithdrawLimit?: number;
      minDepositLimit?: number;
      maxDepositLimit?: number;
    }
  ) {
    return this.agentService.updateAgentLimits(id, updateDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Post(':id/balance')
  addBalance(
    @Param('id') id: string,
    @Body() balanceDto: { amount: number }
  ) {
    return this.agentService.addAgentBalance(id, balanceDto.amount);
  }

  @Post('withdraw')
  createWithdrawRequest(
    @Body() withdrawDto: {
      requestId: string;
      amount: number;
      user: string;
      agentId: string;
      coinType: string;
    }
  ) {
    return this.agentService.createWithdrawRequest(withdrawDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Post('withdraw/:id/approve')
  approveWithdrawal(
    @Param('id') id: string,
    @Body() approveDto: { agentId: string }
  ) {
    return this.agentService.approveWithdrawal(id, approveDto.agentId);
  }

  @Post('deposit')
  createDepositRequest(
    @Body() depositDto: {
      requestId: string;
      amount: number;
      user: string;
      agentId: string;
      coinType: string;
    }
  ) {
    return this.agentService.createDepositRequest(depositDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Post('deposit/:id/approve')
  approveDeposit(
    @Param('id') id: string,
    @Body() approveDto: { agentId: string }
  ) {
    return this.agentService.approveDeposit(id, approveDto.agentId);
  }

  // @UseGuards(JwtAuthGuard)
  @Post('deposit/:id/cancel')
  cancelDeposit(
    @Param('id') id: string,
    @Body() cancelDto: { agentId: string }
  ) {
    return this.agentService.cancelDeposit(id, cancelDto.agentId);
  }

  // @UseGuards(JwtAuthGuard)
  @Post(':id/withdraw-balance')
  agentWithdrawBalance(
    @Param('id') id: string,
    @Body() withdrawDto: { amount: number }
  ) {
    return this.agentService.agentWithdrawBalance(id, withdrawDto.amount);
  }
}
