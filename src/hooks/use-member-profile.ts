import memberProfileContext from "@/context/memberProfileContext";

export default function useMemberProfile() {
  const { memberProfile } = memberProfileContext();
  return memberProfile;
}
