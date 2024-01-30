"use server";
import { currentUser } from "@/lib/auth";
import { createServerFormSchema } from "@/schemas/serverSchema";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createServerDB, updateServerInviteCode } from "@/db/server";
import { createMemberProfile } from "@/db/member";

export async function createServer(
  values: z.infer<typeof createServerFormSchema>,
) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }
  const { name, imageUrl } = values;
  try {
    const server = await createServerDB(name, imageUrl, user.id);
    revalidatePath(`/servers`, "layout");
    return { success: "Server created successfully", serverId: server.id };
  } catch (error) {
    console.log("CREATE SERVER ERROR", error);
    return { error: "Error creating server" };
  }
}

export async function joinServer(serverId: string) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  try {
    const memberProfile = await createMemberProfile(user.id, serverId);
    revalidatePath(`/servers/${memberProfile.serverId}`);
    return true;
  } catch (error) {
    console.log("Join server error joinServer", error);
    return false;
  }
}

export async function getNewInviteCode(serverId: string) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  try {
    const server = await updateServerInviteCode(serverId);
    return server;
  } catch (error) {
    console.log("getNewInviteCode error", error);
    return null;
  }
}
