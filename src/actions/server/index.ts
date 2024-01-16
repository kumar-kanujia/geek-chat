"use server";
import { db } from "@/db";
import { v4 as uuidv4 } from "uuid";
import { currentUser } from "@/lib/auth";
import { createServerFormSchema } from "@/schemas/serverSchema";
import { z } from "zod";
export async function createServer(
  values: z.infer<typeof createServerFormSchema>
) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }
  try {
    const server = await db.server.create({
      data: {
        ownerId: user.id,
        name: values.name,
        imageUrl: values.imageUrl,
        inviteCode: uuidv4(),
      },
    });
    return { success: "Server created successfully", serverId: server.id };
  } catch (error) {
    console.log(["CREATE SERVER ERROR", error]);
    return { error: "Error creating server" };
  }
}
