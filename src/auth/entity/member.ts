import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";

@Entity()
export class Member {
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
