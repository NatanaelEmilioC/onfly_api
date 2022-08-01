import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 191 })
  name: string;

  @Column({ length: 191 })
  userEmail: string;

  @Column({ length: 191 })
  password: string;

  @Column()
  @Generated('uuid')
  uuid: string;
}
