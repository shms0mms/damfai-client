import { Suspense } from "react"
import { Catalog } from "@/components/catalog"
import { BooksFilters } from "@/components/catalog/books-filters"
import { MainTitle } from "@/components/ui/main-title"
import { Skeleton } from "@/components/ui/skeleton"

type CatalogPageProps = { searchParams: Record<string, string> }

export default function CatalogPage({ searchParams }: CatalogPageProps) {
  const page = +(searchParams.page ?? 1)
  const size = +(searchParams.size ?? 10)

  return (
    <div className="px-4 py-8">
      <MainTitle>Каталог</MainTitle>
      <div className="grid grid-cols-1 items-start max-lg:gap-4 lg:grid-cols-[20rem_1fr] lg:gap-2">
        <BooksFilters />
        <div className="space-y-6 lg:px-4">
          <Suspense
            fallback={
              <div className="grid min-h-[72.5vh] grid-cols-1 gap-2 min-[500px]:grid-cols-2 min-[700px]:grid-cols-3 2xl:grid-cols-4">
                {new Array(20).fill(null).map(_ => (
                  <Skeleton className="h-full w-auto max-sm:h-[30rem] min-[700px]:h-[30rem] md:h-96 md:w-auto xl:h-[36rem]" />
                ))}
              </div>
            }
          >
            <Catalog page={page} size={size} filters={searchParams} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
