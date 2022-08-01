import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxDate,
  MaxLength,
} from 'class-validator';

const today = new Date();

export class ExpenseSchema {
  @IsString()
  @MaxLength(191)
  description: string;

  @IsDate()
  @MaxDate(today)
  @Type(() => Date)
  @IsNotEmpty()
  date: Date;

  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 })
  @IsNotEmpty()
  userId: number;

  @IsPositive()
  value: number;
}
