import Link from "next/link"
import { ReactNode } from "react"
import type { Book as TBook } from "@/types/book"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Progress } from "@/components/ui/progress"
import { FavouriteButton } from "./favourite-button"
import { env } from "@/env"

type BookListProps = {
  sections: { title: string; books: TBook[]; block?: ReactNode }[]
}

export function BookList({ sections }: BookListProps) {
  return (
    <div className="">
      <div className="flex flex-col gap-[100px]">
        {sections.map(section => {
          const books = section.books

          return (
            !!books?.length && (
              <div key={section.title} className="flex flex-col gap-[100px]">
                <section className="container">
                  <h2 className="mb-2 text-xl font-semibold">
                    {section.title}
                  </h2>
                  <Carousel className="group flex h-full py-2">
                    <CarouselContent className="-ml-5">
                      {books?.length
                        ? books.map(book => (
                            <CarouselItem
                              key={book.id}
                              className="xs:basis-[52%] max-xs:basis-[60%] pl-5 sm:basis-[40%] md:basis-[28%] lg:basis-[18%] xl:basis-[15%]"
                            >
                              <Book book={book} />
                            </CarouselItem>
                          ))
                        : null}
                    </CarouselContent>
                    <CarouselPrevious className="pointer-events-auto invisible left-6 z-[50] bg-muted opacity-0 transition-all disabled:hidden group-hover:visible group-hover:opacity-100" />
                    <CarouselNext className="pointer-events-auto invisible right-6 z-[50] bg-muted opacity-0 transition-all disabled:hidden group-hover:visible group-hover:opacity-100" />
                  </Carousel>
                </section>
                {section?.block && (
                  <section className="h-full w-full">{section.block}</section>
                )}
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}

type BookProps = {
  book: TBook
}
function Book({ book }: BookProps) {
  const imageUrl = book.image
    ? book.image
    : `${env.NEXT_PUBLIC_SERVER_URL}/books/get/book/img/${book.id}`
  const href =
    book.progress || book.progress == 0
      ? `/books/read/${book.id}`
      : `/books/${book.id}`

  return (
    <article>
      <Link href={href} className="flex min-w-[160px] flex-col gap-2">
        <img
          src={imageUrl}
          alt={book.title}
          className="aspect-[9/16] rounded-md"
        />
        <h3 className="text-muted-foreground">{book.author}</h3>
        <h4 className="text-sm">{book.title}</h4>
        {(book?.progress || book?.progress == 0) && (
          <div className="flex flex-col gap-1">
            <p className="text-xs">Прогресс {book.progress}%</p>
            <Progress value={book.progress} />
          </div>
        )}
      </Link>
      <div className="mt-2 flex items-center justify-between gap-5">
        <FavouriteButton bookId={book.id} />
      </div>
    </article>
  )
}
