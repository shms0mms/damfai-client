"use client"

import { PropsWithChildren, useContext } from "react"
import { MoodTracker } from "../layouts/root/mood-tracker"
import { AuthContext } from "./auth-provider"

export function MoodProvider({ children }: PropsWithChildren) {
  const { isAuth } = useContext(AuthContext)

  return (
    <>
      {isAuth && <MoodTracker />}
      {children}
    </>
  )
}
