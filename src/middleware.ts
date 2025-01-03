import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { ROUTES } from "./config/route.config"
import { env } from "./env"
import { getAccessToken } from "@/lib/auth.server"

const protectedRoutes = [
  ROUTES.DASHBOARD,
  ROUTES.RACE,
  ROUTES.BOOKS,
  "/pass",
  "/books/read/"
]
const preventLoggedInRoutes = ["/auth/sign-in", "/auth/sign-up"]

export async function middleware(req: NextRequest) {
  const accessToken = getAccessToken()

  let isAuthorized = !!accessToken
  try {
    const user = await fetch(`${env.NEXT_PUBLIC_SERVER_URL}/auth/me`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }).then(res => res.json())

    if (user?.id) isAuthorized = true
    else if (user?.detail?.status === 426) isAuthorized = false
  } catch {
    isAuthorized = false
  }

  if (
    isAuthorized &&
    preventLoggedInRoutes.some(route => req.nextUrl.pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/not-found", req.url))
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
