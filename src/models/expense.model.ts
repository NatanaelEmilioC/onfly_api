import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class ExpenseModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 191 })
  description: string;

  @Column()
  date: Date;

  @Column('int')
  userId: number;

  @Column()
  value: number;

  @Column()
  @Generated('uuid')
  uuid: string;
}
