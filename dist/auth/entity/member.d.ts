export declare class Member {
    private readonly id;
    private readonly username;
    private readonly nickname;
    private readonly password;
    constructor(id: number, username: string, nickname: string, password: string);
    static from(registerRequest: RegisterRequest): Member;
    static of(username: string, nickname: string, password: string): Member;
}
