import { Controller, Get, Post, Body, Param, Delete, Put, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, Country, AccountDetails } from '@prisma/client';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // @UseGuards(JwtAuthGuard)
  @Get(':address/basic')
  findOne(@Param('address') address: string) {
    return this.usersService.findOrCreateUser(address);
  }

  @Get(':address/transactions')
  getTransactionHistory(@Param('address') address: string) {
    return this.usersService.getUserTransactionHistory(address);
  }

  @Get(':address/stats')
  getUserStats(@Param('address') address: string) {
    return this.usersService.getUserStats(address);
  }

  @Patch(':address')
  update(
    @Param('address') address: string,
    @Body() dto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(address, dto);
  }

  @Get(':address')
  getOne(
    @Param('address') address: string,
  ): Promise<User & { country?: Country; accountDetails?: AccountDetails }> {
    return this.usersService.findOne(address);
  }
  // in users.controller.ts
  @Patch(":address/account-details")
  updateAccountDetails(
    @Param("address") address: string,
    @Body() payload: { accountNumber: string; name: string; bank: string }
  ) {
    return this.usersService.updateAccountDetails(address, payload);
  }
}
