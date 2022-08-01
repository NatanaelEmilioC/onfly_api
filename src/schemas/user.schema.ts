import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UserSchema {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @MaxLength(255)
  @IsNotEmpty()
  userEmail: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  password: string;
}
