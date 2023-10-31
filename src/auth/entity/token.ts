import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Token {
  @PrimaryColumn()
  private readonly refreshToken: string;

  @Column()
  private accessToken: string;

  isAccessTokenExpired() {
    return false;
  }

  isRefreshTokenExpired() {
    return false;
  }

  reissue(newToken: string) {
    this.accessToken = newToken;
  }

  getAccessToken() {
    return this.accessToken;
  }

  getRefreshToken() {
    return this.refreshToken;
  }
}