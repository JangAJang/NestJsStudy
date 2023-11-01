import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Token } from "../entity/token";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TokenRepository {
  constructor(
    @InjectRepository(Token) private tokenRepository: Repository<Token>
  ) {}

  public async findByAccessToken(accessToken: string): Promise<Token> {
    return await this.tokenRepository.findOneBy({ accessToken: accessToken });
  }

  public async deleteToken(token: Token) {
    await this.tokenRepository.remove(token);
  }

  public async save(token: Token) {
    await this.tokenRepository.save(token);
  }
}
