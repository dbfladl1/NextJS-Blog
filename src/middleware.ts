import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const validPaths = ["/", "/enter", "/enter/profile", "/enter/guestbook", "/enter/portfolio", "/enter/devlog"];
  const pathname = request.nextUrl.pathname;

  const isValid = validPaths.some((path) => pathname.startsWith(path));
  
  if (!isValid) {
    return NextResponse.redirect(new URL("/enter/profile", request.url));
  }

  return NextResponse.next();
}
