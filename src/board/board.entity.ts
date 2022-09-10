import { User } from "src/user/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({name:'board'})
@Unique(['board_id'])
export class Board extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({ type:'varchar', length : 100, comment : 'username'})
    title:string;

    @Column({ type:'varchar', length : 300, comment : 'username'})
    content:string;

    @JoinColumn([User])
    
}
