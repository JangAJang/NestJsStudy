import { Member } from "src/member/entity/member";
import { RegisterRequest } from "../dto/registerRequest";
import * as bcrypt from "bcrypt";
import { MemberRepository } from "src/member/repository/member.repository";
import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class AuthValidator {
  constructor(private memberRepository: MemberRepository) {}

  public async isRightPassword(foundMember: Member, password: string) {
    return await bcrypt.compare(password, foundMember.password);
  }

  public async validateRegister(registerRequest: RegisterRequest) {
    if (this.memberRepository.findByUsername(registerRequest.username))
      throw new BadRequestException("이미 사용중인 아이디입니다.");

    if (await this.memberRepository.findByNickname(registerRequest.nickname))
      throw new BadRequestException("이미 사용중인 닉네임입니다.");

    if (!registerRequest.isValidPassword())
      throw new BadRequestException("비밀번호가 서로 일치하지 않습니다.");
  }

  public async validateMember(
    username: string,
    password: string
  ): Promise<Member> {
    const foundMember = await this.memberRepository.findByUsername(username);

    if (this.isRightPassword(foundMember, password)) {
      return foundMember;
    }

    throw new BadRequestException(
      "로그인에 실패했습니다. 아이디와 비밀번호를 다시 확인해주세요."
    );
  }
}
