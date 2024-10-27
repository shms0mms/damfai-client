import { BookList } from "@/components/books"
import { UserBookList } from "@/components/books/user-books"
import { bookService } from "@/services/book.service"
import { recomendationService } from "@/services/recomendation.service"

export default async function BooksPage() {
  const data = await recomendationService.getAll({ page: 1, size: 100 })
  const userBooks = await bookService.getUserBooks()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <MainTitle>Рекомендации</MainTitle> */}
      {userBooks?.length ? (
        <UserBookList className="mb-12 md:mb-20" books={userBooks} />
      ) : null}
      <BookList books={data.items} />
    </div>
  )
}
