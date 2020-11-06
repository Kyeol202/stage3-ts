import TravelClubDto from "../../../TravelClub/present/model/TravelClubDto";
import RoleInClub from "../../../TravelClub/ui/logic/model/RoleInClub";
import ClubMembership from "../../ui/model/ClubMembership";
import MemberDto from "./MemberDto";

class ClubMembershipDto {
    //
    clubId: string = "";
    memberEmail: string = "";
    role: RoleInClub;
    joinDate: Date;

    constructor(clubId: string, memberEmail: string) {
        //
        this.clubId = clubId;
        this.memberEmail = memberEmail;
        this.role = RoleInClub.Member;
        this.joinDate = new Date();
    }

    static fromObjectDto = (membership: ClubMembership) : ClubMembershipDto => {
        //
        const clubMembershipDto = new ClubMembershipDto(membership.clubId, membership.memberEmail);
        const role = membership.getRole();
        const joinDate = membership.getJoinDate();
        const  fromObjectDto = ClubMembershipDto.fromObjectDto(membership);
        return fromObjectDto;
    }

    toMembership = () => {
        //
        const membership = new ClubMembership(this.clubId, this.memberEmail);
        membership.setRole(this.role);
        membership.setJoinDate(this.joinDate);
        return membership;
    }

    getClubId = () => {
        //
        return this.clubId
    }

    setClubId = (clubId: string) => {
        //
        this.clubId = clubId
    }

    getMemberEmail = () => {
        //
        return this.memberEmail
    }

    setMemberEmail = (memberEmail: string) => {
        //
        this.memberEmail = memberEmail
    }

    getRole = () => {
        //
        return this.role
    }

    setRole = (role: RoleInClub) => {
        //
        this.role = role
    }

    getJoinDate = () => {
        //
        return this.joinDate
    }

    setJoinDate = (joinDate: Date) => {
        //
        this.joinDate = joinDate
    }



}
export default ClubMembershipDto