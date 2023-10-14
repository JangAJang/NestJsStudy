"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRequest = void 0;
class RegisterRequest {
    isValidPassword() {
        console.log(this.password);
        console.log(this.passwordCheck);
        return this.password === this.passwordCheck;
    }
}
exports.RegisterRequest = RegisterRequest;
//# sourceMappingURL=registerRequest.js.map