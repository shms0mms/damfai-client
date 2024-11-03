"use client"

import { useMutation, useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { useParams } from "next/navigation"
import { toast } from "sonner"
import { useCustomSearchParams } from "@/hooks/useCustomSearchParams"
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
import { BookForm, FormSchema } from "../books/book-form"
import { cn } from "@/lib/utils"
import { readBookService } from "@/services/read-book.service"

type MenuProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleChapterChange?: (value: string) => void
  readBookData: Partial<ReadBookData>
}
export function Menu({ readBookData, open, setOpen }: MenuProps) {
  const { id: bookId } = useParams()
  const { data, refetch } = useQuery({
    queryKey: ["purpose", bookId],
    queryFn: () => readBookService.getTarget(+bookId!)
  })
  const { mutate } = useMutation({
    mutationFn: (data: FormSchema) =>
      readBookService.updateTarget(+bookId!, data),
    onSuccess: async () => {
      toast.success("Вы успешно сменили цель чтения!")
      await refetch()
    },
    onError: () => {
      toast.error("Произошла ошибка, повторите попытку позже!")
    }
  })
  const { searchParams } = useCustomSearchParams()

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
          <BookForm
            onSubmit={(data: FormSchema) => {
              mutate(data)
            }}
            initialTargetOfDate={data?.target_of_date}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "flex h-auto w-full items-center justify-start gap-3 rounded-sm"
                )}
              >
                Сменить формат чтения
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
          {/* <Button asChild className="w-full" type="button">
            <Link
              href={`/books/read/${bookId}?questions=generate&${searchParams}`}
            >
              Перейти сразу к вопросам
            </Link>
          </Button> */}
        </div>
      </SheetContent>
    </Sheet>
  )
}
