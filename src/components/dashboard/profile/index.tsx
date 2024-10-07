import { KeyboardIcon, User } from "lucide-react"
import { useContext } from "react"
import { useFavouriteGanres } from "@/hooks/useFavouriteGanres"
import { AuthContext } from "@/providers/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Hotkeys from "../hotkeys"
import EditProfile from "./edit"
import { getMaxKey } from "@/lib/utils"

export default function Profile() {
  const { user, isLoading } = useContext(AuthContext)
  const { data, isLoading: isLoadingGanre } = useFavouriteGanres()
  const ganreKey = getMaxKey(data?.data || {})
  return (
    <Card className="col-span-1 max-xl:col-span-2">
      <CardHeader>
        <div className="flex w-full items-center justify-between gap-5">
          <CardTitle>Профиль</CardTitle>
          <Hotkeys />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarImage alt="Icon of profile" />
          <AvatarFallback>
            <User className="h-12 w-12" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-xl font-bold">
            {user?.name ? (
              user?.name
            ) : (
              <Skeleton className="h-[20px] w-[100px]" />
            )}
          </h2>
          <div className="text-sm text-muted-foreground">
            {user?.email
              ? user.email
              : isLoading && <Skeleton className="h-[20px] w-[200px]" />}
          </div>
          <div className="text-sm text-muted-foreground">
            На сайте с:{" "}
            {user?.created_at
              ? new Date(user?.created_at)?.toLocaleDateString?.()
              : isLoading && <Skeleton className="h-[20px] w-[200px]" />}
          </div>
          <div className="text-sm text-muted-foreground">
            Любимый жанр:{" "}
            {ganreKey ? (
              ganreKey
            ) : isLoadingGanre ? (
              <Skeleton className="h-[20px] w-[100px]" />
            ) : (
              "Отсутствует"
            )}
          </div>
          <EditProfile />
        </div>
      </CardContent>
    </Card>
  )
}
