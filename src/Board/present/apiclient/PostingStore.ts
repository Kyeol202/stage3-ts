import Posting from "../../ui/logic/model/Posting";

abstract class PostingStore {
    //
    abstract create(posting : Posting) : string;
    abstract retrieve(postingId : String) : Posting;
    abstract retrieveByName(boardId : string) : Array<Posting>;
    abstract retrieveByTitle(title : string) : Array<Posting>;
    abstract update(postring : Posting) : void;
    abstract delete(postingId : string) : void;
    abstract exists(postingId : string) : boolean;


}
export default PostingStore;