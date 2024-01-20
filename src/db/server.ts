import { db } from ".";
import { v4 as uuidv4 } from "uuid";

export async function getServerListByUserId(userId: string) {
  const serverList = await db.server.findMany({
    where: {
      ownerId: userId,
    },
    select: {
      id: true,
      name: true,
      imageUrl: true,
    },
  });
  return serverList;
}

export async function getServerByMemberId(serverId: string, memberId: string) {
  const server = await db.server.findFirst({
    where: {
      id: serverId,
      members: {
        some: {
          userId: memberId,
        },
      },
    },
    include: {
      members: {
        where: {
          userId: memberId,
        },
        take: 1,
      },
    },
  });
  return server;
}

export async function getServerDetailsByInviteCode(
  inviteCode: string,
  userId: string,
) {
  const server = await db.server.findUnique({
    where: {
      inviteCode,
    },
    select: {
      name: true,
      members: {
        where: {
          userId,
        },
      },
    },
  });
  return server;
}
