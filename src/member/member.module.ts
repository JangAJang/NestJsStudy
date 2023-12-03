import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Member, MemberSchema } from "./entity/member";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }]),
  ],
})
export class MemberModule {}
