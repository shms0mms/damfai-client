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
    <TabsContent className="" value={value}>
      <div className="flex w-full flex-col gap-2">
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
          <div className="flex min-h-[340px] w-full items-center justify-center">
            В данном разделе нету книг
          </div>
        )}
      </div>
    </TabsContent>
  )
}
