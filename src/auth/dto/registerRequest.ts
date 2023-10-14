export class RegisterRequest {
  username: string;
  nickname: string;
  password: string;
  passwordCheck: string;

  isValidPassword() {
    return this.password === this.passwordCheck;
  }
}
