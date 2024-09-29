import { BookList } from "@/components/books"
import { bookService } from "@/services/book.service"

export default async function BooksPage() {
  const data = await bookService.getAll()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Books</h1>
      <BookList initialBooks={data.books} totalBooks={data.total} />
    </div>
  )
}
