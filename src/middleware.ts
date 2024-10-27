import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { ACCESS_TOKEN } from "./config/access-token.config"
import { ROUTES } from "./config/route.config"

const protectedRoutes = [ROUTES.DASHBOARD, "/books/read/"]

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get(ACCESS_TOKEN.nameOnClient)?.value

  if (
    !accessToken &&
    protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL(ROUTES.SIGN_IN, req.url))
  }

  return NextResponse.next()
}

export const config = { matcher: "/((?!.*\\.).*)" }
