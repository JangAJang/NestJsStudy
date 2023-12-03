import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateMemberRequest } from "./dto/createMemberRequest";
import { MemberService } from "./member.service";

@Controller("member")
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Post()
  async createMember(@Body() createMemberRequest: CreateMemberRequest) {
    return await this.memberService.createMember(createMemberRequest);
  }

  @Get("/:username")
  async findMemberByUsername(@Param("username") username: string) {
    return this.memberService.findMemberByUsername(username);
  }
}
