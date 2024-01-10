"use server";
import { z } from "zod";

import { LoginSchema } from "@/schemas/authSchema";
import { getUserByEmail } from "@/db/user";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/auth/routes";
import { AuthError } from "next-auth";

export default async function login(
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null
) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "User does not exist!" };
  }

  //TODO: have to work on email verification

  // if (!existingUser.emailVerified) {
  //   const verificationToken = await generateVerificationToken(
  //     existingUser.email
  //   );

  //   await sendVerificationEmail(
  //     verificationToken.email,
  //     verificationToken.token
  //   );
  //   return { error: "Please verify your email." };
  // }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
}
