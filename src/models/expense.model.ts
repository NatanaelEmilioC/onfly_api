import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExpenseModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 191 })
  description: string;

  @Column()
  date: Date;

  @Column('int')
  user: number;

  @Column()
  value: number;
}
