import Entity from "../../../Board/ui/logic/model/Entity";
import Address from "./Address";
import ClubMembership from "./ClubMembership";

class CommunityMember extends Entity {
    //
    email: string = "";
    name: string = "";
    nickName: string = "";
    phoneNumber: string = "";
    birthDay: string = "";


    constructor(email: string, name: string, phoneNumber: string) {
        //
        super();
        this.email = email;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    static fromMemberList = () => {
        //
        return new Array<ClubMembership>();
    }

    static fromAddressList = () => {
        //
        return new Array<Address>();
    }

    // static from(email: string, name: string, phoneNumber: string) {
    //     //
    //     return new CommunityMember(email, name, phoneNumber);
    // }

    // static fromEmail(email: string) {
    //     //
    //     return new CommunityMember(email, "admin", "000-0000-0000");
    // }

    static getSample = () => {
        //
        let member: CommunityMember;
        member = new CommunityMember("mymy@nextree.co.kr", "Minsoo Lee", "010-3321-1001");
        member.setBirthDay("2001.09.23");
        member.getAddress().push(Address.getHomeAddressSample())
        return member;
    }


    getId = () => {
        //
        return this.email;
    }

    getMembershipList = () => {
        //
        return CommunityMember.fromMemberList();
    }

    getEmail = () => {
        //
        return this.email
    }

    setEmail = (eamil: string) => {
        //
        this.email = eamil;
    }

    getName = () => {
        //
        return this.name;
    }

    setName = (name: string) => {
        //
        this.name = name
    }

    getNickName = () => {
        //
        return this.nickName
    }

    getAddress = () => {
        //
        return CommunityMember.fromAddressList();
    }

    setNickName = (nickname: string) => {
        //
        this.nickName = nickname;
    }

    getPhoneNumber = () => {
        //
        return this.phoneNumber
    }

    setPhoneNumber = (phoneNumber: string) => {
        //
        this.phoneNumber = phoneNumber
    }

    getBirthDay = () => {
        //
        return this.birthDay
    }

    setBirthDay = (birthDay: string) => {
        //
        this.birthDay = birthDay
    }




}
export default CommunityMember;