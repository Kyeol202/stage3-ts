import Posting from "../../ui/logic/model/Posting";
import SocialBoard from "../../ui/logic/model/SocialBoard";

class PostingDto {

    usid: string = "";
    title: string = "";
    writerEmail: string = "";
    contents: string = "";
    writtenDate: Date;
    static readCount: number = 0;
    boardId: string = "";

    constructor(title: string, writerEmail: string, contents: string) {
        this.title = title;
        this.writerEmail = writerEmail;
        this.contents = contents
        this.writtenDate = new Date();
    }

    static objectDto = (posting: Posting): any => {
        PostingDto.prototype.usid = posting.getUsid();
        PostingDto.prototype.title = posting.getTitle();
        PostingDto.prototype.writerEmail = posting.getWriterEmail();
        PostingDto.prototype.contents = posting.getContents();
        PostingDto.prototype.writtenDate = posting.getWrittenDate();
        PostingDto.readCount = Posting.readCount;
        return PostingDto.objectDto(posting);
    }

    toPostingObject = (board: SocialBoard) => {
        let posting: Posting = new Posting(board, this.title, this.writerEmail, this.contents);
        posting.setWrittenDate(this.writtenDate);
        posting.setReadCount(PostingDto.readCount);
    }

    static toPostingString = (postingId: string, boardId: string) => {
        let posting = Posting.formString(postingId, boardId, PostingDto.prototype.title, 
            PostingDto.prototype.writerEmail, PostingDto.prototype.contents);
        return posting;
    }

    getUsid = () => {
        return this.usid
    }

    setUsid = (usid: string) => {
        this.usid = usid
    }

    getTitle = () => {
        return this.title
    }

    setTitpe = (title: string) => {
        this.title = title
    }

    getWriterEmail = () => {
        return this.writerEmail
    }

    setWriterEmail = (writerEmail: string) => {
        this.writerEmail = writerEmail
    }

    getReadCount = () => {
        return PostingDto.readCount;
    }

    setReadCount = (readcount: number) => {
        PostingDto.readCount = readcount
    }

    getContents = () => {
        return this.contents
    }

    setContents = (contents: string) => {
        this.contents = contents
    }

    getWrittenDate = () => {
        return this.writtenDate
    }

    setWrittenDate = (writtenDate: Date) => {
        this.writtenDate = writtenDate
    }



}
export default PostingDto;