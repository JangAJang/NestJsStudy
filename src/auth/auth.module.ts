import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { Session } from "./entity/session";
import { Member } from "src/member/entity/member";

@Module({
  imports: [TypeOrmModule.forFeature([Member, Session])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
