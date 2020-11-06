import ClubMembershipDto from "../../../Member/present/model/ClubMembershipDto";
import TravelClubDto from "../model/TravelClubDto";

abstract class TravelClubService {
    //
    abstract registerClub(club: TravelClubDto): void;
    abstract findClub(clubId: string): TravelClubDto;
    abstract findClubByName(name: string): TravelClubDto;
    abstract modify(club: TravelClubDto): void;
    abstract remove(clubId: string): void;


    abstract addMembership(membershipDto: ClubMembershipDto): void;
    abstract findMembershipIn(clubId: string, memberId: string): ClubMembershipDto;
    abstract findAllMembershipsIn(clubId: string): Array<ClubMembershipDto>;
    abstract modifyMembership(clubId: string, member: ClubMembershipDto): void;
    abstract removeMembership(clubId: string, memberId: string): void;

}
export default TravelClubService;