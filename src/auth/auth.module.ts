import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { Session } from "./entity/session";
import { Member } from "src/member/entity/member";
import { MemberRepository } from "src/member/repository/member.repository";
import { SessionRepository } from "./repository/session.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Member, Session])],
  providers: [AuthService],
  controllers: [AuthController, MemberRepository, SessionRepository],
})
export class AuthModule {}
