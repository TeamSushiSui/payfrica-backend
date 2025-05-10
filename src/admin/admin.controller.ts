import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { Country } from "@prisma/client";
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly service: AdminService) {}

  /**
   * POST /countries
   * Request body: { name, currencySymbol, baseTokencoinType }
   */
  @Post()
  create(@Body() dto: CreateCountryDto): Promise<Country> {
    return this.service.create(dto);
  }

  @Get()
  getAllNames(): Promise<string[]> {
    return this.service.findAllNames();
  }
}
