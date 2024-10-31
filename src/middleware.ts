import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

// Create the localization middleware
const localizationMiddleware = createMiddleware(routing);

// Your protected route logic
export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;

  const protectedPaths = ["/payment", "/purchases", "/profile", "/orders"];
  const isProtectedRoute = protectedPaths.some((path) =>
    request.nextUrl.pathname.includes(path)
  );

  // Check if the route is protected and the user is not authenticated
  if (!token && isProtectedRoute && false) {
    const pathSegments = request.nextUrl.pathname.split("/");
    const originalPath = pathSegments.slice(2).join("/"); // Ignore the first three segments (i.e., /en or /ar)

    return NextResponse.redirect(
      new URL(`login?redirect=${encodeURIComponent(originalPath)}`, request.url)
    );
  }

  // Execute localization middleware
  return localizationMiddleware(request);
}

// Update the matcher to include both localization and protected routes
export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
