import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { Chapter } from "@/types/book"
import { Button, buttonVariants } from "../ui/button"
import { Skeleton } from "../ui/skeleton"
import { cn } from "@/lib/utils"

type ChapterNavigationProps = {
  currentChapterId: number
  chapters: Chapter[] | undefined
  isLoading: boolean
}

export function ChapterNavigation({
  currentChapterId,
  chapters,
  isLoading
}: ChapterNavigationProps) {
  if (!chapters || isLoading) {
    return (
      <>
        <Skeleton
          className={cn(
            buttonVariants({ size: "sm", variant: "outline" }),
            "top-[calc(var(--header-size)-0.5rem) fixed left-4 h-8 w-20 -translate-y-1/2 animate-pulse rounded-md bg-primary/10"
          )}
        />
        <Skeleton
          className={cn(
            buttonVariants({ size: "sm", variant: "outline" }),
            "top-[calc(var(--header-size)-0.5rem) fixed right-4 h-8 w-20 -translate-y-1/2 animate-pulse rounded-md bg-primary/10"
          )}
        />
      </>
    )
  }

  const currentChapterIndex = chapters?.findIndex(
    chapter => chapter.id === currentChapterId
  )
  const prevChapter = chapters[currentChapterIndex - 1]
  const nextChapter = chapters[currentChapterIndex + 1]

  return (
    <>
      {prevChapter && (
        <Button variant="outline" size="sm" asChild>
          <Link
            href={`?chapter=${prevChapter.id}&page=1`}
            className="fixed left-4 top-[calc(var(--header-size)-0.5rem)] items-center gap-1 px-2"
            title={`Previous Chapter: ${prevChapter.title}`}
          >
            <ChevronLeftIcon />
            {prevChapter.title}
            <span className="sr-only">Previous Chapter</span>
          </Link>
        </Button>
      )}
      {nextChapter && (
        <Button variant="outline" size="sm" asChild>
          <Link
            href={`?chapter=${nextChapter.id}&page=1`}
            className="fixed right-4 top-[calc(var(--header-size)-0.5rem)] items-center gap-1 px-2"
            title={`Next Chapter: ${nextChapter.title}`}
          >
            {nextChapter.title}
            <ChevronRightIcon />
            <span className="sr-only">Next Chapter</span>
          </Link>
        </Button>
      )}
    </>
  )
}
