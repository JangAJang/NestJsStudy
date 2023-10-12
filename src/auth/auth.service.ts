import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entity/member';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(Member) private memberRepository:Repository<Member>){}

    public async register(registerRequest: RegisterRequest):Promise<any> {
        if(validateRegister(registerRequest)) {
            this.memberRepository.save(Member.from(registerRequest));
            return;
        }

        throw new Error("회원가입 에러");
    }
}

const validateRegister = (registerRequest:RegisterRequest) => {
    return registerRequest.password === registerRequest.passwordCheck;
}
