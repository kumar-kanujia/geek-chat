import { getServerByMemberId, getServerListByUserId } from "@/db/server";
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

export type ServerList = Awaited<ReturnType<typeof getServerList>>;

export async function getServerForUser(serverId: string) {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("User not found");
    }
    const server = await getServerByMemberId(serverId, user.id);
    return server;
  } catch (error) {
    console.log(["GET SERVER ERROR", error]);
    return null;
  }
}

export type UserServer = NonNullable<
  Awaited<ReturnType<typeof getServerForUser>>
>;
