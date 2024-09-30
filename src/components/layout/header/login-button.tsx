"use client"

import Link from "next/link"
import { ROUTES } from "@/config/route.config"
import { Button } from "@/components/ui/button"

export const LoginButton = () => {
  return (
    <Button asChild className="gap-2">
      <Link href={ROUTES.SIGN_IN}>Войти</Link>
    </Button>
  )
}
