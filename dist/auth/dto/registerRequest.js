"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRequest = void 0;
class RegisterRequest {
    constructor(username, nickname, password, passwordCheck) {
        this.username = username;
        this.nickname = nickname;
        this.password = password;
        this.passwordCheck = passwordCheck;
    }
    isValidPassword() {
        return this.password === this.passwordCheck;
    }
}
exports.RegisterRequest = RegisterRequest;
//# sourceMappingURL=registerRequest.js.map