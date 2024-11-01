"use client"

import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { createContext, useEffect } from "react"
import { User } from "@/types/user"
import { getAccessToken, removeAccessTokenFromStorage } from "@/lib/auth"
import { authService } from "@/services/auth.service"

type AuthContext = {
  user?: User
  isLoading?: boolean
  isAuth: boolean
  logout: () => void
}
export const AuthContext = createContext<AuthContext>({} as AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const accessToken = getAccessToken()
  const {
    data: user,
    refetch,
    isLoading
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => authService.me(),
    retry: false
  })
  const router = useRouter()
  const queryClient = useQueryClient()
  const logout = async () => {
    localStorage.removeItem("readTime")
    localStorage.removeItem("lastReadBook")
    removeAccessTokenFromStorage()
    queryClient.setQueryData(["user"], null)
    router.push("/")
  }

  useEffect(() => {
    accessToken && refetch()
  }, [accessToken])
  const isAuth = !!user
  const value: AuthContext = { user, isLoading, isAuth, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
