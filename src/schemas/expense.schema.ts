import { Type } from 'class-transformer';
import {
  IsDate,
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
  date: Date;

  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 })
  @IsPositive()
  user: number;

  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })
  @IsPositive()
  value: number;
}
