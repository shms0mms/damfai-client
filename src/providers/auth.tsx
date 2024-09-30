"use client"

import React, { createContext, useState } from "react"
import { User } from "@/types/user"

type AuthContext = {
  user?: User
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
}
export const AuthContext = createContext<AuthContext>({} as AuthContext)

export default function AuthProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState()
  const value = { setUser, user } as AuthContext
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
