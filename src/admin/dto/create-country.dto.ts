import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  name: string;               // the country’s name (will map to the Prisma @id)

  @IsString()
  @IsNotEmpty()
  currencySymbol: string;     // e.g. "₦", "$", "€"

  @IsString()
  @IsNotEmpty()
  baseTokencoinType: string;  // the coinType of the existing Tokens record
}
