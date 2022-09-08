export declare class User {
    id: string;
    username: string;
    password: string;
    role: Status;
    email: string;
}
export declare enum Status {
    USER = "ROLE_USER",
    MANAGER = "ROLE_MANAGER",
    ADMIN = "ROLE_ADMIN"
}
