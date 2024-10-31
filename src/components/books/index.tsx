import Link from "next/link"
import { ReactNode } from "react"
import type { Book } from "@/types/book"
import { Progress } from "../ui/progress"
import { FavouriteButton } from "./favourite-button"
import { env } from "@/env"

type BookListProps = {
  books: { title: string; books: Book[]; block?: ReactNode }[]
}

export function BookList({ books: data }: BookListProps) {
  return (
    <div className="">
      <div className="flex flex-col gap-[100px]">
        {data.map(d => {
          const books = d.books

          return (
            !!books?.length && (
              <div className="flex flex-col gap-[100px]" key={d.title}>
                <section className="container">
                  <h2 className="mb-2 text-xl font-semibold">{d.title}</h2>
                  <div className="flex h-full gap-2 overflow-x-auto py-2">
                    {books?.length
                      ? books.map(b => {
                          const imageUrl = b.image
                            ? b.image
                            : `${env.NEXT_PUBLIC_SERVER_URL}/books/img/${b.id}`
                          const href =
                            b.progress || b.progress == 0
                              ? `/books/read/${b.id}`
                              : `/books/${b.id}`
                          return (
                            <article>
                              <Link
                                href={href}
                                key={b.id}
                                className="flex min-w-[160px] flex-col gap-2"
                              >
                                <img
                                  src={imageUrl}
                                  alt={b.title}
                                  width={220}
                                  className="max-h-[280px] min-h-[280px] rounded-md"
                                />
                                <h3 className="text-muted-foreground">
                                  {b.author}
                                </h3>
                                <h4 className="text-sm">{b.title}</h4>
                                {(b?.progress || b?.progress == 0) && (
                                  <div className="flex flex-col gap-1">
                                    <p className="text-xs">
                                      Прогресс {b.progress}%
                                    </p>
                                    <Progress value={b.progress} />
                                  </div>
                                )}
                              </Link>
                              <div className="mt-2 flex items-center justify-between gap-5">
                                <FavouriteButton book_id={b.id} />
                              </div>
                            </article>
                          )
                        })
                      : null}
                  </div>
                </section>
                {d?.block && (
                  <section className="h-full w-full">{d.block}</section>
                )}
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}
