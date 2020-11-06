import ClubMembershipDto from "../../../Member/present/model/ClubMembershipDto";
import ClubMembership from "../../../Member/ui/model/ClubMembership";
import TravelClub from "../../ui/logic/model/TravelClub";

class TravelClubDto {
    //
    usid: string = "";
    name: string = "";
    intro: string = "";
    foundationDay: Date;

    static fromList = () => {
        //
        return new Array<ClubMembershipDto>();
    }

    constructor(name: string, intro: string) {
        //
        this.name = name;
        this.intro = intro;
        this.foundationDay = new Date();
    }

    static fromObjectDto = (club: TravelClub) => {
        //
        const travelClubDto = new TravelClub(club.getUsid(), club.getIntro());
        travelClubDto.usid = club.usid;
        travelClubDto.name = club.name;
        travelClubDto.intro = club.intro;
        travelClubDto.foundationDay = club.foundationDay;

        club.getMembershipList().map(membership => {
            const membershipDto = ClubMembershipDto.fromObjectDto(membership);
        })
        return travelClubDto;
    }

    toTravelClub = () => {
        //
        let travelClub: TravelClub = new TravelClub(this.name, this.intro);
        travelClub.setUsid(this.usid);
        travelClub.setFoundationDay(this.foundationDay);
        let membershipDto: ClubMembershipDto
        travelClub.getMembershipList().forEach(element => {
            travelClub.getMembershipList().push(membershipDto.toMembership());
        });
        return travelClub;
    }

    getUsid = () => {
        //
        return this.usid
    }

    setUsid = (usid: string) => {
        //
        this.usid = usid;
    }

    getName = () => {
        //
        return this.name
    }

    getIntro = () => {
        //
        return this.intro
    }

    getFoundationDay = () => {
        //
        return this.foundationDay
    }
    setFoundationDay = (foundationDay: Date) => {
        //
        this.foundationDay = foundationDay;
    }

    getMembershipList = () => {
        //
        return TravelClubDto.fromList();
    }

}
export default TravelClubDto;