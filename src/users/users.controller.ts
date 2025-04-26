import { Controller, Get, Post, Body, Param, Delete, Put, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateBaseTokenDto } from './dto/update-base-token.dto';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

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

    @Get(':userId/base-token')
    async getBaseToken(
        @Param('userId') userId: string,
    ): Promise<{
        name: string;
        coinType: string;
        decimals: number;
        symbol: string;
    } | null> {
        return this.usersService.getUserBaseToken(userId);
    }
    @Patch(':userId/base-token')
    updateBaseToken(
        @Param('userId') userId: string,
        @Body() dto: UpdateBaseTokenDto,
    ) {
        // DTO validation will ensure all fields are present & correct
        return this.usersService.updateUserBaseToken(userId, dto);
    }
}
