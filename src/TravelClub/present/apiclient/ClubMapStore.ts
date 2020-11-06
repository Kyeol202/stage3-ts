import MemoryMap from "../../../StoreMap/MemoryMap";
import TravelClub from "../../ui/logic/model/TravelClub";
import ClubStore from "./ClubStore";
import AutoIdEntity from "../../ui/logic/model/AutoIdEntity";
import { String } from "typescript-string-operations";

class ClubMapStore extends ClubStore {
    //
    clubMap: Map<string, TravelClub>;
    autoIdMap: Map<string, number>;

    constructor() {
        //
        super();
        this.clubMap = MemoryMap.getInstance().getClubMap();
        this.autoIdMap = MemoryMap.getInstance().getAutoIdMap();
    }

    create = (club: TravelClub) => {
        //
        const id = this.clubMap?.get(club.getId());
        if (club instanceof AutoIdEntity) {
            const className: string = TravelClub.name;
            if (this.autoIdMap.get(className) === null) {
                this.autoIdMap.set(className, 1);
            }
            let keySequence: number = this.autoIdMap.get(className)!;
            const autoId: string = String.Format("%05d", keySequence);
            club.setAutoId(autoId);
            this.autoIdMap.set(className, ++keySequence);
        }

        this.clubMap.set(club.getId(), club);

        return club.getId();
    }

    retrieve = (clubId: string) => {
        //
        return this.clubMap.get(clubId)!;
    }

    retrieveByName = (name: string) => {
        //
        
    }


}
export default ClubMapStore;