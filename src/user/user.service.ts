import { Injectable, MethodNotAllowedException } from '@nestjs/common';
import { RegisterRequestDto } from './dto/RegisterRequestDto';
import { Status, User } from './user.model';
import {v1 as uuid} from 'uuid';

@Injectable()
export class UserService {

    private users:User[] = [];

    getAllUsers():User[]{
        return this.users
    }

    createUser(RegisterRequestDto:RegisterRequestDto) : User{
        if(RegisterRequestDto.password === RegisterRequestDto.passwordCheck 
            || this.users.findIndex((User) => User.username ===RegisterRequestDto.username)<0){
            const register:User = {
                id: uuid,
                username : RegisterRequestDto.username,
                password : RegisterRequestDto.password,
                role : Status.USER,
                email : RegisterRequestDto.email,
                
            }
            this.users.push(register);
            return register;
        }
        else throw new MethodNotAllowedException();
    }

    findUser(id:string) : User{
        return this.users.find((User)=> User.id === id);
    }

    findUserByUsername(username:string) : User{
        const user:User = this.users.find((User)=> User.username === username);
        return user;
    }

    findUserByEmail(email:string) : User{
        const user:User = this.users.find((User)=> User.username === email);
        return user;
    }
}
