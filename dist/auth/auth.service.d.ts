import { Member } from "./entity/member";
import { Repository } from "typeorm";
import { Session } from "./entity/session";
export declare class AuthService {
    private memberRepository;
    private sessionRepository;
    constructor(memberRepository: Repository<Member>, sessionRepository: Repository<Session>);
    register(registerRequest: RegisterRequest): Promise<void>;
    signIn(signInRequest: SignInRequest): Promise<any>;
    private validateRegister;
}
