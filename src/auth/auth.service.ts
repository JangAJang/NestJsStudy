import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { Session } from "./entity/session";
import { Member } from "src/member/entity/member";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Member) private memberRepository: Repository<Member>,
    @InjectRepository(Session) private sessionRepository: Repository<Session>
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
    const foundMember = await this.memberRepository.findOneBy({
      username: signInRequest.username,
    });

    if (await bcrypt.compare(signInRequest.password, foundMember.password)) {
      const session = await this.sessionRepository.save(
        Session.byMember(foundMember)
      );
      return session.id;
    }

    throw new BadRequestException(
      "로그인에 실패했습니다. 아이디와 비밀번호를 다시 확인해주세요."
    );
  }

  public async logout(sessionId: number): Promise<void> {
    const foundSession = await this.sessionRepository.findOneBy({
      id: sessionId,
    });

    if (!foundSession)
      throw new UnauthorizedException("로그인 후 이용해주세요.");

    const membersSessions = await this.sessionRepository
      .createQueryBuilder("session")
      .leftJoinAndSelect("session.member", "member")
      .getMany();
    await this.sessionRepository.remove(membersSessions);
  }

  private async validateRegister(registerRequest: RegisterRequest) {
    if (
      await this.memberRepository.findOneBy({
        username: registerRequest.username,
      })
    ) {
      throw new BadRequestException("이미 사용중인 아이디입니다.");
    }

    if (
      await this.memberRepository.findOneBy({
        username: registerRequest.username,
      })
    )
      throw new BadRequestException("이미 사용중인 닉네임입니다.");

    if (!validatePassword(registerRequest))
      throw new BadRequestException("비밀번호가 서로 일치하지 않습니다.");
  }
}

const validatePassword = (registerRequest: RegisterRequest) => {
  return registerRequest.password === registerRequest.passwordCheck;
};
