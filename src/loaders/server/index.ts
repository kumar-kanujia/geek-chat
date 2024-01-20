import {
  getServerByMemberId,
  getServerDetailsByInviteCode,
  getServerListForUser,
} from "@/db/server";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function getServerList() {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("User not found");
    }

    const servers = await getServerListForUser(user.id);
    return servers;
  } catch (error) {
    console.log("GET ALL SERVER ERROR", error);
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
    console.log("GET SERVER ERROR", error);
    return null;
  }
}

export type UserServer = NonNullable<
  Awaited<ReturnType<typeof getServerForUser>>
>;

export async function getServerDetailsForInviteCode(inviteCode: string) {
  const user = await currentUser();

  if (!user) {
    redirect("/login");
  }

  const server = await getServerDetailsByInviteCode(inviteCode, user.id);

  if (!server) {
    redirect("/servers/not-found");
  }

  if (server.members.length > 0) {
    return {
      serverId: server.id,
      serverName: server.name,
      imageUrl: server.imageUrl,
      isMember: true,
    };
  }

  return {
    serverId: server.id,
    serverName: server.name,
    imageUrl: server.imageUrl,
    isMember: false,
  };
}

export type JoinServer = NonNullable<
  Awaited<ReturnType<typeof getServerDetailsForInviteCode>>
>;
