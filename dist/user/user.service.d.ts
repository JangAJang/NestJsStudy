import { RegisterRequestDto } from './dto/RegisterRequestDto';
import { User } from './user.model';
export declare class UserService {
    private users;
    getAllUsers(): User[];
    createUser(RegisterRequestDto: RegisterRequestDto): User;
    findUser(id: string): User;
    findUserByUsername(username: string): User;
    findUserByEmail(email: string): User;
}
