import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import authConfig from "@/auth/auth.config";
import { apiAuthPrefix } from "@/auth/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

  if (isApiAuthRoute) {
    return null;
  }

  const isProtected = nextUrl.pathname === "/";

  if (!isLoggedIn && isProtected) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }
  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
