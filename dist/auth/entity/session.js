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
var Session_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const typeorm_1 = require("typeorm");
const member_1 = require("./member");
let Session = Session_1 = class Session {
    constructor(id, expiresAt, member) {
        this.id = id;
        this.expiresAt = expiresAt;
        this.member = member;
    }
    static byMember(member) {
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 1);
        return new Session_1(undefined, expiresAt, member);
    }
};
exports.Session = Session;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Session.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Session.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => member_1.Member),
    __metadata("design:type", member_1.Member)
], Session.prototype, "member", void 0);
exports.Session = Session = Session_1 = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Number, Date, member_1.Member])
], Session);
//# sourceMappingURL=session.js.map