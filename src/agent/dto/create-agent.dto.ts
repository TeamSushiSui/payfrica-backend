import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateAgentDto {
  @IsNotEmpty()
  @IsString()
  addr: string;

  @IsNotEmpty()
  @IsString()
  coinType: string;

  @IsOptional()
  @IsNumber()
  minWithdrawLimit?: number;

  @IsOptional()
  @IsNumber()
  maxWithdrawLimit?: number;

  @IsOptional()
  @IsNumber()
  minDepositLimit?: number;

  @IsOptional()
  @IsNumber()
  maxDepositLimit?: number;

  @IsNotEmpty()
  @IsString()
  accountNumber: string;

  @IsNotEmpty()
  @IsString()
  bank: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}