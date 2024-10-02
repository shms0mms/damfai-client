import Link from "next/link"
import { Book } from "@/types/book"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel"
import { Rating } from "../ui/rating"
import { Separator } from "../ui/separator"
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
          const books = ganreAndBook[ganre]
          return (
            <li className="w-full" key={ganre}>
              <h2 className="mb-2 text-3xl font-semibold">{ganre}</h2>
              <Separator />
              <Carousel>
                <CarouselContent className="mx-4 py-2">
                  {books.map((book, i) => (
                    <CarouselItem
                      className={cn("basis-[16rem] md:basis-[20rem]", {
                        "max-sm:pl-0": i === 0
                      })}
                      key={book.id}
                    >
                      <Link
                        className="flex flex-col gap-2 rounded-lg p-6 shadow-md"
                        href={`/books/${book.id}`}
                      >
                        <img
                          className="overflow-hidden rounded-md"
                          src={`${env.NEXT_PUBLIC_SERVER_URL}/books/img/${book.id}`}
                          alt={book.title}
                        />
                        <div className="flex justify-between">
                          <h3 className="mb-4 text-lg font-semibold sm:text-xl">
                            {book.title}
                          </h3>
                          <span className="text-foreground/75">
                            {book.chapters} страниц(а)
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-gray-600">Автор: {book.author}</p>
                          <Rating
                            rating={4.5}
                            showText={false}
                            disabled
                            size={18}
                          />
                        </div>
                        <p className="max-w-[calc(20rem-1.5rem)] overflow-hidden truncate text-sm text-gray-500">
                          {book.desc}
                        </p>
                      </Link>
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
