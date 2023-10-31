import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Token } from "../entity/token";

@Injectable()
export class TokenRepository {
  constructor(private tokenRepository: Repository<Token>) {}
}
