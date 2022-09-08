export class User{
    id:string;
    title:string;
    password:string;
    role: ROLE; 
    email: string;


}

export enum ROLE{
    USER = "ROLE_USER",
    MANAGER = "ROLE_MANAGER",
    ADMIN = "ROLE_ADMIN",
}