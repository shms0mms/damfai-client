import { BookList } from "@/components/books"
import { MainTitle } from "@/components/ui/main-title"
import { bookService } from "@/services/book.service"

export default async function BooksPage() {
  const data = await bookService.getAll({ perPage: 10 })

  return (
    <div className="container mx-auto px-4 py-8">
      <MainTitle>Рекомендации</MainTitle>
      <BookList books={data.items} />
    </div>
  )
}
