import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from 'src/models/user.model';
import { Repository } from 'typeorm/repository/Repository';
import * as bcrypt from 'bcrypt';
import { AuthSchema } from 'src/schemas/auth.schema';

@Controller('/auth')
export class AuthController {
  constructor(
    @InjectRepository(UserModel) private model: Repository<UserModel>,
  ) {}

  @Post()
  public async create(@Body() body: AuthSchema): Promise<UserModel> {
    const user = body;
    const emailVerify = await this.model.findOne({
      where: { userEmail: user.userEmail },
    });

    if (
      !!emailVerify &&
      bcrypt.compareSync(user.password, emailVerify.password)
    ) {
      return emailVerify;
    } else {
      throw new UnauthorizedException('O email ou password invalidos!');
    }
  }
}
