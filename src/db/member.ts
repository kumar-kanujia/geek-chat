import { MemberRole } from "@prisma/client";
import { db } from ".";

export async function createMemberProfile(userId: string, serverId: string) {
  const memberProfile = await db.memberProfile.create({
    data: {
      userId,
      serverId,
      role: MemberRole.GUEST,
    },
  });
  return memberProfile;
}
