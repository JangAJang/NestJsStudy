import { Member } from "./member";
export declare class Session {
    id: number;
    expiresAt: Date;
    member: Member;
    constructor(id: number, expiresAt: Date, member: Member);
    static byMember(member: Member): Session;
}
