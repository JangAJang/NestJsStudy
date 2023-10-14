import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { Repository } from "typeorm";
import { Member } from "src/member/entity/member";
import { RegisterRequest } from "./dto/registerRequest";

describe("AuthService", () => {
  let service: AuthService;
  let repository: Repository<Member>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, Repository<Member>],
    }).compile();

    service = module.get<AuthService>(AuthService);
    repository = module.get<Repository<Member>>(Repository<Member>);
  });

  it("회원가입시 존재하지 않는 아이디, 닉네임과 서로 같은 비밀번호, 확인을 입력하면 성공한다.", async () => {
    jest
      .spyOn(repository, "save")
      .mockResolvedValue(Member.of("tester", "tester", "tester"));
    expect(await service.register(testRegisterRequest())).not.toThrowError();
  });
});

const testRegisterRequest = () =>
  new RegisterRequest("tester", "tester", "tester", "tester");
