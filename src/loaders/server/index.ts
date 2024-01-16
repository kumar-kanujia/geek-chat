import { db } from "@/db";
import { currentUser } from "@/lib/auth";

export async function getServerList() {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("User not found");
    }

    const servers = await db.server.findMany({
      where: {
        ownerId: user.id,
      },
      select: {
        id: true,
        name: true,
        imageUrl: true,
      },
    });
    return servers;
  } catch (error) {
    console.log(["GET ALL SERVER ERROR", error]);
    return [];
  }
}

export type ServerList = Awaited<ReturnType<typeof getServerList>>;
