import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class CardsService {

    constructor(private readonly prisma: PrismaService) { }

    async getCardTransactionHistory(cardAddress: string) {
        const card = await this.prisma.temporaryCard.findUnique({
            where: { cardAddress },
            select: { id: true }
        });

        if (!card) throw new NotFoundException('Card not found');

        const history = await this.prisma.temporaryCardTransactionHistory.findMany({
            where: { cardId: card.id },
            orderBy: { date: 'desc' }
        });

        return history;
    }

    async getCardsByOwner(ownerAddress: string) {
        return this.prisma.temporaryCard.findMany({
            where: { owner: ownerAddress },
            orderBy: { creationTime: 'desc' },
        });
    }

}
