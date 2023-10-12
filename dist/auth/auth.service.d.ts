import { Member } from './entity/member';
import { Repository } from 'typeorm';
export declare class AuthService {
    private memberRepository;
    constructor(memberRepository: Repository<Member>);
    register(registerRequest: RegisterRequest): Promise<any>;
}
