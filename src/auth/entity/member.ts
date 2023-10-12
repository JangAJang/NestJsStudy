import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Member {

    @PrimaryGeneratedColumn()
    private readonly id:number;

    @Column()
    private readonly username:string;

    @Column()
    private readonly nickname:string;

    @Column()
    private readonly password:string;

    constructor(id:number, username:string, nickname:string, password:string) {
        this.id = id;
        this.username = username;
        this.nickname = nickname;
        this.password = password;
    }

    static of(username:string, nickname:string, password:string) {
        return new Member(undefined, username, nickname, password);
    }
}