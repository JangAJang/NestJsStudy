import { Request } from "express";
import { Member } from "src/member/entity/member";

interface RequestWithMember extends Request {
  member: Member;
}

export default RequestWithMember;
