import { RegisterRequest } from "src/auth/dto/registerRequest";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Member extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly username: string;

  @Column()
  readonly nickname: string;

  @Column()
  readonly password: string;

  constructor(
    id: number,
    username: string,
    nickname: string,
    password: string
  ) {
    super();
    this.id = id;
    this.username = username;
    this.nickname = nickname;
    this.password = password;
  }

  isRightPassword(password: string): boolean {
    return this.password === password;
  }

  static from(registerRequest: RegisterRequest) {
    return Member.of(
      registerRequest.username,
      registerRequest.nickname,
      registerRequest.password
    );
  }

  static of(username: string, nickname: string, password: string) {
    return new Member(undefined, username, nickname, password);
  }
}
