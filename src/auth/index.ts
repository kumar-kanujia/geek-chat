import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";

import { db } from "@/db";
import authConfig from "./auth.config";

export const {
  auth,
  signIn,
  signOut,
  update,
  handlers: { GET, POST },
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
