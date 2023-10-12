"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const member_1 = require("./entity/member");
const typeorm_2 = require("typeorm");
let AuthService = class AuthService {
    constructor(memberRepository) {
        this.memberRepository = memberRepository;
    }
    async register(registerRequest) {
        await this.validateRegister(registerRequest);
        await this.memberRepository.save(member_1.Member.from(registerRequest));
    }
    async validateRegister(registerRequest) {
        if (await this.memberRepository.findOneBy({ username: registerRequest.username })) {
            throw new Error("이미 사용중인 아이디입니다.");
        }
        if (await this.memberRepository.findOneBy({ username: registerRequest.username }))
            throw new Error("이미 사용중인 닉네임입니다.");
        if (!validatePassword(registerRequest))
            throw new Error("비밀번호가 서로 일치하지 않습니다.");
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(member_1.Member)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthService);
const validatePassword = (registerRequest) => {
    return registerRequest.password === registerRequest.passwordCheck;
};
//# sourceMappingURL=auth.service.js.map