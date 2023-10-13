import { Session } from "src/auth/entity/session";
export declare class Member {
    readonly id: number;
    readonly username: string;
    readonly nickname: string;
    readonly password: string;
    readonly sessions: Session[];
    constructor(id: number, username: string, nickname: string, password: string);
    isRightPassword(password: string): boolean;
    static from(registerRequest: RegisterRequest): Member;
    static of(username: string, nickname: string, password: string): Member;
}
