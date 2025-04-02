import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @Post('register')
    async register(@Body() { walletAddress, username }) {
        return this.usersService.createUser(walletAddress, username);
      }
    @Get()
    findAll() {
        return this.usersService.findAll();
    }
    @Get(':walletAddress')
    async getUserByWalletAddress(@Param('walletAddress') walletAddress: string) {
        return this.usersService.findUserByWallet(walletAddress);
    }

    @Get(':username')
    async getUserByName(@Param('username') username: string) {
        return this.usersService.findUserByName(username);
    }
}
