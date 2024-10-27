"use client"

import { useQuery } from "@tanstack/react-query"
import html2pdf from "html2pdf.js"
import { Award, BookOpen, Download } from "lucide-react"
import { useContext, useRef } from "react"
import { AuthContext } from "@/components/providers/auth-profider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { FlipWords } from "@/components/ui/flip-words"
import { Separator } from "@/components/ui/separator"
import { bookService } from "@/services/book.service"
import { readBookService } from "@/services/read-book.service"

export default function FinishBookPage({
  params: { id }
}: {
  params: { id: string }
}) {
  const { isLoading: isFinishLoading } = useQuery({
    queryKey: ["finish/book", id],
    queryFn: () => readBookService.finishBook(+id)
  })
  const certificateRef = useRef(null)

  const downloadPDF = () => {
    const element = certificateRef.current
    const opt = {
      margin: 0.2,
      filename: "certificate.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "landscape" }
    }
    html2pdf().set(opt).from(element).save()
  }
  const { data, isLoading: isBookLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: () => bookService.getById(+id)
  })
  const bookTitle = data?.data?.title
  const author = data?.data?.author
  const { user } = useContext(AuthContext)
  const date = new Date().toLocaleDateString("ru-RU")
  const congratsMessage = "Поздравляем с успешным прочтением книги!"
  const isLoading = isBookLoading || isFinishLoading
  return (
    <>
      {isLoading ? (
        <div className="flex h-full w-full items-center justify-center">
          <FlipWords
            className="text-3xl"
            words={[
              "Подождите...",
              "Генерируем сертификат...",
              "Собираем данные...",
              "Загрузка..."
            ]}
          />
        </div>
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
          <Card ref={certificateRef} className="w-[800px] bg-card">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold tracking-tight">
                Сертификат о прочтении
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-10 pt-4">
              <div className="flex justify-center">
                <Badge variant="secondary" className="px-4 py-1 text-xl">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Достижение
                </Badge>
              </div>

              <div className="space-y-2 text-center">
                <p className="text-xl text-muted-foreground">
                  Настоящим подтверждается, что
                </p>
                <h2 className="text-3xl font-bold text-primary">
                  {user?.name} {user?.surname}
                </h2>
              </div>

              <Separator />

              <div className="space-y-2 text-center">
                <p className="text-xl text-muted-foreground">
                  успешно прочитал(а) книгу
                </p>
                <h3 className="text-2xl font-semibold">"{bookTitle}"</h3>
                <p className="text-lg text-muted-foreground">автора {author}</p>
              </div>

              <div className="flex justify-center">
                <Badge variant="outline" className="px-4 py-1 text-lg">
                  100% прочитано
                </Badge>
              </div>

              <p className="text-center text-lg text-muted-foreground">
                {congratsMessage}
              </p>

              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Дата выдачи: {date}
                </p>
                <Award className="h-16 w-16 text-primary opacity-20" />
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button onClick={downloadPDF} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Скачать PDF
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  )
}
