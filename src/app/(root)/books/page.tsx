import { BookList } from "@/components/books"
import { bookService } from "@/services/book.service"

export default async function BooksPage() {
  const data = await bookService.getAll({ page: 1, size: 100 })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <MainTitle>Рекомендации</MainTitle> */}
      <BookList books={data.items} />
    </div>
  )
}
