import Link from "next/link"
import { Button } from "@/components/ui/button"

export const LoginButton = () => {
  return (
    <Button asChild className="gap-2">
      <Link href="/auth/sign-in">Войти</Link>
    </Button>
  )
}
