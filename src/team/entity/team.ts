import { Prop, Schema } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Member } from "src/member/entity/member";

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team {
  @Prop({ required: true })
  readonly name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member" }] })
  readonly members: Member[];
}
