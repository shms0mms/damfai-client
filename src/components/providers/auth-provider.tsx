"use client"

import { useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { createContext, useEffect, useState } from "react"
import { User } from "@/types/user"
import { useProfile } from "@/hooks/useProfile"
import { removeAccessTokenFromStorage } from "@/lib/auth"

type AuthContext = {
  user?: User
  isLoading?: boolean
  isAuth: boolean
  logout: () => void
}
export const AuthContext = createContext<AuthContext>({
  user: undefined,
  isLoading: true,
  isAuth: false,
  logout: () => {}
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [isAuth, setIsAuth] = useState(false)

  const { data: user, isLoading } = useProfile()

  const logout = async () => {
    localStorage.removeItem("readTime")
    localStorage.removeItem("lastReadBook")

    setIsAuth(false)
    queryClient.setQueryData(["user"], null)
    removeAccessTokenFromStorage()

    router.push("/")
  }

  useEffect(() => setIsAuth(!!user), [user])

  const value: AuthContext = { user, isLoading, isAuth, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
