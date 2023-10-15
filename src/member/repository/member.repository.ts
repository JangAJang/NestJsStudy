import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Member } from "../entity/member";
import { Repository } from "typeorm";

@Injectable()
export class MemberRepository {

    constructor(
        @InjectRepository(Member) private memberRepository: Repository<Member>,
    ){}

    async save(member:Member) {
        await this.memberRepository.save(member);
    }

    async findById(id:number) :Promise<Member> {
        return await this.memberRepository.findOneBy({id: id});
    }

    async findByUsername(username:string) :Promise<Member> {
        return await this.memberRepository.findOneBy({username: username});
    }

    async findByNickname(nickname:string) :Promise<Member> {
        return await this.memberRepository.findOneBy({nickname: nickname});
    }
}