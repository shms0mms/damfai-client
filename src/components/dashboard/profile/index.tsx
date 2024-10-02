import { User } from "lucide-react"
import { useContext } from "react"
import { AuthContext } from "@/providers/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import EditProfile from "./edit"

export default function Profile() {
  const { user, isLoading } = useContext(AuthContext)
  return (
    <Card className="col-span-1 max-xl:col-span-2">
      <CardHeader>
        <CardTitle>Профиль</CardTitle>
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
            {user?.ganre ? (
              user.ganre
            ) : isLoading ? (
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
