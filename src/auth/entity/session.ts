import { Member } from "src/member/entity/member";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expiresAt: Date;

  @ManyToOne(() => Member)
  member: Member;

  constructor(id: number, expiresAt: Date, member: Member) {
    this.id = id;
    this.expiresAt = expiresAt;
    this.member = member;
  }

  static byMember(member: Member) {
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);
    return new Session(undefined, expiresAt, member);
  }
}
