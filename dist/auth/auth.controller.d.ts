import { AuthService } from "./auth.service";
import { Response } from "express";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerRequest: RegisterRequest): Promise<{
        message: string;
        error?: undefined;
    } | {
        error: any;
        message?: undefined;
    }>;
    signIn(signInRequest: SignInRequest, response: Response): Promise<{
        error: any;
    }>;
}
