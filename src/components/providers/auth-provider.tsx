"use client"

import { createContext, useEffect, useState } from "react"
import { User } from "@/types/user"
import { useProfile } from "@/hooks/useProfile"
import { getAccessToken } from "@/lib/auth"

type AuthContext = {
  user?: User
  isLoading?: boolean
  isAuth: boolean
}
export const AuthContext = createContext<AuthContext>({} as AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const accessToken = getAccessToken()
  const { data: user, refetch, isLoading } = useProfile()

  useEffect(() => {
    accessToken && refetch()
  }, [accessToken])
  const isAuth = !!user
  const value: AuthContext = { user, isLoading, isAuth }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
