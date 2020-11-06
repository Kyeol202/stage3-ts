import { emit } from "process";
import Address from "../../ui/model/Address";
import ClubMembership from "../../ui/model/ClubMembership";
import CommunityMember from "../../ui/model/CommunityMember";
import ClubMembershipDto from "./ClubMembershipDto";

class MemberDto {
    //
    email: string = "";
    name: string = "";
    nickName: string = "";
    phoneNumber: string = "";
    birthDay: string = "";

    // addresses: Array<Address> = new Array<Address>();
    static fromAddresses = () => {
        //
        return new Array<Address>()
    }

    // clubMembershipDtoList: Array<ClubMembershipDto> = new Array<ClubMembershipDto>()
    static fromClubMembershipDtoList = () => {
        //
        return new Array<ClubMembershipDto>();
    }

    constructor(email: string, name: string, phoneNumber: string) {
        this.email = email;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    static fromObjectDto = (member: CommunityMember) => {
        //
        const memberDto = new MemberDto(member.email, member.name, member.phoneNumber);

        memberDto.nickName = member.nickName;
        memberDto.birthDay = member.birthDay;
        let address = MemberDto.fromAddresses();
        address = [...member.getAddress()];

        member.getMembershipList().map(membership => {
            const membershipDto = ClubMembershipDto.fromObjectDto(membership);
        })


        return memberDto;
    }

    toMember = () => {
        //
        const member: CommunityMember = new CommunityMember(this.email, this.name, this.phoneNumber);
        member.setNickName(this.nickName);
        member.setBirthDay(this.birthDay);
       
        MemberDto.fromAddresses().map(address => {
            const addresses = member.getAddress().push(address);
        })

        MemberDto.fromClubMembershipDtoList().map(membershipList => {
            const address = member.getMembershipList().push(membershipList);
        })
        return member;
    }

    getAddresses = () => {
        //
        return MemberDto.fromAddresses();
    }

    getMembershipList = () => {
        //
        return MemberDto.fromClubMembershipDtoList();
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
export default MemberDto;