import { Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Strategy } from "passport";
import { PassportStrategy } from "@nestjs/passport";
import { Member } from "src/member/entity/member";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: "username",
    });
  }
  async validate(username: string, password: string): Promise<Member> {
    return this.authService.signIn({ username: username, password: password });
  }
}
