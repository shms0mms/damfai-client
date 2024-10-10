import { ReadBookData } from "./useReadBookData"
import { ReadBookPageProps } from "@/app/(read-book)/books/read/[id]/page"

const useCurrentChapter = (
  data: ReadBookData,
  searchParams: ReadBookPageProps["searchParams"]
) => {
  return data?.chapters.find(
    chapter =>
      chapter.id ===
      (searchParams.chapter ? +searchParams.chapter : data?.chapters[0]?.id)
  )!
}

export default useCurrentChapter
