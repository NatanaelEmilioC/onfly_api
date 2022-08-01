import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseController } from 'src/controllers/expense.controller';
import { ExpenseModel } from 'src/models/expense.model';
import { UserModel } from 'src/models/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseModel, UserModel])],
  controllers: [ExpenseController],
})
export class ExpenseModule {}
