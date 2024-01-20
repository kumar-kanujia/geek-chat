"use client";

import memberProfileContext from "@/context/memberProfileContext";
import { MemberProfile } from "@prisma/client";
import { FC, ReactNode, useEffect } from "react";

type MemberProfileProviderProps = {
  children: ReactNode;
  memberProfile: MemberProfile;
};

const MemberProfileProvider: FC<MemberProfileProviderProps> = ({
  children,
  memberProfile,
}) => {
  const { setMemberProfile } = memberProfileContext();
  useEffect(() => {
    setMemberProfile(memberProfile);
  }, [memberProfile, setMemberProfile]);
  return <>{children}</>;
};
export default MemberProfileProvider;
