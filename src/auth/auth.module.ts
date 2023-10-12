import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Member } from "./entity/member";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { Session } from "./entity/session";

@Module({
  imports: [TypeOrmModule.forFeature([Member, Session])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
