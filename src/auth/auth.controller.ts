import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";
import { RegisterRequest } from "./dto/registerRequest";
import { LocalAuthenticationGuard } from "./localAuthentication.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  public async register(@Body() registerRequest: RegisterRequest) {
    try {
      await this.authService.register(registerRequest);
      return { message: "회원가입이 성공했습니다." };
    } catch (e) {
      return { error: e.message };
    }
  }

  @Post("signIn")
  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  public async signIn(
    @Body() signInRequest: SignInRequest,
    @Res() response: Response
  ) {
    try {
      response.cookie("tester", await this.authService.signIn(signInRequest), {
        httpOnly: true,
      });
      response.send({ message: "로그인에 성공했습니다." });
      return;
    } catch (e) {
      return { error: e.message };
    }
  }

  @Post("logout")
  public async logout(@Req() request: Request) {
    try {
      const [cookieName, cookieValue] = request.headers.cookie.split("=");
      await this.authService.logout(Number(cookieValue));
    } catch (e) {
      return { error: e.message };
    }
  }
}
