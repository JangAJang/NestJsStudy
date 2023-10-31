import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { AuthValidator } from "./util/auth.validator";

@Injectable()
export class LocalAuthenticationGuard extends PassportStrategy(Strategy) {
  constructor(private authValidator: AuthValidator) {
    super();
  }

  async validate(username: string, password: string) {
    const user = await this.authValidator.validateMember(username, password);
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }
    return user;
  }
}
