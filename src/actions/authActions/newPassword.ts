"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";
import { NewPasswordSchema } from "@/schemas/authSchema";
import { getResetPasswordTokenByToken } from "@/db/passwordResetToken";
import { getUserByEmail } from "@/db/user";
import { db } from "@/db";

export async function changePassword(
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) {
  if (!token) {
    return { error: "Missing Token!" };
  }

  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Password!" };
  }

  const { password } = validatedFields.data;

  const existingToken = await getResetPasswordTokenByToken(token);

  if (!existingToken) {
    return { error: "Invalid Token!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const user = await getUserByEmail(existingToken.email);

  if (!user) {
    return { error: "Email does not exist!" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { id: user.id },
    data: { password: hashedPassword },
  });

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Password Updated!" };
}
