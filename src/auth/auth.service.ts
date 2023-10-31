import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { Member } from "src/member/entity/member";
import { RegisterRequest } from "./dto/registerRequest";
import { MemberRepository } from "../member/repository/member.repository";
import { JwtService } from "@nestjs/jwt";
import { AuthValidator } from "./util/auth.validator";

@Injectable()
export class AuthService {
  constructor(
    private memberRepository: MemberRepository,
    private jwtService: JwtService,
    private authValidator: AuthValidator
  ) {}

  public async register(registerRequest: RegisterRequest): Promise<void> {
    await this.authValidator.validateRegister(registerRequest);
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

    if (
      this.authValidator.isRightPassword(foundMember, signInRequest.password)
    ) {
      const payload = { sub: foundMember.id, username: foundMember.username };

      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
    throw new BadRequestException(
      "로그인에 실패했습니다. 아이디와 비밀번호를 다시 확인해주세요."
    );
  }

  public async logout(sessionId: number): Promise<void> {
    // JWT로 수정
  }
}
