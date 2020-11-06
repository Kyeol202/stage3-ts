import TravelClub from "../../ui/logic/model/TravelClub";

abstract class ClubStore {

    abstract create(club: TravelClub): string;
    abstract retrieve(clubId: string): TravelClub;
    abstract retrieveByName(name: string): TravelClub;
    abstract update(club: TravelClub): void;
    abstract delete(clubId: string): void;

    abstract exists(clubId: string): boolean;

}
export default ClubStore