import CommunityMember from "../../ui/model/CommunityMember";

abstract class MemberStore {
    //
    abstract create(member: CommunityMember): string;
    abstract retrieve(email: string): CommunityMember;
    abstract retrieveByName(name: string): Array<CommunityMember>;
    abstract update(member: CommunityMember): void;
    abstract delete(email: string): void;

    abstract exists(email: string): boolean;

}
export default MemberStore