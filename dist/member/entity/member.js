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
var Member_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const session_1 = require("../../auth/entity/session");
const typeorm_1 = require("typeorm");
let Member = Member_1 = class Member {
    constructor(id, username, nickname, password) {
        this.id = id;
        this.username = username;
        this.nickname = nickname;
        this.password = password;
    }
    isRightPassword(password) {
        return this.password === password;
    }
    static from(registerRequest) {
        return Member_1.of(registerRequest.username, registerRequest.nickname, registerRequest.password);
    }
    static of(username, nickname, password) {
        return new Member_1(undefined, username, nickname, password);
    }
};
exports.Member = Member;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Member.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Member.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Member.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Member.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => session_1.Session, (session) => session.member),
    __metadata("design:type", Array)
], Member.prototype, "sessions", void 0);
exports.Member = Member = Member_1 = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Number, String, String, String])
], Member);
//# sourceMappingURL=member.js.map