import type { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [Github({}), Google({})],
} satisfies NextAuthConfig;

export default authConfig;
