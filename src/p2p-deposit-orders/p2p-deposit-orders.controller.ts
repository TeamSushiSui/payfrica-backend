import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { P2pDepositOrdersService } from './p2p-deposit-orders.service';

@Controller('p2p-deposit-orders')
export class P2pDepositOrdersController {
  constructor(private readonly p2pDepositOrdersService: P2pDepositOrdersService) {}

  @Post('create')
  async createOrder(@Body() { wallet, amount, agentId, accountNumber, bank, name }) {
    return this.p2pDepositOrdersService.createOrder(wallet, amount, agentId, accountNumber, bank, name);
  }

  @Get()
  async getAllOrders() {
    return this.p2pDepositOrdersService.getAllOrders();
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    return this.p2pDepositOrdersService.getOrderById(id);
  }

  @Patch(':id/status')
  async updateOrderStatus(@Param('id') id: string, @Body() { status }) {
    return this.p2pDepositOrdersService.updateOrderStatus(id, status);
  }

  @Get('pending')
  async getPendingOrders() {
    return this.p2pDepositOrdersService.getPendingOrders();
  }

  @Get('pending/agent/:agentId')
  async getPendingOrdersByAgent(@Param('agentId') agentId: string) {
    return this.p2pDepositOrdersService.getPendingOrdersByAgent(agentId);
  }
}
