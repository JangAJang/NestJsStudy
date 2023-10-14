import { Repository } from "typeorm";
import { Session } from "./entity/session";
import { Member } from "src/member/entity/member";
import { RegisterRequest } from "./dto/registerRequest";
export declare class AuthService {
    private memberRepository;
    private sessionRepository;
    constructor(memberRepository: Repository<Member>, sessionRepository: Repository<Session>);
    register(registerRequest: RegisterRequest): Promise<void>;
    signIn(signInRequest: SignInRequest): Promise<any>;
    logout(sessionId: number): Promise<void>;
    private validateRegister;
}
