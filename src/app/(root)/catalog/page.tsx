import { Catalog } from "@/components/catalog"
import { MainTitle } from "@/components/ui/main-title"

type CatalogPageProps = { searchParams: Record<string, string> }

export default function CatalogPage({ searchParams }: CatalogPageProps) {
  const page = +(searchParams.page ?? 1) - 1
  const size = +(searchParams.size ?? 10)

  return (
    <div className="px-4 py-8">
      <MainTitle>Каталог</MainTitle>
      <Catalog page={page} size={size} filters={searchParams} />
    </div>
  )
}
