import { Prop, Schema } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MemberDocument = HydratedDocument<Member>;

@Schema()
export class Member {
  @Prop({ required: true })
  readonly username: string;

  @Prop({ required: true })
  readonly nickname: string;

  @Prop({ required: true })
  readonly password: string;

  constructor(username: string, nickname: string, password: string) {
    this.username = username;
    this.nickname = nickname;
    this.password = password;
  }

  isRightPassword(password: string): boolean {
    return this.password === password;
  }

  static of(username: string, nickname: string, password: string) {
    return new Member(username, nickname, password);
  }
}
