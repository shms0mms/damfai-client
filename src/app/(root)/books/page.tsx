import { Book } from "@/types/book"
import { features } from "@/components/blocks/bento"
import { BookList } from "@/components/books"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { bookService } from "@/services/book.service"
import { emotesBooksService } from "@/services/emotes-books.service"
import { recommendationsService } from "@/services/recommendations.service"

export default async function BooksPage() {
  // Рекомендации (книги по жанрам)
  const books = await recommendationsService.getRecommendations()
  // Книги по эмоциям
  const emotesBooks = await emotesBooksService.getEmotesBooks()
  // Пользовательские книги
  const userBooks = await bookService.getUserBooks()

  // Книги по жанрам
  const bookGanres = Array.from(new Set(books.map(book => book.ganres).flat()))
  const ganreAndBook: Record<string, Book[]> = {}
  bookGanres.forEach(ganre => {
    ganreAndBook[ganre.ganre] = books.filter(book =>
      book.ganres.includes(ganre)
    )
  })
  const ganres = Object.keys(ganreAndBook)

  const sections = [
    {
      title: "Вы не дочитали",
      books: userBooks
    },
    {
      title: "Книги по эмоциям",
      books: emotesBooks,
      block: (
        <div className="container">
          <BentoGrid>
            <BentoCard {...features[0]!} />
            <BentoCard {...features[2]!} />
          </BentoGrid>
        </div>
      )
    },
    {
      title: "Вам может понравиться",
      books
    },
    ...ganres.map(ganre => ({
      title: ganre,
      books: ganreAndBook[ganre]!
    }))
  ]

  return (
    <div className="py-8">
      <BookList sections={sections} />
    </div>
  )
}
