"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Chapter } from "@/types/book"
import { ReadBookData } from "@/hooks/useReadBookData"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"
import { Purpose } from "./purpose"
import { cn } from "@/lib/utils"

type MenuProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleChapterChange: (value: string) => void
  readBookData: ReadBookData
  currentChapter: Chapter
}
export function Menu({
  readBookData,
  open,
  setOpen,
  currentChapter
}: MenuProps) {
  const { id: bookId } = useParams()
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="left"
        className="w-[300px] overflow-auto sm:w-[400px]"
      >
        <SheetHeader>
          <SheetTitle>{readBookData?.title}</SheetTitle>
          <SheetDescription>
            <p>
              <strong>Автор:</strong> {readBookData?.author}
            </p>
            <p>
              <strong>Название:</strong> {readBookData?.title}
            </p>
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          {/* <Select
            onValueChange={handleChapterChange}
            value={currentChapter?.toString()}
          >
            <SelectTrigger>
              {currentChapter?.id} глава
              <SelectValue placeholder="Выберите главу" />
            </SelectTrigger>
            <SelectContent>
              {readBookData?.chapters?.length
                ? readBookData?.chapters?.map(chapter => (
                    <SelectItem key={chapter.id} value={chapter.id.toString()}>
                      {chapter.title}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select> */}
          <Purpose type="edit" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "flex h-auto w-full items-center justify-start gap-3 rounded-sm"
                )}
              >
                Сменить формат
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={"start"} className="w-[215px]">
              <DropdownMenuItem asChild>
                <Link href={"?format=compressed"}>Сжатый формат</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={"?format=full"}>Полный формат</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild className="w-full" type="button">
            <Link
              href={`/books/read/${bookId}?page=${readBookData?.page?.id}&chapter=${currentChapter?.id}&questions=generate`}
            >
              Перейти сразу к вопросам
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
