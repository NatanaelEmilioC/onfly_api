import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseController } from 'src/controllers/expense.controller';
import { ExpenseModel } from 'src/models/expense.model';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseModel])],
  controllers: [ExpenseController],
})
export class ExpenseModule {}
