"use client"

import Cookies from "js-cookie"
import { ACCESS_TOKEN } from "@/config/access-token.config"

export const getAccessToken = () => Cookies.get(ACCESS_TOKEN.nameOnClient)
export const removeFromStorage = () => Cookies.remove(ACCESS_TOKEN.nameOnClient)
export const saveAccessToken = (accessToken: string) => {
  const expires = new Date()
  expires.setDate(expires.getDate() + parseInt(ACCESS_TOKEN.expired))
  const domain = process.env.DOMAIN_URL || "localhost"
  const sameSate = "None"
  Cookies.set(ACCESS_TOKEN.nameOnClient, accessToken, {
    domain,
    sameSate,
    expires
  })
}
