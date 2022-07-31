import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpenseModel } from 'src/models/expense.model';
import { Repository } from 'typeorm/repository/Repository';

@Controller('/expense')
export class ExpenseController {
  constructor(
    @InjectRepository(ExpenseModel) private model: Repository<ExpenseModel>,
  ) {}

  @Post()
  public create(): any {
    return { data: 'Create !!' };
  }

  @Get(':id')
  public getOne(): any {
    return { data: 'Get One !!' };
  }

  @Get()
  public async getAll(): Promise<{ data: ExpenseModel[] }> {
    const list = await this.model.find();
    return { data: list };
  }

  @Put(':id')
  public update(): any {
    return { data: 'Update !!' };
  }

  @Delete(':id')
  public delete(): any {
    return { data: 'Delete !!' };
  }
}
