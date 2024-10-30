import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { ROUTES } from "./config/route.config"
import { authService } from "./services/auth.service"
import { getAccessToken, removeFromStorage } from "@/lib/auth.server"

const protectedRoutes = [ROUTES.DASHBOARD, "/books/read/"]
const preventLoggedInRoutes = ["/auth/sign-in", "/auth/sign-up"]

export async function middleware(req: NextRequest) {
  const accessToken = getAccessToken()

  let isAuthorized = !!accessToken
  try {
    const user = await authService.me()
    if (user) isAuthorized = true
  } catch {
    removeFromStorage()
  }

  if (
    isAuthorized &&
    preventLoggedInRoutes.some(route => req.nextUrl.pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/not_found", req.url))
  }

  if (
    !isAuthorized &&
    protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL(ROUTES.SIGN_IN, req.url))
  }

  return NextResponse.next()
}

export const config = { matcher: "/((?!.*\\.).*)" }
