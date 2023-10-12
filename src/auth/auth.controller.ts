import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}


    @Post('register')
    public async register(@Body() registerRequest: RegisterRequest) {
        try{
            await this.authService.register(registerRequest);
            return  { message: '회원가입이 성공했습니다.' };
        }catch(e) {
            return { message: '회원가입 에러', error: e.message };
        }
    }
}
