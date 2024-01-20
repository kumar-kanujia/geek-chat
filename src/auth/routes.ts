/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/";

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The prefix for Uploadthing API routes
 * @type {string}
 */
export const uploadthingApiPrefix: string = "/api/uploadthing";

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/login",
  "/register",
  "/auth/error",
  "/reset",
  "/new-password",
  "/new-verification",
];

/**
 * An array of routes that are accessible to the public
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/", "/api/uploadthing/"];
