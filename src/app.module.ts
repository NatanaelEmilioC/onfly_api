import { Module } from '@nestjs/common';
import { ExpenseModule } from './modules/expense.module';
import { UserModule } from './modules/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ExpenseModule, UserModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
