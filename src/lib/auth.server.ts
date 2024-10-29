import { cookies as serverCookies } from "next/headers"
import { ACCESS_TOKEN } from "@/config/access-token.config"

export const getAccessToken = () => {
  return serverCookies().get(ACCESS_TOKEN.nameOnClient)?.value
}
export const saveAccessToken = async (accessToken: string) => {
  const expires = new Date()
  expires.setDate(expires.getDate() + parseInt(ACCESS_TOKEN.expired))
  const domain = process.env.DOMAIN_URL || "localhost"
  const sameSite = false

  serverCookies().set(ACCESS_TOKEN.nameOnClient, accessToken, {
    domain,
    sameSite,
    expires
  })
}

export const removeFromStorage = async () => {
  serverCookies().delete(ACCESS_TOKEN.nameOnClient)
}
