import { MemberProfile } from "@prisma/client";
import { create } from "zustand";

type memberProfileStore = {
  memberProfile: MemberProfile | null;
  setMemberProfile: (memberProfile: MemberProfile) => void;
};

const memberProfileContext = create<memberProfileStore>((set) => ({
  memberProfile: null,
  setMemberProfile: (memberProfile: MemberProfile) => set({ memberProfile }),
}));

export default memberProfileContext;
