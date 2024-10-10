import Link from "next/link"
import { Chapter } from "@/types/book"
import { ReadBookData } from "@/hooks/useReadBookData"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "../ui/sheet"
import { Purpose } from "./purpose"
import { cn } from "@/lib/utils"

type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleChapterChange: (value: string) => void
  data: ReadBookData
  currentChapter: Chapter
}
export function Menu({
  data,
  open,
  setOpen,
  currentChapter,
  handleChapterChange
}: Props) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>{data?.title}</SheetTitle>
          <SheetDescription>
            <p>
              <strong>Автор:</strong> {data?.author}
            </p>
            <p>
              <strong>Название:</strong> {data?.title}
            </p>

            <p>
              <strong>Всего страниц:</strong> {data?.totalPages}
            </p>
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <Select
            onValueChange={handleChapterChange}
            value={currentChapter?.toString()}
          >
            <SelectTrigger>
              {currentChapter?.id} глава
              <SelectValue placeholder="Выберите главу" />
            </SelectTrigger>
            <SelectContent>
              {data?.chapters?.length
                ? data?.chapters?.map(chapter => (
                    <SelectItem key={chapter.id} value={chapter.id.toString()}>
                      {chapter.title}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
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
        </div>
      </SheetContent>
    </Sheet>
  )
}
