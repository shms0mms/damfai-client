import { useMutation, useQuery } from "@tanstack/react-query"
import { BookmarkIcon } from "lucide-react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { bookmarksService } from "@/services/bookmarks.service"

export function Bookmark({ currentPage }: { currentPage: number | undefined }) {
  const page = currentPage || 1
  const { data, refetch } = useQuery({
    queryKey: [`isBookmark`, page],
    queryFn: () => bookmarksService.isBookmark(page!)
  })
  const { id } = useParams()
  const { mutate } = useMutation({
    mutationFn: ({ id, page }: { id: number; page: number }) =>
      bookmarksService.update(id, page),
    async onSuccess() {
      await refetch()
    }
  })

  const isBookmark = data?.data?.is_bookmark
  return (
    <>
      <Button
        onClick={() => mutate({ id: +id!, page })}
        type="button"
        variant={"outline"}
        size={"icon"}
      >
        <BookmarkIcon
          fill={isBookmark ? "hsl(var(--foreground))" : "transparent"}
        />
      </Button>
    </>
  )
}
