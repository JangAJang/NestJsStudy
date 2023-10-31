import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Token {
  constructor(refreshToken: string, accessToken: string) {
    this.refreshToken = refreshToken;
    this.accessToken = accessToken;
  }

  @PrimaryColumn()
  readonly refreshToken: string;

  @Column()
  accessToken: string;

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
