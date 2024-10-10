import { Book } from "@/types/book"
import { Bookmark } from "@/types/bookmarks"
import { Favourite } from "@/types/favourites"
import { Skeleton } from "@/components/ui/skeleton"
import { TabsContent } from "@/components/ui/tabs"
import { BookItem } from "./book-item"

type TabItemProps = {
  books: Favourite[] | Bookmark[] | Book[]
  value: string
  icon: React.ReactNode
  isLoading?: boolean
}
export function TabItem({ books, value, icon, isLoading }: TabItemProps) {
  return (
    <TabsContent className="h-full w-full" value={value}>
      {books?.length ? (
        books?.map(book => <BookItem {...book} icon={icon} key={book.id} />)
      ) : isLoading ? (
        <div className="flex flex-col gap-2">
          {Array.from({ length: 8 }, (_, i) => (
            <Skeleton key={i} className="h-[30px] w-full" />
          ))}
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          В данном разделе нету книг
        </div>
      )}
    </TabsContent>
  )
}
