import { Module } from '@nestjs/common';
import { ExpenseModule } from './modules/expense.module';
import { UserModule } from './modules/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const settings = require('../ormconfig.js');

@Module({
  imports: [
    ExpenseModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(settings),
  ],
})
export class AppModule {}
