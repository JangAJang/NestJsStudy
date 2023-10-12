import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entity/member';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(Member) private memberRepository:Repository<Member>){}

    public async register(registerRequest: RegisterRequest):Promise<any> {
        await this.validateRegister(registerRequest)
        await this.memberRepository.save(Member.from(registerRequest));
    }

    public async signIn(signInRequest: SignInRequest):Promise<any> {
        const foundMember = await this.memberRepository.findOneBy({username:signInRequest.username});

        if(foundMember.isRightPassword(signInRequest.password)) {
            return;
        }

        throw new Error("로그인에 실패했습니다. 아이디와 비밀번호를 다시 확인해주세요.");
    }

    private async validateRegister(registerRequest: RegisterRequest) {
        if(await this.memberRepository.findOneBy({username:registerRequest.username})) {
            throw new Error("이미 사용중인 아이디입니다.")
        }
        
        if(await this.memberRepository.findOneBy({username:registerRequest.username}))
            throw new Error("이미 사용중인 닉네임입니다.");

        if(!validatePassword(registerRequest))
            throw new Error("비밀번호가 서로 일치하지 않습니다.");
    }
}

const validatePassword = (registerRequest:RegisterRequest) => {
    return registerRequest.password === registerRequest.passwordCheck;
}
