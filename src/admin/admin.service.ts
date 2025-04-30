import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Country } from '@prisma/client';

@Injectable()
export class AdminService {
    constructor(private readonly prisma: PrismaService) {}

    async create(dto: CreateCountryDto): Promise<Country> {
        const { name, currencySymbol, baseTokencoinType } = dto;
        return this.prisma.country.create({
          data: {
            name,
            currencySymbol,
            baseTokencoinType,
          },
        });
      }
}
