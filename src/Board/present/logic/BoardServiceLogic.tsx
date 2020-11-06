import MapStorage from "../../../StoreMap/MapStorage";
import ClubStore from "../../../TravelClub/present/apiclient/ClubStore";
import BoardStore from "../apiclient/BoardStore";
import BoardService from "./BoardService";

class BoardServiceLogic extends BoardService {
    //
    boardStore : BoardStore;
    clubStroe : ClubStore;

    constructor() { 
        //
        super();
        this.boardStore = MapStorage.getInstance().getBoardMap();
        this.clubStroe = MapStorage.getInstance().getClubMap();
}









}
export default BoardServiceLogic;
