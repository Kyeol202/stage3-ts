import ClubStoreMapLycler from "../../../TravelClub/present/apiclient/ClubStoreMapLycler";
import MyError from "../../../util/MyError";
import CommunityMember from "../../ui/model/CommunityMember";
import MemberStore from "../apiclient/MemberStore"
import MemberDto from "../model/MemberDto";
import MemberService from "./MemberService";
import { Stream } from "ts-stream"
import MapStorage from "../../../StoreMap/MapStorage";
import ClubMembership from "../../ui/model/ClubMembership";
import ClubMembershipDto from "../model/ClubMembershipDto";
import StringUtil from "../../../util/StringUtil";

class MemberServiceLogic extends MemberService {
    //
    memberStore: MemberStore;

    constructor() {
        //
        super();
        this.memberStore = ClubStoreMapLycler.getInstance().requestMemberStore();
    }

    register = (newMemberDto: MemberDto) => {
        //
        const email: string = newMemberDto.getEmail();
        const result = this.memberStore?.retrieve(email);
        this.memberStore.create(newMemberDto.toMember());


    }

    find = (memberEmail: string) => {
        //
        const memberDto = this.memberStore?.retrieve(memberEmail);
        const memberDtoArray = CommunityMember.fromMemberList().map(membership => {
            const member = MemberDto.fromObjectDto(memberDto);
            return member;
        })
        const result = memberDtoArray.find(element => element.email === memberEmail)!;
        return result;

    }

    findByName = (memberName: string) => {
        //
        const members: Array<CommunityMember> = this.memberStore?.retrieveByName(memberName);
        if (members.length === 0) {
            MyError
        }
        const name = members.map(member => MemberDto.fromObjectDto(member));
        return name;
    }

    modify = (memberDto: MemberDto) => {
        //
        const targetMember = this.memberStore?.retrieve(memberDto.getEmail());
        if (StringUtil.isEmpty(memberDto.getName())) {
            memberDto.setName(targetMember.getName());
        }
        if (StringUtil.isEmpty(memberDto.getNickName())) {
            memberDto.setNickName(targetMember.getNickName());
        }
        if (StringUtil.isEmpty(memberDto.getPhoneNumber())) {
            memberDto.setPhoneNumber(targetMember.getPhoneNumber())
        }
        if (StringUtil.isEmpty(memberDto.getBirthDay())) {
            memberDto.setBirthDay(targetMember.getBirthDay());
        }
        this.memberStore.update(memberDto.toMember());
    }

    remove = (memberId: string) => {
        //
        if (!this.memberStore.exists(memberId)) {
            MyError
        }
        this.memberStore.delete(memberId);
    }

}
export default MemberServiceLogic