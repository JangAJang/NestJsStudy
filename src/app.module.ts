import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth';
import { Auth } from './auth';

@Module({
  imports: [BoardsModule, AuthModule],
  providers: [Auth],
})
export class AppModule {}
