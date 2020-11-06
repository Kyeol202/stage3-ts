import RoleInClub from "../../../TravelClub/ui/logic/model/RoleInClub";
import TravelClub from "../../../TravelClub/ui/logic/model/TravelClub";
import CommunityMember from "./CommunityMember";

class ClubMembership {
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

    static fromObjects(club: TravelClub, member: CommunityMember) {
        //

        return new ClubMembership(club.getUsid(), member.getEmail());
    }


    static fromString(clubId: string, memberEmail: string) {
        //
        return new ClubMembership(clubId, memberEmail);
    }

    static getSample = (club: TravelClub, member: CommunityMember) => {
        //
        const membership = ClubMembership.fromObjects(club, member);
        membership.setRole(RoleInClub.Member);
        return membership
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
        return this.joinDate;
    }

    setJoinDate = (joinDate: Date) => {
        //
        this.joinDate = joinDate
    }

    getClubId = () => {
        //
        return this.clubId;
    }

    getMemberEmail = () => {
        //
        return this.memberEmail
    }





}
export default ClubMembership;