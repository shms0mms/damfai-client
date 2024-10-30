import { Book, BookComponent } from "@/types/book"
import { Bookmark, BookmarkComponent } from "@/types/bookmarks"
import { Favourite, FavouriteComponent } from "@/types/favourites"
import { Skeleton } from "@/components/ui/skeleton"
import { TabsContent } from "@/components/ui/tabs"
import { BookItem } from "./item"
import { randomNumber } from "@/lib/utils"

type TabItemProps<TBook extends Book | Bookmark | Favourite> = {
  books: TBook[]
  value: string
  icon: React.ReactNode
  isLoading?: boolean
}
export function TabItem<TBook extends Book | Bookmark | Favourite>({
  books,
  value,
  icon,
  isLoading
}: TabItemProps<TBook>) {
  return (
    <TabsContent className="flex w-full flex-col gap-2" value={value}>
      {books?.length ? (
        books?.map(book => (
          <BookItem
            key={book.id}
            {...(book as BookmarkComponent &
              FavouriteComponent &
              BookComponent)}
            icon={icon}
          />
        ))
      ) : isLoading ? (
        <div className="flex flex-col gap-2">
          {Array.from({ length: 8 }, (_, i) => (
            <Skeleton
              key={i}
              className="h-[30px]"
              style={{
                width: randomNumber(100, 150)
              }}
            />
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
