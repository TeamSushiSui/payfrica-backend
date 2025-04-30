import { IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  language?: string;

  /** 
   * The name (primary key) of an existing Country 
   */
  @IsOptional()
  @IsString()
  countryName?: string;
}
