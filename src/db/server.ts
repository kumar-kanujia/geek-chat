import { MemberRole } from "@prisma/client";
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

export async function getServerByMemeberIdAndServerIdWithMember(
  userId: string,
  serverId: string,
) {
  const server = await db.server.findFirst({
    where: {
      id: serverId,
      members: {
        some: {
          userId: userId,
        },
      },
    },
    include: {
      members: {
        where: {
          userId,
        },
        take: 1,
      },
    },
  });
  return server;
}

export async function getServerByMemeberIdAndServerId(
  userId: string,
  serverId: string,
) {
  const server = await db.server.findFirst({
    where: {
      id: serverId,
      members: {
        some: {
          userId: userId,
        },
      },
    },
  });
  return server;
}

export async function getServerById(serverId: string) {
  const server = await db.server.findUnique({
    where: {
      id: serverId,
    },
  });
  return server;
}

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
