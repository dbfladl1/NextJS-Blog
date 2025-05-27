import { NextResponse, NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware(routing);
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

  // 1. 루트 접근시 언어 감지 후 locale로 리디렉션
  if (pathname === "/") {
    const lang = request.headers.get("accept-language")?.startsWith("en")
      ? "en"
      : "ko";
    return NextResponse.redirect(new URL(`/${lang}`, request.url));
  }

  const localePrefix = pathname.split("/")[1]; // e.g. 'en', 'ko'
  const isValidLocale = SUPPORTED_LOCALES.includes(localePrefix);

  // 2. locale이 아예 잘못된 경우 → 기본값인 ko/enter로 리디렉션
  if (!isValidLocale) {
    return NextResponse.redirect(new URL(`/ko/enter`, request.url));
  }

  const validPaths = [
    `/${localePrefix}/enter`,
    `/${localePrefix}/intro`,
    `/${localePrefix}/main/profile`,
    `/${localePrefix}/main/guestbook`,
    `/${localePrefix}/main/portfolio`,
    `/${localePrefix}/main/devlog`,
  ];

  const isValidPath = validPaths.some((path) => pathname.startsWith(path));

  // 3. locale만 있는 경우는 그대로 통과
  if (pathname === `/${localePrefix}` || pathname === `/${localePrefix}/`) {
    return NextResponse.redirect(
      new URL(`/${localePrefix}/enter`, request.url)
    );
  }

  // 4. locale은 맞는데 path가 유효하지 않음 → localePrefix + /enter로 리디렉션
  if (!isValidPath) {
    return NextResponse.redirect(
      new URL(`/${localePrefix}/enter`, request.url)
    );
  }

  // 5. 정상적인 경로 → intlMiddleware 실행
  return intlMiddleware(request);
}
