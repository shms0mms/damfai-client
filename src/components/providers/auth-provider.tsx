"use client"

import { createContext, useEffect, useState } from "react"
import { User } from "@/types/user"
import { useProfile } from "@/hooks/useProfile"
import { getAccessToken } from "@/lib/auth"

type AuthContext = {
  user?: User
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
  isLoading?: boolean
  isAuth: boolean
}
export const AuthContext = createContext<AuthContext>({} as AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>()
  const accessToken = getAccessToken()
  const { data, error, refetch, isLoading } = useProfile()
  const status = error?.response?.status

  useEffect(() => {
    accessToken && refetch()
  }, [accessToken])
  useEffect(() => {
    if (status === 426) setUser(undefined)
    // @ts-expect-error asd
    else setUser({ ...data })
  }, [status, data])
  const isAuth = !!user?.id
  const value = { setUser, user, isLoading, isAuth } as AuthContext

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
