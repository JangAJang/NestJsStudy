import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    entities: [],
    synchronize: true,
  }),],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
