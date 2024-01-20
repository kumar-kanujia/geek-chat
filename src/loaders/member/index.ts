import { getMemberProfile } from "@/db/member";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function getMemberProfileByServerId(serverId: string) {
  const user = await currentUser();

  if (!user) {
    redirect("/login");
  }

  try {
    const memberProfile = await getMemberProfile(user.id, serverId);
    return memberProfile;
  } catch (error) {
    console.log("GET MEMBER PROFILE ERROR", error);
    return null;
  }
}
