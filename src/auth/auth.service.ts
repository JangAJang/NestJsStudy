import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    public async register(registerRequest: RegisterRequest) {
        if(validateRegister(registerRequest)) {
            return undefined;
        }

        throw new Error("회원가입 에러");
    }
}

const validateRegister = (registerRequest:RegisterRequest) => {
    return registerRequest.password === registerRequest.passwordCheck;
}
