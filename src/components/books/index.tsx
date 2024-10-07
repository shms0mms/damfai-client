import Link from "next/link"
import type { Book } from "@/types/book"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Rating } from "@/components/ui/rating"
import { FavouriteButton } from "./favourite-button"
import { env } from "@/env"
import { cn } from "@/lib/utils"

interface BookListProps {
  books: Book[]
}

export function BookList({ books }: BookListProps) {
  const bookGanres = Array.from(new Set(books.map(book => book.ganres).flat()))
  const ganreAndBook: Record<string, Book[]> = {}
  bookGanres.forEach(ganre => {
    ganreAndBook[ganre] = books.filter(book => book.ganres.includes(ganre))
  })

  return (
    <div className="flex min-h-[80vh] flex-col justify-between sm:container">
      <ul className="flex flex-col gap-4">
        {Object.keys(ganreAndBook).map(ganre => {
          const books = ganreAndBook[ganre]!
          return (
            <li className="h-full w-full" key={ganre}>
              <h2 className="mb-2 text-3xl font-semibold">{ganre}</h2>
              {/* <Separator /> */}
              <Carousel>
                <CarouselContent className="mx-4 py-2">
                  {books.map((book, i) => (
                    <CarouselItem
                      className={cn(
                        "basis-[16rem] rounded-lg px-3 py-8 shadow-md",
                        {
                          "max-sm:pl-0": i === 0
                        }
                      )}
                      key={book.id}
                    >
                      <Link
                        className="flex h-full flex-col gap-2"
                        href={`/books/${book.id}`}
                      >
                        <img
                          className="overflow-hidden rounded-md"
                          src={
                            book.image
                              ? book.image
                              : `${env.NEXT_PUBLIC_SERVER_URL}/books/img/${book.id}`
                          }
                          alt={book.title}
                          width={220}
                          height={300}
                        />
                        <div className="flex items-center justify-between">
                          <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold sm:text-xl">
                            {book.title}
                          </h3>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-foreground/75">{book.author}</p>
                        </div>
                        <Rating
                          rating={4.5}
                          showText={false}
                          disabled
                          size={10}
                        />
                      </Link>
                      <FavouriteButton book={book} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext className="hidden sm:inline-flex" />
                <CarouselPrevious className="hidden sm:inline-flex" />
              </Carousel>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
