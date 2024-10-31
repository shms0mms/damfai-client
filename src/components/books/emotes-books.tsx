import Link from "next/link"
import { type Book, type EmoteEnum, moodIcons } from "@/types/book"
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

type EmotesBooksProps = {
  books: Book[]
}

export function EmotesBooks({ books }: EmotesBooksProps) {
  const emote = books?.at(0)?.emote
  const Icon = moodIcons[emote as EmoteEnum]?.icon
  const text = moodIcons[emote as EmoteEnum]?.text
  return (
    <div className="flex flex-col justify-between sm:container">
      {!!books?.length && (
        <div className="flex flex-col">
          <h2 className="mb-2 text-3xl font-semibold">Книги по эмоциям</h2>
          <h3 className="flex items-center gap-1 text-lg font-medium">
            Мы сделали подборку книг по вашему настроению - {text}{" "}
            <Icon size={24} />
          </h3>
        </div>
      )}
      <Carousel>
        <CarouselContent className="mx-4 py-2">
          {books?.length
            ? books.map((book, i) => (
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
                    <Rating rating={4.5} showText={false} disabled size={10} />
                  </Link>
                  <FavouriteButton book={book} />
                </CarouselItem>
              ))
            : null}
        </CarouselContent>
        {!!books?.length && (
          <>
            <CarouselNext className="hidden sm:inline-flex" />
            <CarouselPrevious className="hidden sm:inline-flex" />
          </>
        )}
      </Carousel>
    </div>
  )
}
