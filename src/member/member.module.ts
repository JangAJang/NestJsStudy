import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Member, MemberSchema } from "./entity/member";
import { MemberService } from "./member.service";
import { MemberController } from "./member.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }]),
  ],
  providers: [MemberService],
  controllers: [MemberController],
})
export class MemberModule {}
