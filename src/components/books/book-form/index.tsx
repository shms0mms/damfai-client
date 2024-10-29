"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { add } from "date-fns"
import { type FC } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { type Book as TBook } from "@/types/book"
import { Button, buttonVariants } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { cn } from "@/lib/utils"

type BookFormProps = {
  book: TBook
  className?: string
}

const formSchema = z.object({
  dates: z.object({ from: z.date(), to: z.date() })
})

type FormSchema = z.infer<typeof formSchema>

export const BookForm: FC<BookFormProps> = ({ book: _book, className }) => {
  const form = useForm<FormSchema>({
    defaultValues: {
      dates: {
        from: new Date(),
        to: add(new Date(), {
          days: 7
        })
      }
    },
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data: FormSchema) => {
    console.log(data)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-8", className)}
      >
        <FormField
          control={form.control}
          name="dates"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Сроки для прочтения книги</FormLabel>
              <Calendar
                mode="range"
                selected={field.value}
                onSelect={field.onChange}
                className="w-auto"
                initialFocus
                classNames={{
                  head_cell:
                    "text-muted-foreground rounded-md w-7 lg:w-10 font-normal text-[0.8rem]",
                  head_row: "flex lg:gap-2",
                  nav_button: cn(
                    buttonVariants({ variant: "outline" }),
                    "h-8 w-8 lg:h-10 lg:w-10 bg-transparent p-0 opacity-50 hover:opacity-100"
                  ),
                  day: cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-7 w-7 lg:h-10 lg:w-10 p-0 font-normal aria-selected:opacity-100"
                  )
                }}
              />
              <FormDescription>
                Сроки в которые вы хотите прочитать эту книгу, мы будем Вам
                напоминать об этом
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-full w-full">Начать читать книгу</Button>
      </form>
    </Form>
  )
}
