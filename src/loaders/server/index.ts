import {
  getServerById,
  getServerByMemeberIdAndServerId,
  getServerByMemeberIdAndServerIdWithMember,
  getServerListByUserId,
} from "@/db/server";
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

export async function getServerForUserWithMemberRole(serverId: string) {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("User not found");
    }
    const serverWithRole = await getServerByMemeberIdAndServerIdWithMember(
      user.id,
      serverId,
    );

    const role = serverWithRole?.members[0]?.role;

    if (!role || !serverWithRole) {
      throw new Error("Role not found");
    }

    return { server: serverWithRole, role };
  } catch (error) {
    console.log(["GET SERVER ERROR getServerWithMemberRole", error]);
    return null;
  }
}

export type ServerWithRole = NonNullable<
  Awaited<ReturnType<typeof getServerForUserWithMemberRole>>
>;

export async function getServerForUser(serverId: string) {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("User not found");
    }

    const server = await getServerByMemeberIdAndServerId(user.id, serverId);
    return server;
  } catch (error) {
    console.log(["GET SERVER ERROR", error]);
    return null;
  }
}

export type UserServer = NonNullable<
  Awaited<ReturnType<typeof getServerForUser>>
>;
