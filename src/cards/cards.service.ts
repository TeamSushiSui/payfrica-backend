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
        const cards = await this.prisma.temporaryCard.findMany({
            where: { owner: ownerAddress },
            select: {
                owner: true,
                blobId: true,
                s: true,
                cardAddress: true,
                name: true
            }
        });

        if (cards.length === 0) {
            throw new NotFoundException(`No cards found for owner ${ownerAddress}`);
        }

        return cards;
    }
}
