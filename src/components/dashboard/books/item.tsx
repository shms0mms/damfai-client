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
  currentNumberOfPage,
  idCurrentChapter,
  isLoading,
  progress,
  id
}: BookItemProps) {
  const href = currentNumberOfPage
    ? `/books/read/${id}/?page=${currentNumberOfPage}&chapter=${idCurrentChapter}`
    : !!progress || progress == 0
      ? `/books/read/${id}`
      : `/books/${id}`

  return (
    <>
      {title ? (
        <div className="flex w-full items-center justify-between space-x-4">
          <div className="flex w-1/2 items-center gap-2">
            {icon}
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-medium">{title}</h3>
              <p className="text-sm text-muted-foreground">{author}</p>
            </div>
          </div>

          <div className="flex w-1/2 items-center justify-end space-x-2">
            {!!currentNumberOfPage && (
              <span className="whitespace-nowrap text-sm text-muted-foreground">
                Страница: {currentNumberOfPage}
              </span>
            )}{" "}
            {(!!progress || progress == 0) && (
              <div className="flex w-full items-center justify-end space-x-2">
                <Progress value={progress} className="w-[50%]" />
                <span className="whitespace-nowrap text-sm text-muted-foreground">
                  {progress.toFixed(1)}%
                </span>
              </div>
            )}
            <Link href={href}>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        </div>
      ) : (
        isLoading && <Skeleton className="h-[20px] w-full" />
      )}
    </>
  )
}
