import { BadRequestException, Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { Member } from "src/member/entity/member";
import { RegisterRequest } from "./dto/registerRequest";
import { MemberRepository } from "../member/repository/member.repository";
import { JwtService } from "@nestjs/jwt";
import { AuthValidator } from "./util/auth.validator";
import { Payload } from "./jwt/payload.interface";
import { Token } from "./entity/token";
import { TokenRepository } from "./repository/token.repository";

const accessTokenExpiresIn = "1h"; // 1 시간
const refreshTokenExpiresIn = "7d"; // 7 일

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private authValidator: AuthValidator,
    private memberRepository: MemberRepository,
    private tokenRepository: TokenRepository
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
      const payload: Payload = {
        id: foundMember.id,
        username: foundMember.username,
      };

      return {
        access_token: await this.createToken(payload),
      };
    }
    throw new BadRequestException(
      "로그인에 실패했습니다. 아이디와 비밀번호를 다시 확인해주세요."
    );
  }

  public async logout(accessToken: string): Promise<void> {
    // JWT로 수정
  }

  private async createToken(payload: Payload) {
    const accessToken = await this.signToken(payload, accessTokenExpiresIn);
    const refreshToken = await this.signToken(payload, refreshTokenExpiresIn);
    const token = new Token(refreshToken, accessToken);
    this.tokenRepository.save(token);
    return accessToken;
  }

  private async signToken(payload: Payload, expiresIn: string) {
    return await this.jwtService.signAsync(payload, {
      expiresIn: expiresIn,
    });
  }
}
