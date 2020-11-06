import MyError from "../../../util/MyError";
import MemberDto from "../model/MemberDto";

abstract class MemberService {
    //
    abstract register(member: MemberDto): void;
    abstract find(memberId: string): MemberDto | MyError;
    abstract findByName(memberName: string): Array<MemberDto>;
    abstract modify(member: MemberDto): void;
    abstract remove(memberId: string): void



}
export default MemberService