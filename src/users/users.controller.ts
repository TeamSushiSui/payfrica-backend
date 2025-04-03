import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    // @UseGuards(JwtAuthGuard)
    @Get(':address')
    findOne(@Param('address') address: string) {
        return this.usersService.findOrCreateUser(address);
    }

    // @UseGuards(JwtAuthGuard)
    @Get(':address/transactions')
    getTransactionHistory(@Param('address') address: string) {
        return this.usersService.getUserTransactionHistory(address);
    }

    // @UseGuards(JwtAuthGuard)
    @Get(':address/stats')
    getUserStats(@Param('address') address: string) {
        return this.usersService.getUserStats(address);
    }
}
