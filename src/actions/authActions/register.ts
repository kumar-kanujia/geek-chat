"use server";
import { createUser, getUserByEmail } from "@/db/user";
import { RegisterSchema } from "@/schemas/authSchema";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { sendVerificationEmail } from "@/lib/mail";
import {
  generateVerificationToken,
  getVerificationTokenByToken,
} from "@/db/verificationToken";
import { db } from "@/db";

export default async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { email, name, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = await createUser({ name, email, password: hashedPassword });

  if (!user) {
    return { error: "Server Error" };
  }

  const verificationToken = await generateVerificationToken(email);
  sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Verification Email has been sent please verify!" };
}

export async function newVerification(token: string) {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Invalid token" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const user = await getUserByEmail(existingToken.email);

  if (!user) {
    return { error: "User with the email not found" };
  }

  await db.user.update({
    where: { id: user.id },
    data: { emailVerified: new Date(), email: existingToken.email },
  });

  await db.verificationToken.delete({ where: { id: existingToken.id } });

  return { success: "Email verified" };
}
