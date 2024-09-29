"use client"

import Link from "next/link"
import { useState } from "react"
import { Rating } from "../ui/rating"
import { BooksFilters } from "./books-filters"
import { Pagination } from "./pagination"
import { bookService } from "@/services/book.service"

interface Book {
  id: number
  title: string
  author: string
  desc: string
  written_date?: Date
  chapters: number
  ratings: number
}

interface BookListProps {
  initialBooks: Book[]
  totalBooks: number
}

export function BookList({ initialBooks, totalBooks }: BookListProps) {
  const [books, setBooks] = useState(initialBooks)
  const [currentPage, setCurrentPage] = useState(1)
  const booksPerPage = 10

  const fetchBooks = async (page: number) => {
    const data = await bookService.getAll({ page, perPage: booksPerPage })
    setBooks(data.books)
    setCurrentPage(page)
  }

  return (
    <div className="flex min-h-[80vh] flex-col justify-between">
      <div className="grid grid-cols-[10rem_1fr] gap-4">
        <BooksFilters />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map(book => (
            <li key={book.id}>
              <Link
                className="block rounded-lg bg-white p-6 shadow-md"
                href={`/book/${book.id}`}
              >
                <h2 className="mb-2 text-xl font-semibold">{book.title}</h2>
                <p className="mb-2 text-gray-600">by {book.author}</p>
                <p className="mb-4 text-sm text-gray-500">{book.desc}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{book.chapters} страниц(а)</span>
                  <Rating rating={4.5} showText={false} disabled />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={totalBooks}
        itemsPerPage={booksPerPage}
        onPageChange={fetchBooks}
      />
    </div>
  )
}
