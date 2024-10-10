import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { BookComponent } from "@/types/book"
import { BookmarkComponent } from "@/types/bookmarks"
import { FavouriteComponent } from "@/types/favourites"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"

export type BookItemProps = BookmarkComponent &
  FavouriteComponent &
  BookComponent
export function BookItem({
  title,
  author,
  icon,
  current_page,
  id_current_chapter,
  isLoading,
  progress,
  id
}: BookItemProps) {
  const href = current_page
    ? `/books/read/${id}/?page=${current_page}&chapter=${id_current_chapter}`
    : !!progress || progress == 0
      ? `/books/read/${id}`
      : `/books/${id}`

  return (
    <>
      {!!title ? (
        <div className="flex items-center space-x-4">
          {icon}
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{author}</p>
          </div>

          <div className="flex items-center space-x-2">
            {!!current_page && (
              <span className="whitespace-nowrap text-sm text-muted-foreground">
                Страница: {current_page}
              </span>
            )}{" "}
            {(!!progress || progress == 0) && (
              <div className="flex items-center space-x-2">
                <Progress value={progress} className="w-24" />
                <span className="whitespace-nowrap text-sm text-muted-foreground">
                  {progress}%
                </span>
              </div>
            )}
            <Link href={href}>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        </div>
      ) : (
        isLoading && <Skeleton className="h-[20px] w-[200px]" />
      )}
    </>
  )
}
