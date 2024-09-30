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
    <div className="container flex min-h-[80vh] flex-col justify-between">
      <ul>
        {Object.keys(ganreAndBook).map(ganre => {
          const books = ganreAndBook[ganre]
          return (
            <li className="w-full" key={ganre}>
              <h2 className="mb-2 text-3xl font-semibold">{ganre}</h2>
              <Separator />
              <Carousel className="[&>div]:!overflow-y-visible">
                <CarouselContent>
                  {books.map(book => (
                    <CarouselItem className="basis-[40%]" key={book.id}>
                      <Link
                        className="grid grid-cols-[1fr_7rem] rounded-lg p-6 shadow-md"
                        href={`/book/${book.id}`}
                      >
                        <div className="">
                          <h3 className="mb-2 text-xl font-semibold">
                            {book.title}
                          </h3>
                          <p className="mb-2 text-gray-600">
                            Автор: {book.author}
                          </p>
                          <p className="mb-4 text-sm text-gray-500">
                            {book.desc}
                          </p>
                          <span className="text-muted">
                            {book.chapters} страниц(а)
                          </span>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <img src={book.image} alt={book.title} />
                          <Rating rating={4.5} showText={false} disabled />
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext />
                <CarouselPrevious />
              </Carousel>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
