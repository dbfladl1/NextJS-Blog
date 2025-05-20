import { NextResponse, NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import createMiddleware from "next-intl/middleware";

// 기본 next-intl 미들웨어 실행 (locale 감지 및 적용)
const intlMiddleware = createMiddleware(routing);

// 유효한 언어 코드들 (routing.locales와 동일하게 유지해야 함)
const SUPPORTED_LOCALES = ["en", "ko"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isStaticFile =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/manifest.json") ||
    pathname.startsWith("/api");

  if (isStaticFile) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const lang = request.headers.get("accept-language")?.startsWith("ko")
      ? "ko"
      : "en";
    return NextResponse.redirect(
      new URL(`/${lang}/enter/profile`, request.url)
    );
  }

  const localePrefix = pathname.split("/")[1]; // ex: 'en'
  const isValidLocale = SUPPORTED_LOCALES.includes(localePrefix);

  const validPaths = [
    `/${localePrefix}/enter`,
    `/${localePrefix}/enter/profile`,
    `/${localePrefix}/enter/guestbook`,
    `/${localePrefix}/enter/portfolio`,
    `/${localePrefix}/enter/devlog`,
  ];

  const isValidPath =
    isValidLocale && validPaths.some((path) => pathname.startsWith(path));

  if (!isValidPath) {
    if (pathname === `/${localePrefix}/enter/profile`) {
      return NextResponse.next();
    }

    return NextResponse.redirect(
      new URL(`/${localePrefix}/enter/profile`, request.url)
    );
  }
  return intlMiddleware(request);
}
