import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination"

type BooksPaginationProps = {
  pagination: {
    total: number
    page: number
    size: number
    pages: number
  }
  searchParams: Record<string, string>
}

export function BooksPagination({
  pagination,
  searchParams
}: BooksPaginationProps) {
  const searchParamsAsString = new URLSearchParams(searchParams).toString()

  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5

    if (pagination.pages <= maxVisiblePages) {
      for (let i = 1; i <= pagination.pages; i++) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink href={`/`} isActive={pagination.page === i}>
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
            <PaginationLink href={""} isActive={pagination.page === i}>
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
            <PaginationLink href="">{pagination.pages}</PaginationLink>
          </PaginationItem>
        )
      }
    }

    return pageNumbers
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href=""
            aria-disabled={pagination.page === 1}
            tabIndex={pagination.page === 1 ? -1 : 0}
          />
        </PaginationItem>
        {renderPageNumbers()}
        <PaginationItem>
          <PaginationNext
            href={""}
            aria-disabled={pagination.page === pagination.pages}
            tabIndex={pagination.page === pagination.pages ? -1 : 0}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
