import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({name: 'user'})
@Unique(['user_id'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type:'varchar', length : 50, comment : 'username'})
    username:string;

    @Column({ type:'varchar', length : 255, comment : 'username'})
    password:string;

    @Column({ type:'varchar', length : 20, comment : 'role'})
    role:string;

    @Column({ type:'varchar', length : 50, comment : 'real name'})
    real_name:string;

    @Column({ type:'tinyint', length : 20, comment : 'age'})
    age:number;

    @CreateDateColumn({name : 'register_at', comment : 'register date'})
    registerAt:Date;

    @CreateDateColumn({name : 'login_at', comment : 'login date'})
    loginAt:Date;
}