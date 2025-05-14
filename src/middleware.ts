import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isStaticFile = pathname.startsWith("/_next") ||
                       pathname.startsWith("/favicon.ico") ||
                       pathname.startsWith("/robots.txt") ||
                       pathname.startsWith("/manifest.json") ||
                       pathname.startsWith("/api");

  if (isStaticFile) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/enter/profile", request.url));
  }

  const validPaths = ["/enter", "/enter/profile", "/enter/guestbook", "/enter/portfolio", "/enter/devlog"];
  const isValid = validPaths.some((path) => pathname.startsWith(path));

  if (!isValid) {
    return NextResponse.redirect(new URL("/enter/profile", request.url));
  }

  return NextResponse.next();
}
