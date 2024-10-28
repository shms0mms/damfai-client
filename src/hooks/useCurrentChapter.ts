import { ReadBookData } from "./useReadBookData"
import { ReadBookPageProps } from "@/app/(read-book)/books/read/[id]/page"

export const useCurrentChapter = (
  readBookData: ReadBookData,
  searchParams: ReadBookPageProps["searchParams"]
) => {
  return readBookData?.chapters.find(chapter => {
    return searchParams.chapter
      ? chapter.id === +searchParams.chapter
      : chapter.numberOfChapter === 1
  })!
}
