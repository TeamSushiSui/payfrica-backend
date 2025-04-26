// src/users/dto/update-base-token.dto.ts
import { IsString, IsInt, Min } from 'class-validator';

export class UpdateBaseTokenDto {
  @IsString() name: string;
  @IsString() coinType: string;
  @IsInt() @Min(0) decimals: number;
  @IsString() symbol: string;
}
