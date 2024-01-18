import { db } from ".";

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

export async function getServerById(serverId: string) {
  const server = await db.server.findUnique({
    where: {
      id: serverId,
    },
    select: {
      id: true,
      name: true,
      imageUrl: true,
    },
  });
  return server;
}
