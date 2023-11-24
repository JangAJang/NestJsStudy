import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { Member } from "src/member/entity/member";
import { MemberRepository } from "src/member/repository/member.repository";
import { PassportModule } from "@nestjs/passport";
import { LocalAuthenticationGuard } from "./util/localAuthentication.guard";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthValidator } from "./util/auth.validator";
import { TokenRepository } from "./repository/token.repository";
import { Token } from "./entity/token";
import "dotenv/config";

//이거 하나 바꾼다고 테스트하냐?
@Module({
  imports: [
    TypeOrmModule.forFeature([Member, Token]),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
      }),
    }),
  ],
  providers: [
    AuthService,
    LocalAuthenticationGuard,
    MemberRepository,
    TokenRepository,
    AuthValidator,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
