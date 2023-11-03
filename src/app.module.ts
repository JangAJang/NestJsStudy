import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { Member } from "./member/entity/member";
import { JwtModule } from "@nestjs/jwt";
import { Token } from "./auth/entity/token";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      entities: [Member, Token],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    JwtModule.register({
      secret: "SECRET_KEY",
      signOptions: { expiresIn: "300s" },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
