"use client"

import { LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

export const LoginButton = () => {
  const login = () => {}

  return (
    <Button className="gap-2" onClick={login}>
      Войти <LogIn />
    </Button>
  )
}
