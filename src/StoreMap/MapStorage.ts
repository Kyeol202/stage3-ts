import Posting from "../Board/ui/logic/model/Posting";
import SocialBoard from "../Board/ui/logic/model/SocialBoard";
import CommunityMember from "../Member/ui/model/CommunityMember";
import TravelClub from "../TravelClub/ui/logic/model/TravelClub";

class MapStorage {
    //
    static singletonMap : MapStorage;

    memberMap: Map<string, CommunityMember>;
    clubMap: Map<string, TravelClub>;
    boardMap: Map<string, SocialBoard>;
    postingMap: Map<string, Posting>;
    autoIdMap: Map<string, number>;

    constructor() {
        //
        this.memberMap = new Map();
        this.clubMap = new Map();
        this.boardMap = new Map();
        this.postingMap = new Map();
        this.autoIdMap = new Map();
    }

    static getInstance = () => {
        //
        if(MapStorage.singletonMap === null) {
            MapStorage.singletonMap = new MapStorage();
        }
        return MapStorage.singletonMap;
    }

    getAutoIdMap = () => {
        //
        return this.autoIdMap;
    }

    getMemberMap = () => {
        //
        return this.memberMap;
    }

    getClubMap = () => {
        //
        return this.clubMap;
    }

    getBoardMap = () => {
        //
        return this.boardMap;
    }

    getPostingMap = () => {
        //
        return this.postingMap;
    }

}
export default MapStorage;