"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./user.model");
const uuid_1 = require("uuid");
let UserService = class UserService {
    constructor() {
        this.users = [];
    }
    getAllUsers() {
        return this.users;
    }
    createUser(RegisterRequestDto) {
        if (RegisterRequestDto.password === RegisterRequestDto.passwordCheck
            || this.users.findIndex((User) => User.username === RegisterRequestDto.username) < 0) {
            const register = {
                id: uuid_1.v1,
                username: RegisterRequestDto.username,
                password: RegisterRequestDto.password,
                role: user_model_1.Status.USER,
                email: RegisterRequestDto.email,
            };
            this.users.push(register);
            return register;
        }
        else
            throw new common_1.MethodNotAllowedException();
    }
    findUser(id) {
        return this.users.find((User) => User.id === id);
    }
    findUserByUsername(username) {
        const user = this.users.find((User) => User.username === username);
        return user;
    }
    findUserByEmail(email) {
        const user = this.users.find((User) => User.username === email);
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map