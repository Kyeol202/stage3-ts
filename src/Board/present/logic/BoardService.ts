import BoardDto from "../model/BoardDto";

abstract class BoardService {
    //
    abstract register(board : BoardDto) : string;
    abstract find(boardId : string) : BoardDto;
    abstract findByName(boardName : string) : Array<BoardDto>;
    abstract findByClubName(clubName : string) : BoardDto;
    abstract modify(board : BoardDto) : void;
    abstract remove(boardId : string) : void;



}
export default BoardService