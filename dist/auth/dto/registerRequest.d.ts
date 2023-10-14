export declare class RegisterRequest {
    username: string;
    nickname: string;
    password: string;
    passwordCheck: string;
    constructor(username: string, nickname: string, password: string, passwordCheck: string);
    isValidPassword(): boolean;
}
