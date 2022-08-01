import { Module } from '@nestjs/common';
import { ExpenseModule } from './modules/expense.module';
import { UserModule } from './modules/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth.module';
import { SendGridModule } from '@anchan828/nest-sendgrid';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const settings = require('../ormconfig.js');

@Module({
  imports: [
    ExpenseModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(settings),
    SendGridModule.forRoot({
      apikey: process.env.SEND_GRID_ACCESS_KEY,
    }),
  ],
})
export class AppModule {}
