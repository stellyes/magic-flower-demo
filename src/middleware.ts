import { NextRequest, NextResponse } from "next/server";

const SITE_PASSWORD = "MFCD@2026";
const COOKIE_NAME = "mf-auth";

export function middleware(request: NextRequest) {
  // Skip the password page itself and static assets
  if (
    request.nextUrl.pathname === "/password" ||
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/api") ||
    request.nextUrl.pathname.match(/\.(png|svg|webp|avif|ico|jpg|jpeg|css|js)$/)
  ) {
    return NextResponse.next();
  }

  const auth = request.cookies.get(COOKIE_NAME);
  if (auth?.value === SITE_PASSWORD) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/password";
  url.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
