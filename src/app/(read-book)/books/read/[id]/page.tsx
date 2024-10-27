import { ReadBook } from "@/components/read-book"

export type ReadBookPageProps = {
  params: {
    id: string
  }
  searchParams: {
    page?: string
    chapter?: string
    questions?: string
  }
}

export default function ReadBookPage({
  params,
  searchParams
}: ReadBookPageProps) {
  return <ReadBook params={params} searchParams={searchParams} />
}
