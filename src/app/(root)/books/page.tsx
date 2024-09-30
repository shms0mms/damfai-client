import { BookList } from "@/components/books"
import { bookService } from "@/services/book.service"

export default async function BooksPage() {
  const data = await bookService.getAll({ perPage: 10 })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Рекомендации</h1>
      <BookList books={data.items} />
    </div>
  )
}
