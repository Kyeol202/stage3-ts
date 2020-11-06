import { read } from "fs";
import CommunityMember from "../../../../Member/ui/model/CommunityMember";
import Entity from "./Entity";
import SocialBoard from "./SocialBoard";

class Posting extends Entity {
    //
    usid: string = "";
    title: string = "";
    writerEmail: string = "";
    contents: string = "";
    writtenDate: Date;
    boardId: string = "";

    constructor(board: SocialBoard, title: string, writerEmail: string, contents: string) {
        //
        super();
        this.usid = board.nextPostingId();
        this.boardId = board.getId();
        this.title = title;
        this.writerEmail = writerEmail;
        this.contents = contents;
        this.writtenDate = new Date();
    }

    static fromReadCount = () => {
        //
        const readCount: number = 0;
        return readCount;
    }

    static formString = (postingId: string, boardId: string, title: string,
        writerEmail: string, contents: string): Posting => {
        //
        const staticPostingId = postingId;
        const staticBoardId = boardId;
        const staltcTitle = title;
        const staticWriterEmail = writerEmail;
        const staticContents = contents;
        const formString = Posting.formString(staticPostingId, staticBoardId, staltcTitle, staticWriterEmail, staticContents);
        return formString
    }


    static getSamples = (board: SocialBoard) => {
        //
        const postings: Posting[] = [];
        let postingUsid = board.nextPostingId();
        const leader = CommunityMember.getSample();
        const leaderPosting = new Posting(board, "The club intro", leader.getEmail(), "Hello, it's good to see you.");
        leaderPosting.setUsid(postingUsid);
        postings.push(leaderPosting);

        postingUsid = board.nextPostingId();
        const member = CommunityMember.getSample();
        const memberPosting = new Posting(board, "self intro", member.getEmail(), "Hello, My name is minsoo.");
        memberPosting.setUsid(postingUsid);
        postings.push(memberPosting);

        return postings;
    }

    getId = () => {
        //
        return this.usid
    }

    getUsid = () => {
        //
        return this.usid
    }

    setUsid = (usid: string) => {
        //
        this.usid = usid
    }

    getTitle = () => {
        //
        return this.title
    }

    setTitpe = (title: string) => {
        //
        this.title = title
    }

    getWriterEmail = () => {
        //
        return this.writerEmail
    }

    setWriterEmail = (writerEmail: string) => {
        //
        this.writerEmail = writerEmail
    }

    getReadCount = () => {
        //
        return Posting.fromReadCount();
    }

    getContents = () => {
        //
        return this.contents
    }

    setContents = (contents: string) => {
        //
        this.contents = contents
    }

    getWrittenDate = () => {
        //
        return this.writtenDate
    }

    setWrittenDate = (writtenDate: Date) => {
        //
        this.writtenDate = writtenDate
    }

    getBoardId = () => {
        //
        return this.boardId
    }

    setBoardId = (boardId: string) => {
        //
        this.boardId = boardId
    }



}
export default Posting;