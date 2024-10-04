import { CardDescription, CardTitle } from "@/components/blocks/ai-slider"
import Purpose from "@/components/read-book/purpose"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Rating } from "@/components/ui/rating"
import { env } from "@/env"
import { bookService } from "@/services/book.service"

type BookPageProps = { params: { id: string } }

export default async function BookPage({ params }: BookPageProps) {
  const book = await bookService.getById(+params.id)

  return (
    <Card className="mx-4 grid w-full max-w-[56rem] items-center gap-8 py-4 max-md:grid-cols-1 md:grid-cols-[1fr_26rem]">
      <div className="grid h-full grid-cols-1 md:grid-rows-[10rem_1fr]">
        <CardHeader className="relative mb-8 pl-5">
          <CardTitle className="max-w-[14rem] overflow-hidden truncate">
            {book.title}
          </CardTitle>
          <p className="-mb-1 text-foreground/95">{book.author}</p>
          <CardDescription className="max-w-full overflow-hidden truncate">
            {book.desc}
          </CardDescription>
          <Rating
            className="absolute right-0 top-3"
            rating={book.ratings}
            disabled
            showText={false}
            variant="yellow"
          />
        </CardHeader>
        <CardContent className="pl-5">
          {/* <BookForm book={book} className="mt-auto" /> */}
          <Purpose className="flex h-full flex-col justify-end" type="set" />
        </CardContent>
      </div>
      <div className="flex justify-end">
        <img
          src={
            book.image
              ? book.image
              : `${env.NEXT_PUBLIC_SERVER_URL}/books/img/${book.id}`
          }
          alt={book.title}
          className={"overflow-hidden rounded-lg"}
        />
      </div>
    </Card>
  )
}
