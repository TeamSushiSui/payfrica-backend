import { Controller, Get, Param } from '@nestjs/common';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
    constructor(private cardService: CardsService) { }

    @Get(':cardAddress/history')
    async getHistory(@Param('cardAddress') cardAddress: string) {
        return this.cardService.getCardTransactionHistory(cardAddress);
    }

    @Get('owner/:ownerAddress')
    async getOwnerCards(@Param('ownerAddress') ownerAddress: string) {
        return this.cardService.getCardsByOwner(ownerAddress);
    }

}
