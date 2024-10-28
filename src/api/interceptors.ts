import axios, { AxiosError, type CreateAxiosDefaults } from "axios"
import ClientCookies from "js-cookie"
import { ACCESS_TOKEN } from "@/config/access-token.config"
import { env } from "@/env"

const options: CreateAxiosDefaults = {
  baseURL: env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
}

const axiosDefault = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(async config => {
  let cookies = null

  if (typeof window !== "undefined") {
    cookies = ClientCookies
  } else {
    cookies = (await import("next/headers")).cookies()
  }
  const accessToken =
    // for server
    cookies.get(ACCESS_TOKEN.nameOnClient)?.value ??
    // for client
    cookies.get(ACCESS_TOKEN.nameOnClient)

  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`

  return config
})

axios.interceptors.response.use(
  config => config,
  async (error: AxiosError) => {
    const cfg = error.config as any
    const originalRequest = error.config as any
    if (cfg && !cfg._isRetry) {
      originalRequest!._isRetry = true
      try {
        return axiosWithAuth.request(originalRequest)
      } catch {}
    }
    throw error
  }
)

export { axiosDefault, axiosWithAuth }
