export class Auth{
    id:string;
    username:string;
    password:string;
    name:string;
    email:string;
    role:Role
}

export enum Role{
    USER = 'ROLE_USER',
    MANAGER = 'ROLE_MANAGER',
    ADMIN = 'ROLE_ADMIN',
}