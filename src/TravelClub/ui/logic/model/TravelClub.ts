import ClubMembership from "../../../../Member/ui/model/ClubMembership";
import AutoIdEntity from "./AutoIdEntity";
import { String } from "typescript-string-operations";

class TravelClub extends AutoIdEntity {
    //
    static MINIMUM_NAME_LENGTH: number = 3;
    static MINIMUM_INTRO_LENGTH: number = 10;
    static ID_FORMAT: string = "%05d";

    usid: string = "";
    name: string = "";
    intro: string = "";
    foundationDay: Date;
    boardId: string = "";


    static fromList = () => {
        //
        return new Array<ClubMembership>();
    }

    constructor(name: string, intro: string) {
        //
        super();
        this.name = name;
        this.intro = intro;
        this.foundationDay = new Date();
    }


    static getSample = (keyIncluded: boolean) => {
        //
        const name: string = "JavaTravelClub";
        const intro: string = "Travel club to the Java island.";
        const club = new TravelClub(name, intro);

        if (keyIncluded) {
            const sequence: number = 21;
            club.setAutoId(String.Format(TravelClub.ID_FORMAT, sequence));
        }
        return club;
    }



    getId = () => {
        //
        return this.usid;
    }

    getIdFormat = () => {
        //
        return TravelClub.ID_FORMAT;
    }

    setAutoId = (autoId: string) => {
        //
        this.usid = autoId;
    }

    getMembershipBy = (email: string) => {
        //
        if (email === null || email.length === 0) {
            return null;
        }
        TravelClub.fromList().map(clubMembership => {
            if (email === clubMembership.getMemberEmail()) {
                return clubMembership;
            }
        })
        return null
    }

    getMembershipList = () => {
        //
        return TravelClub.fromList();
    }

    getUsid = () => {
        //
        return this.usid;
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

    getBoardId = () => {
        //
        return this.boardId
    }

    setBoardId = (boardId: string) => {
        //
        this.boardId = boardId
    }

    setName = (name: string) => {
        //
        if (name.length < TravelClub.MINIMUM_NAME_LENGTH) {
            alert('XXXX')
        }
        this.name = name
    }

    setIntro = (intro: string) => {
        //
        if (intro.length < TravelClub.MINIMUM_INTRO_LENGTH) {
            alert('OOOO')
        }
        this.intro = intro
    }

    setFoundationDay = (foundationDay: Date) => {
        //
        this.foundationDay = foundationDay;
    }


}
export default TravelClub