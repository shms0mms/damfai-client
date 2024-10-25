"use client"

import { useContext } from "react"
import { AuthContext } from "../providers/auth-profider"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../ui/card"
import { CoolMode } from "../ui/cool-mode"
import { LogoCircle } from "../ui/logo-circle"
import { toCoins } from "@/lib/utils"

export default function BalanceCard() {
  const { user } = useContext(AuthContext)
  return (
    <Card className="max-xl:col-span-2">
      <CardHeader>
        <CardTitle>Ваш баланс чаппи-коинов</CardTitle>
        <CardDescription>
          Зарабатывай коины в гонках, повышай свой ранг, проходи дорогу чаппи и
          получай коины
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex min-h-[200px] flex-col items-center justify-center gap-5">
          <CoolMode>
            <Button className="h-auto w-auto" variant={"link"}>
              <LogoCircle />
            </Button>
          </CoolMode>
          <span className="flex items-center gap-0.5 font-semibold">
            Коины: {toCoins(user?.balance!)}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <span className="w-full text-center text-sm text-muted-foreground">
          Чаппи ждёт тебя в мире чтения!
        </span>
      </CardFooter>
    </Card>
  )
}
