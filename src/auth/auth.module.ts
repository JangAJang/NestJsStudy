import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { Session } from "./entity/session";
import { Member } from "src/member/entity/member";
import { MemberRepository } from "src/member/repository/member.repository";
import { SessionRepository } from "./repository/session.repository";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";

@Module({
  imports: [TypeOrmModule.forFeature([Member, Session]), PassportModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController, MemberRepository, SessionRepository],
})
export class AuthModule {}
