import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { JwtModule } from "@nestjs/jwt";
import "dotenv/config";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { MemberModule } from './member/member.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/nest"),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
      }),
    }),
    MemberModule,
    TeamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
