import { BookList } from "@/components/books"
import { EmotesBooks } from "@/components/books/emotes-books"
import { UserBookList } from "@/components/books/user-books"
import { MainTitle } from "@/components/ui/main-title"
import { bookService } from "@/services/book.service"
import { emotesBooksService } from "@/services/emotes-books.service"
import { recommendationsService } from "@/services/recommendations.service"

export default async function BooksPage() {
  const books = await recommendationsService.getRecommendations()
  const emotesBooks = await emotesBooksService.getEmotesBooks()
  const userBooks = await bookService.getUserBooks()

  return (
    <div className="container mx-auto px-4 py-8">
      {userBooks?.length ? (
        <>
          <MainTitle>Рекомендации</MainTitle>
          <UserBookList className="mb-12 md:mb-20" books={userBooks} />
        </>
      ) : null}
      <EmotesBooks books={emotesBooks} />
      <BookList books={books} />
    </div>
  )
}
