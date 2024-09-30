import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { ACCESS_TOKEN } from "./config/access-token.config"
import { ROUTES } from "./config/route.config"

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get(ACCESS_TOKEN.nameOnClient)?.value

  if (!accessToken && req.nextUrl.pathname.startsWith(ROUTES.DASHBOARD)) {
    return NextResponse.redirect(new URL(ROUTES.SIGN_IN, req.url))
  }

  return NextResponse.next()
}

export const config = { matcher: "/((?!.*\\.).*)" }
