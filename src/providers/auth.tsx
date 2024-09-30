"use client"

import React, { createContext, useEffect, useState } from "react"
import { User } from "@/types/user"
import { getAccessToken } from "@/utils/auth"
import useProfile from "@/hooks/useProfile"

type AuthContext = {
  user?: User
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
  isLoading?: boolean
}
export const AuthContext = createContext<AuthContext>({} as AuthContext)

export default function AuthProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState()
  const accessToken = getAccessToken()
  const { data, error, refetch, isLoading } = useProfile()
  const status = error?.response?.status
  useEffect(() => {
    accessToken && refetch()
  }, [accessToken])
  useEffect(() => {
    if (status === 426) {
      setUser(undefined)
    } else {
      // @ts-expect-error asd
      setUser(data)
    }
  }, [status, data])
  const value = { setUser, user, isLoading } as AuthContext

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
