import { RegisterRequest } from "src/auth/dto/registerRequest";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Team extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly name: string;

  constructor(id: number, name: string) {
    super();
    this.id = id;
    this.name = name;
  }
}
