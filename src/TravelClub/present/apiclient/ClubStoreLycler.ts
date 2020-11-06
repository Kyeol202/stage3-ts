import BoardStore from "../../../Board/present/apiclient/BoardStore";
import PostingStore from "../../../Board/present/apiclient/PostingStore";
import MemberMapStore from "../../../Member/present/apiclient/MemberMapStore";
import MemberStore from "../../../Member/present/apiclient/MemberStore";
import ClubStore from "./ClubStore";

abstract class ClubStoreLycler {

    abstract requestMemberStore(): MemberStore;
    abstract requestClubStore(): ClubStore;
    abstract requestBoardStore(): BoardStore;
    abstract requestPostingStore(): PostingStore;


}
export default ClubStoreLycler;