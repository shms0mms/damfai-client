import { ReadBookData } from "./useReadBookData"
import { ReadBookPageProps } from "@/app/(read-book)/books/read/[id]/page"

export const useCurrentChapter = (
  readBookData: ReadBookData,
  searchParams: ReadBookPageProps["searchParams"]
) => {
  return readBookData?.chapters.find(
    chapter =>
      chapter.id ===
      (searchParams.chapter
        ? +searchParams.chapter
        : readBookData?.chapters[0]?.id)
  )!
}
