import NextAuth from "next-auth";
import authConfig from "@/auth/auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isProtected = nextUrl.pathname === "/";

  if (!isLoggedIn && isProtected) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }
  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
