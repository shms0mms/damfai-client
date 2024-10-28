import Image from "next/image"
import Link from "next/link"
import { type FC } from "react"
import { type Book } from "@/types/book"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel"
import { UserBookProgress } from "./user-book-progress"
import { env } from "@/env"
import { cn, randomNumber } from "@/lib/utils"

type UserBookList = {
  books: Book[]
  className?: string
}

export const UserBookList: FC<UserBookList> = ({ className, books }) => {
  return (
    <div className={cn("sm:container", className)}>
      <h2 className="mb-2 text-4xl font-semibold">Не забудьте дочитать</h2>
      <Carousel>
        <CarouselContent className="mx-4 py-2">
          {books.map((book, i) => (
            <CarouselItem
              className={cn("basis-[16rem] md:basis-[16rem]", {
                "max-sm:pl-0": i === 0
              })}
              key={book.id}
            >
              <Link
                className="flex h-full flex-col justify-between gap-4 rounded-lg p-3 shadow-md"
                href={`/books/read/${book.id}`}
              >
                <div className="flex flex-col gap-2">
                  <Image
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
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {book.title}
                  </h3>
                  <div className="flex justify-between">
                    <p className="text-foreground/75">{book.author}</p>
                  </div>
                </div>
                <UserBookProgress value={randomNumber(0, 100)} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        {books.length > 5 ? (
          <CarouselNext className="hidden sm:inline-flex" />
        ) : null}
        <CarouselPrevious className="hidden sm:inline-flex" />
      </Carousel>
    </div>
  )
}
