import { Optional } from "typescript-optional";
import MemoryMap from "../../../StoreMap/MemoryMap";
import CommunityMember from "../../ui/model/CommunityMember";
import MemberStore from "./MemberStore";
import { Stream } from "ts-stream";

class MemberMapStore extends MemberStore {
    //
    memberMap: Map<string, CommunityMember>;

    constructor() {
        //
        super();
        this.memberMap = MemoryMap.getInstance().getMemberMap();
    }

    create = (member: CommunityMember) => {
        //
        this.memberMap.set(member.getId(), member);
        return member.getId();
    }

    retrieve = (memberId: string) => {
        //
        return this.memberMap.get(memberId);

    }

    retrieveByName = (name: string) => {
        //
        return this.memberMap.
    }

    update = () => {
        //
    }

    delete = () => {
        //
    }

    exists = (memberId: string) => {
        //
        return Optional.ofNullable(this.memberMap.get(memberId)).isPresent();
    }



}
export default MemberMapStore;