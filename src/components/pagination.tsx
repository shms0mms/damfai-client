import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationRoot
} from "@/components/ui/pagination"
import type { Pagination as TPagination } from "@/types"

type PaginationProps = {
  pagination: TPagination
  searchParams: Record<string, string>
}

export function Pagination({ pagination, searchParams }: PaginationProps) {
  if ("page" in searchParams) delete searchParams?.page
  const searchParamsAsString = new URLSearchParams(searchParams).toString()

  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5

    if (pagination.pages <= maxVisiblePages) {
      for (let i = 1; i <= pagination.pages; i++) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={`/catalog?page=${i}&${searchParamsAsString}`}
              isActive={pagination.page === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        )
      }
    } else {
      const startPage = Math.max(1, pagination.page - 2)
      const endPage = Math.min(
        pagination.pages,
        startPage + maxVisiblePages - 1
      )

      if (startPage > 1) {
        pageNumbers.push(
          <PaginationItem key={1}>
            <PaginationLink
              href={`/books?page=${pagination.page}&${searchParamsAsString}`}
            >
              1
            </PaginationLink>
          </PaginationItem>
        )
        if (startPage > 2) {
          pageNumbers.push(<PaginationEllipsis key="ellipsis-start" />)
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={`?page=${i}&${searchParamsAsString}`}
              isActive={pagination.page === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        )
      }

      if (endPage < pagination.pages) {
        if (endPage < pagination.pages - 1) {
          pageNumbers.push(<PaginationEllipsis key="ellipsis-end" />)
        }
        pageNumbers.push(
          <PaginationItem key={pagination.pages}>
            <PaginationLink
              href={`?page=${pagination.pages}&${searchParamsAsString}`}
            >
              {pagination.pages}
            </PaginationLink>
          </PaginationItem>
        )
      }
    }

    return pageNumbers
  }

  return (
    <PaginationRoot>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${pagination.page > 0 ? pagination.page : 1}&${searchParamsAsString}`}
            aria-disabled={pagination.page === 1}
            isActive={pagination.page === 1}
            tabIndex={pagination.page === 1 ? -1 : 0}
          />
        </PaginationItem>
        {renderPageNumbers()}
        <PaginationItem>
          <PaginationNext
            href={`?page=${pagination.page < pagination.pages ? pagination.page : pagination.pages}&${searchParamsAsString}`}
            isActive={pagination.page === pagination.pages}
            aria-disabled={pagination.page === pagination.pages}
            tabIndex={pagination.page === pagination.pages ? -1 : 0}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  )
}
