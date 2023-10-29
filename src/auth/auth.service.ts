import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { Session } from "./entity/session";
import { Member } from "src/member/entity/member";
import { RegisterRequest } from "./dto/registerRequest";
import { MemberRepository } from "../member/repository/member.repository";
import { SessionRepository } from "./repository/session.repository";

@Injectable()
export class AuthService {
  constructor(
    private memberRepository: MemberRepository,
    private sessionRepository: SessionRepository
  ) {}

  public async register(registerRequest: RegisterRequest): Promise<void> {
    await this.validateRegister(registerRequest);
    registerRequest.password = await bcrypt.hash(
      registerRequest.password,
      parseInt(process.env.SALT, 10)
    );
    await this.memberRepository.save(Member.from(registerRequest));
  }

  public async signIn(signInRequest: SignInRequest): Promise<any> {
    const foundMember = await this.memberRepository.findByUsername(
      signInRequest.username
    );

    if (this.isRightPassword(foundMember, signInRequest.password)) {
      return (await this.createMembersSession(foundMember)).id;
    }

    throw new BadRequestException(
      "로그인에 실패했습니다. 아이디와 비밀번호를 다시 확인해주세요."
    );
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

  public async logout(sessionId: number): Promise<void> {
    const foundSession = await this.sessionRepository.findById(sessionId);

    if (!foundSession)
      throw new UnauthorizedException("로그인 후 이용해주세요.");

    const membersSessions =
      await this.sessionRepository.findSessionsWithSameMember(sessionId);
    await this.sessionRepository.remove(membersSessions);
  }

  private async isRightPassword(foundMember: Member, password: string) {
    return await bcrypt.compare(password, foundMember.password);
  }

  private async createMembersSession(member: Member): Promise<Session> {
    return await this.sessionRepository.save(Session.byMember(member));
  }

  private async validateRegister(registerRequest: RegisterRequest) {
    if (this.memberRepository.findByUsername(registerRequest.username))
      throw new BadRequestException("이미 사용중인 아이디입니다.");

    if (await this.memberRepository.findByNickname(registerRequest.nickname))
      throw new BadRequestException("이미 사용중인 닉네임입니다.");

    if (!registerRequest.isValidPassword())
      throw new BadRequestException("비밀번호가 서로 일치하지 않습니다.");
  }
}
