import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Member } from "./entity/member";
import { Model } from "mongoose";
import { CreateMemberRequest } from "./dto/createMemberRequest";

@Injectable()
export class MemberService {
  constructor(@InjectModel(Member.name) private memberModel: Model<Member>) {}

  async createMember(createMemberRequest: CreateMemberRequest) {
    const newMember = new this.memberModel(Member.from(createMemberRequest));
    return newMember.save();
  }

  async findAllMember() {
    return this.memberModel.find().exec();
  }

  async findMemberByUsername(username: string) {
    return this.memberModel.findOne({ username: username });
  }
}
