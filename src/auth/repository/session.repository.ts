import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Session } from "../entity/session";
import { Repository } from "typeorm";

@Injectable()
export class SessionRepository {
    constructor(
        @InjectRepository(Session) private sessionRepository:Repository<Session>
    ){}

    async save(session:Session): Promise<Session> {
        return await this.sessionRepository.save(session);
    }

    async findById(id:number): Promise<Session> {
        return await this.sessionRepository.findOneBy({id:id});
    }

    async findSessionsWithSameMember(sessionId:number): Promise<Session[]> {
        return await this.sessionRepository
        .createQueryBuilder("session")
        .leftJoinAndSelect("session.member", "member")
        .getMany();
    }

    async remove(sessions: Session[]) {
        await this.sessionRepository.remove(sessions);
    }
}