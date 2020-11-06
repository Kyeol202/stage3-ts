import { String } from "typescript-string-operations";
import CommunityMember from "../../../../Member/ui/model/CommunityMember";
import TravelClub from "../../../../TravelClub/ui/logic/model/TravelClub";
import Entity from "./Entity";

class SocialBoard extends Entity {
    //
    clubId: string = "";
    name: string = "";
    adminEmail: string = "";
    createDate: Date;

    static fromSequence = () => {
        //
        let sequence: number = 0;
        return sequence;
    }

    constructor(clubId: string, name: string, adminEmail: string) {
        //
        super();
        this.clubId = clubId;
        this.name = name;
        this.adminEmail = adminEmail;
        this.createDate = new Date();
    }

    static getSample = (club: TravelClub) => {
        //
        const member = CommunityMember.getSample();
        const board = new SocialBoard(club.getUsid(),
            "Board for " + club.getName(),
            member.getEmail()
        );
        board.setCreateDate(new Date("2016.07.02"));
        return board;
    }

    getId = () => {
        //
        return this.clubId;
    }

    nextPostingId = () => {
        //
        let sequence = SocialBoard.fromSequence();
        return String.Format("%s:%05d", this.clubId, sequence++)
    }

    getClubId = () => {
        //
        return this.clubId
    }

    setClubId = (clubId: string) => {
        //
        this.clubId = clubId
    }

    getName = () => {
        //
        return this.name
    }

    setName = (name: string) => {
        //
        this.name = name;
    }

    getCreateDate = () => {
        //
        return this.createDate
    }

    setCreateDate = (createDate: Date) => {
        //
        this.createDate = createDate
    }

    getAdminEmail = () => {
        //
        return this.adminEmail
    }

    setAdminEmail = (adminEmail: string) => {
        //
        this.adminEmail = adminEmail;
    }


}
export default SocialBoard;