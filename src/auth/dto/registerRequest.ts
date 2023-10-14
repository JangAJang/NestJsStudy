export class RegisterRequest {
  username: string;
  nickname: string;
  password: string;
  passwordCheck: string;

  constructor(
    username: string,
    nickname: string,
    password: string,
    passwordCheck: string
  ) {
    this.username = username;
    this.nickname = nickname;
    this.password = password;
    this.passwordCheck = passwordCheck;
  }

  isValidPassword() {
    return this.password === this.passwordCheck;
  }
}
