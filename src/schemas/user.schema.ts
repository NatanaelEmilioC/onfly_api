import { IsEmail, IsString, MaxLength } from 'class-validator';

export class UserSchema {
  @IsString()
  @MaxLength(255)
  name: string;

  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsString()
  @MaxLength(255)
  password: string;
}
