export class CreateMemberRequest {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordCheck: string;

  constructor(
    username: string,
    firstName: string,
    lastName: string,
    password: string,
    passwordCheck: string
  ) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.passwordCheck = passwordCheck;
  }
}
