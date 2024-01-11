import { v4 as uuidv4 } from "uuid";
import { db } from "@/db";

export const generateResetPasswordToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getResetTokenByEmail(email);

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const resetPasswordToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return resetPasswordToken;
};

export async function getResetPasswordTokenByToken(token: string) {
  try {
    const resetPasswordToken = await db.passwordResetToken.findUnique({
      where: { token },
    });

    if (!resetPasswordToken) {
      throw new Error("Token not found!");
    }

    return resetPasswordToken;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getResetTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.passwordResetToken.findFirst({
      where: { email },
    });

    return verificationToken;
  } catch {
    return null;
  }
};
