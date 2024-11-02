import { Book } from "@/types/book"
import { BookList } from "@/components/books"
import { bookService } from "@/services/book.service"
import { emotesBooksService } from "@/services/emotes-books.service"
import { recommendationsService } from "@/services/recommendations.service"

export default async function BooksPage() {
  const books = await recommendationsService.getRecommendations()
  const emotesBooks = await emotesBooksService.getEmotesBooks()
  const userBooks = await bookService.getUserBooks()

  const bookGanres = books.map(book => book.ganres).flat()

  const ganreAndBook: Record<string, Book[]> = {}

  bookGanres.forEach(ganre => {
    ganreAndBook[ganre] = books.filter(book => {
      return book.ganres.includes(ganre)
    })
  })

  const ganres = Object.keys(ganreAndBook)

  const sections = [
    {
      title: "Вы не дочитали",
      books: userBooks
    },
    {
      title: "Книги по вашему настроению",
      books: emotesBooks
      // block: (
      //   <div className="container">
      //     <BentoGrid>
      //       <BentoCard {...features[0]!} />
      //       <BentoCard {...features[2]!} />
      //     </BentoGrid>
      //   </div>
      // )
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
