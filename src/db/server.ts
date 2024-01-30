import { MemberRole } from "@prisma/client";
import { db } from ".";
import { v4 as uuidv4 } from "uuid";

export async function createServerDB(
  serverName: string,
  imageUrl: string,
  userId: string,
) {
  const server = await db.server.create({
    data: {
      name: serverName,
      ownerId: userId,
      imageUrl: imageUrl,
      inviteCode: uuidv4(),
      members: {
        create: {
          userId: userId,
          role: MemberRole.ADMIN,
        },
      },
    },
  });
  return server;
}

export async function updateServerDB(
  serverId: string,
  serverName: string,
  imageUrl: string,
) {
  const server = await db.server.update({
    where: {
      id: serverId,
    },
    data: {
      name: serverName,
      imageUrl: imageUrl,
    },
  });
  return server;
}

export async function getServerListForUser(userId: string) {
  const serverList = await db.server.findMany({
    where: {
      members: {
        some: {
          userId,
        },
      },
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
    include: {
      members: {
        where: {
          userId,
        },
      },
    },
  });
  return server;
}

export async function updateServerInviteCode(serverId: string) {
  const server = await db.server.update({
    where: {
      id: serverId,
    },
    data: {
      inviteCode: uuidv4(),
    },
  });
  return server;
}
