import clientCookies from "js-cookie"
import { ACCESS_TOKEN } from "@/config/access-token.config"

export const getAccessToken = () => {
  return clientCookies.get(ACCESS_TOKEN.nameOnClient)
}
export const saveAccessToken = (accessToken: string) => {
  const expires = new Date()
  expires.setDate(expires.getDate() + parseInt(ACCESS_TOKEN.expired))
  const domain = process.env.DOMAIN_URL || "localhost"
  const sameSate = "None"

  clientCookies.set(ACCESS_TOKEN.nameOnClient, accessToken, {
    domain,
    sameSate,
    expires
  })
}

export const removeAccessTokenFromStorage = () => {
  clientCookies.remove(ACCESS_TOKEN.nameOnClient)
}
