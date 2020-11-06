import SocialBoard from "../../ui/logic/model/SocialBoard";

class BoardDto {

    clubId:string = "";
    name:string = "";
    adminEmail:string = "";
    createDate:Date;

    constructor(clubId:string, name:string, adminEmail:string) {
    this.clubId = clubId;
    this.name = name;
    this.adminEmail = adminEmail;
    this.createDate = new Date();
    }

    static ojectDto = (socialBoard : SocialBoard) : any => {
    if(socialBoard == null){
        return;
    }
    BoardDto.prototype.clubId = socialBoard.getClubId();
    BoardDto.prototype.name = socialBoard.getName();
    BoardDto.prototype.adminEmail = socialBoard.getAdminEmail();
    BoardDto.prototype.createDate = socialBoard.getCreateDate();
    const objectDto = BoardDto.ojectDto(socialBoard);
    return objectDto;
    }

    toBoard = () => {
    let socialBoard : SocialBoard = new SocialBoard(this.clubId, this.name, this.adminEmail);    
    socialBoard.setCreateDate(this.createDate);
    return socialBoard;
    }

    getId = () => {
   return this.clubId     
    }
    getClubId = () => {
    return this.clubId    
    }

    setClubId = (clubId : string) => {
    this.clubId = clubId    
    }

    getName = () => {
        return this.name
    }

    setName = (name : string) => {
     this.name = name   
    }

    getAdminEmail = () => {
        return this.adminEmail
    }

    setAdminEmail = (adminEmail : string) => {
        this.adminEmail = adminEmail
    }

    getCreateDate = () => {
    return this.createDate
    }

    setCreateDate = (createDate : Date) => {
     this.createDate = createDate   
    }
    



}
export default BoardDto