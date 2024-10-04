import { BookList } from "@/components/books"
import { UserBookList } from "@/components/books/user-books"
import { bookService } from "@/services/book.service"

export default async function BooksPage() {
  const data = await bookService.getAll({ page: 1, size: 100 })
  const userBooks = await bookService.getUserBooks()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <MainTitle>Рекомендации</MainTitle> */}
      <UserBookList className="mb-12" books={userBooks} />
      <BookList books={data.items} />
    </div>
  )
}
