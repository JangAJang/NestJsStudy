import { RegisterRequest } from "src/auth/dto/registerRequest";
import { Session } from "src/auth/entity/session";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @OneToMany((type) => Session, (session) => session.member)
  readonly sessions: Session[];

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
