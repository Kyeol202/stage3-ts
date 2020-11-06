import MemberMapStore from "../../../Member/present/apiclient/MemberMapStore";
import MemberStore from "../../../Member/present/apiclient/MemberStore";
import ClubStoreLycler from "./ClubStoreLycler";

class ClubStoreMapLycler extends ClubStoreLycler {

    static lycler: ClubStoreMapLycler;

    constructor() {
        //
        super();
    }


    static getInstance = () => {
        if (ClubStoreMapLycler.lycler === null) {
            ClubStoreMapLycler.lycler = new ClubStoreMapLycler();
        }
        return ClubStoreMapLycler.lycler;
    }

    requestMemberStore(): MemberStore {
        return new MemberMapStore();
    }


}
export default ClubStoreMapLycler;