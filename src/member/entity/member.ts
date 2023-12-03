import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Team } from "src/team/entity/team";
import { CreateMemberRequest } from "../dto/createMemberRequest";

export type MemberDocument = HydratedDocument<Member>;

@Schema()
export class Member {
  @Prop({ required: true })
  readonly username: string;

  @Prop(
    raw({
      firstName: { type: String },
      lastName: { type: String },
    })
  )
  readonly nameInfo: Record<string, any>;

  @Prop({ required: true })
  readonly password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Team" })
  readonly team: Team;

  constructor(
    username: string,
    nameInfo: Record<string, any>,
    password: string
  ) {
    this.username = username;
    this.nameInfo = nameInfo;
    this.password = password;
  }

  isRightPassword(password: string): boolean {
    return this.password === password;
  }

  static of(username: string, nameInfo: Record<string, any>, password: string) {
    return new Member(username, nameInfo, password);
  }

  static from(createMemberRequest: CreateMemberRequest) {
    const nameInfo = {
      firstName: createMemberRequest.firstName,
      lastName: createMemberRequest.lastName,
    };
    return new Member(
      createMemberRequest.username,
      nameInfo,
      createMemberRequest.password
    );
  }
}

export const MemberSchema = SchemaFactory.createForClass(Member);
