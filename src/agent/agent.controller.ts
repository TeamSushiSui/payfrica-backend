/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Query,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { AgentService } from './agent.service';
import { CreateAgentDto } from './dto/create-agent.dto';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) { }

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
  }> {
    const agent = await this.agentService.getBestDepositAgent(
      coinType,
      amount,
    );
    if (!agent) {
      throw new NotFoundException(
        `No suitable agent for ${coinType} with amount ${amount}`,
      );
    }
    return agent;
  }
  // @Post()
  // create(@Body(new ValidationPipe()) createAgentDto: CreateAgentDto) {
  //   return this.agentService.createAgent(createAgentDto);
  // }

  // @Get()
  // async findAll() {
  //   const result = await this.agentService.getAllAgents();
  //   if (!result || result.length === 0) {
  //     throw new NotFoundException('No agents found');
  //   }
  //   return result;
  // }

  // @Get('type/:coinType')
  // async findByType(@Param('coinType') coinType: string) {
  //   const result = await this.agentService.findAgentsByType(coinType);
  //   if (!result || result.length === 0) {
  //     throw new NotFoundException(`Agents with type '${coinType}' not found`);
  //   }
  //   return result;
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: string) {
  //   const result = await this.agentService.getAgentById(id);
    
  //   if (!result) {
  //     throw new NotFoundException(`Agent with ID '${id}' not found`);
  //   }
  //   return result;
  // }

  // @Get(':id/account')
  // async getAccountDetails(@Param('id') id: string) {
  //   const result = await this.agentService.getAgentAccountDetails(id);
  //   if (!result) {
  //     throw new NotFoundException(`Account details for agent with ID '${id}' not found`);
  //   }
  //   return result;
  // }

  // @Put(':id/limits')
  // updateLimits(
  //   @Param('id') id: string,
  //   @Body() updateDto: {
  //     minWithdrawLimit?: number;
  //     maxWithdrawLimit?: number;
  //     minDepositLimit?: number;
  //     maxDepositLimit?: number;
  //   }
  // ) {
  //   return this.agentService.updateAgentLimits(id, updateDto);
  // }

  // @Post(':id/balance')
  // addBalance(
  //   @Param('id') id: string,
  //   @Body() balanceDto: { amount: number }
  // ) {
  //   return this.agentService.addAgentBalance(id, balanceDto.amount);
  // }

  // @Post('withdraw')
  // createWithdrawRequest(
  //   @Body() withdrawDto: {
  //     requestId: string;
  //     amount: number;
  //     user: string;
  //     agentId: string;
  //     coinType: string;
  //   }
  // ) {
  //   return this.agentService.createWithdrawRequest(withdrawDto);
  // }

  // @Post('withdraw/:id/approve')
  // approveWithdrawal(
  //   @Param('id') id: string,
  //   @Body() approveDto: { agentId: string }
  // ) {
  //   return this.agentService.approveWithdrawal(id, approveDto.agentId);
  // }

  // @Post('deposit')
  // createDepositRequest(
  //   @Body() depositDto: {
  //     requestId: string;
  //     amount: number;
  //     user: string;
  //     agentId: string;
  //     coinType: string;
  //   }
  // ) {
  //   return this.agentService.createDepositRequest(depositDto);
  // }

  // @Post('deposit/:id/approve')
  // approveDeposit(
  //   @Param('id') id: string,
  //   @Body() approveDto: { agentId: string }
  // ) {
  //   return this.agentService.approveDeposit(id, approveDto.agentId);
  // }

  // @Post('deposit/:id/cancel')
  // cancelDeposit(
  //   @Param('id') id: string,
  //   @Body() cancelDto: { agentId: string }
  // ) {
  //   return this.agentService.cancelDeposit(id, cancelDto.agentId);
  // }

  // @Post(':id/withdraw-balance')
  // agentWithdrawBalance(
  //   @Param('id') id: string,
  //   @Body() withdrawDto: { amount: number }
  // ) {
  //   return this.agentService.agentWithdrawBalance(id, withdrawDto.amount);
  // }
}
