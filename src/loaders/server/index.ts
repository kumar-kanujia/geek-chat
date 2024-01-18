import { getServerById, getServerListByUserId } from "@/db/server";
import { currentUser } from "@/lib/auth";

export async function getServerList() {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("User not found");
    }

    const servers = await getServerListByUserId(user.id);
    return servers;
  } catch (error) {
    console.log(["GET ALL SERVER ERROR", error]);
    return [];
  }
}

export async function getServer(serverId: string) {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("User not found");
    }

    const server = await getServerById(serverId);
    return server;
  } catch (error) {
    console.log(["GET SERVER ERROR", error]);
    return null;
  }
}

export type ServerList = Awaited<ReturnType<typeof getServerList>>;
