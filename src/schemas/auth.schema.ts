import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class AuthSchema {
  @IsEmail()
  @MaxLength(255)
  @IsNotEmpty()
  userEmail: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  password: string;
}
