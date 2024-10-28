import { BookList } from "@/components/books"
import { UserBookList } from "@/components/books/user-books"
import { bookService } from "@/services/book.service"
import { recommendationsService } from "@/services/recommendations.service"

export default async function BooksPage() {
  const books = await recommendationsService.getRecommendations()
  const userBooks = await bookService.getUserBooks()
  console.log(books)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <MainTitle>Рекомендации</MainTitle> */}
      {userBooks?.length ? (
        <UserBookList className="mb-12 md:mb-20" books={userBooks} />
      ) : null}
      <BookList books={books} />
    </div>
  )
}
