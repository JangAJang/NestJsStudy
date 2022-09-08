import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BoardsModule, UserModule, AuthModule],
})
export class AppModule {}
