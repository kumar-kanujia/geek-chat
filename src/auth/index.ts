import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";

import { db } from "@/db";
import authConfig from "./auth.config";
import { getUserById } from "@/db/user";
import { getAccountByUserId } from "@/db/account";

export const {
  auth,
  signIn,
  signOut,
  update,
  handlers: { GET, POST },
} = NextAuth({
  events: {
    linkAccount: async ({ user }) => {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") {
        return true;
      }

      const exsitingUser = await getUserById(user.id);

      if (!exsitingUser?.emailVerified) {
        return false;
      }

      return true;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const exsitingUser = await getUserById(token.sub);
      if (!exsitingUser) return token;

      const existingAccount = await getAccountByUserId(exsitingUser.id);

      token.isOAuth = !!existingAccount;
      token.name = exsitingUser.name;
      token.email = exsitingUser.email;
      return token;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.isOAuth = token.isOAuth as boolean;
      }

      return session;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
