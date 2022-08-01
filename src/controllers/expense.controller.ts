import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpenseModel } from 'src/models/expense.model';
import { UserModel } from 'src/models/user.model';
import { ExpenseSchema } from 'src/schemas/expense.schema';
import { Repository } from 'typeorm/repository/Repository';

@Controller('/expense')
export class ExpenseController {
  constructor(
    @InjectRepository(ExpenseModel) private model: Repository<ExpenseModel>,
    @InjectRepository(UserModel) private userModel: Repository<UserModel>,
  ) {}

  @Post()
  public async create(@Body() body: ExpenseSchema): Promise<ExpenseModel> {
    const expense = body;
    const user = await this.userModel.findOne({
      where: { id: expense.userId },
    });

    if (user) {
      throw new NotFoundException(
        `Não foi encontrado usuário com o id ${expense.userId}`,
      );
    }

    return await this.model.save(expense);
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ExpenseModel> {
    const expense = await this.model.findOne({ where: { id } });
    if (!expense) {
      throw new NotFoundException(`Não foi encontrada despesa com o id ${id}`);
    }
    return expense;
  }

  @Get()
  public async getAll(): Promise<ExpenseModel[]> {
    return await this.model.find();
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ExpenseSchema,
  ): Promise<ExpenseModel> {
    const expense = await this.model.findOne({ where: { id } });

    if (!expense) {
      throw new NotFoundException(`Não foi encontrada despesa com o id ${id}`);
    }

    await this.model.update({ id }, body);

    return this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const expense = await this.model.findOne({ where: { id } });

    if (!expense) {
      throw new NotFoundException(`Não foi encontrada despesa com o id ${id}`);
    }

    await this.model.delete(id);
    return `A despesa com id ${id} foi removida com sucesso`;
  }
}
