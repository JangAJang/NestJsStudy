import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { Session } from "./entity/session";
import { Member } from "src/member/entity/member";
import { MemberRepository } from "src/member/repository/member.repository";
import { SessionRepository } from "./repository/session.repository";
import { PassportModule } from "@nestjs/passport";
import { LocalAuthenticationGuard } from "./localAuthentication.guard";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    TypeOrmModule.forFeature([Member, Session]),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get("JWT_SECRET"),
        signOptions: {
          expiresIn: `${configService.get("JWT_EXPIRATION_TIME")}s`,
        },
      }),
    }),
  ],
  providers: [
    AuthService,
    LocalAuthenticationGuard,
    MemberRepository,
    SessionRepository,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
