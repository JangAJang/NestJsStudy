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
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const session_1 = require("./entity/session");
const member_1 = require("../member/entity/member");
let AuthService = class AuthService {
    constructor(memberRepository, sessionRepository) {
        this.memberRepository = memberRepository;
        this.sessionRepository = sessionRepository;
    }
    async register(registerRequest) {
        await this.validateRegister(registerRequest);
        registerRequest.password = await bcrypt.hash(registerRequest.password, parseInt(process.env.SALT, 10));
        await this.memberRepository.save(member_1.Member.from(registerRequest));
    }
    async signIn(signInRequest) {
        const foundMember = await this.memberRepository.findOneBy({
            username: signInRequest.username,
        });
        if (await bcrypt.compare(signInRequest.password, foundMember.password)) {
            const session = await this.sessionRepository.save(session_1.Session.byMember(foundMember));
            return session.id;
        }
        throw new common_1.BadRequestException("로그인에 실패했습니다. 아이디와 비밀번호를 다시 확인해주세요.");
    }
    async logout(sessionId) {
        const foundSession = await this.sessionRepository.findOneBy({
            id: sessionId,
        });
        if (!foundSession)
            throw new common_1.UnauthorizedException("로그인 후 이용해주세요.");
        const membersSessions = await this.sessionRepository
            .createQueryBuilder("session")
            .leftJoinAndSelect("session.member", "member")
            .getMany();
        await this.sessionRepository.remove(membersSessions);
    }
    async validateRegister(registerRequest) {
        if (await this.memberRepository.findOneBy({
            username: registerRequest.username,
        })) {
            throw new common_1.BadRequestException("이미 사용중인 아이디입니다.");
        }
        if (await this.memberRepository.findOneBy({
            username: registerRequest.username,
        }))
            throw new common_1.BadRequestException("이미 사용중인 닉네임입니다.");
        if (!registerRequest.isValidPassword())
            throw new common_1.BadRequestException("비밀번호가 서로 일치하지 않습니다.");
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(member_1.Member)),
    __param(1, (0, typeorm_1.InjectRepository)(session_1.Session)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map