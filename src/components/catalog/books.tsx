import Link from "next/link"
import { type FC } from "react"
import { type Book } from "@/types/book"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { env } from "@/env"

type BooksProps = {
  books: Book[]
}

export const Books: FC<BooksProps> = ({ books }) => {
  return (
    <ul className="grid min-h-[72.5vh] grid-cols-1 gap-2 min-[500px]:grid-cols-2 min-[700px]:grid-cols-3 2xl:grid-cols-4">
      {books?.map(book => (
        <li key={book.id}>
          <Link href={`/books/${book.id}`}>
            <DirectionAwareHover
              className="relative w-auto max-sm:h-[30rem] min-[700px]:h-[30rem] md:h-96 md:w-auto xl:h-[36rem]"
              imageClassName="scale-[1.15]"
              imageUrl={
                book.image
                  ? book.image
                  : `${env.NEXT_PUBLIC_SERVER_URL}/books/img/${book.id}`
              }
            >
              <h4 className="text-lg font-semibold">{book.title}</h4>
              <p className="max-w-[calc(14rem-20px)] overflow-hidden truncate text-muted md:max-w-[calc(15rem-20px)] lg:max-w-[calc(16rem-20px)]">
                {book.desc}
              </p>
            </DirectionAwareHover>
          </Link>
        </li>
      ))}
    </ul>
  )
}
