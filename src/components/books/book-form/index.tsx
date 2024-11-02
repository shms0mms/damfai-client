"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { type FC } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button, buttonVariants } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  targetOfDate: z.date(),
  withTarget: z.boolean().default(false).optional()
})

export type FormSchema = z.infer<typeof formSchema>
type BookFormProps = {
  className?: string
  onSubmit: (data: FormSchema) => void
  canToggleChecking?: boolean
  initialTargetOfDate?: Date
}

export const BookForm: FC<BookFormProps> = ({
  className,
  onSubmit,
  canToggleChecking,
  initialTargetOfDate
}) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetOfDate: initialTargetOfDate
        ? new Date(initialTargetOfDate)
        : new Date(),
      withTarget: true
    }
  })
  const withTarget = form.getValues("withTarget")

  const onSubmitFunc = (data: FormSchema) => {
    onSubmit?.(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitFunc)}
        className={cn("flex flex-col gap-8", className)}
      >
        {canToggleChecking && (
          <FormField
            control={form.control}
            name="withTarget"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Поставить цель</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="targetOfDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Выберите дату в которую хотите прочитать книгу
              </FormLabel>
              <Calendar
                mode="single"
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
                Выберите дату в которую хотите прочитать книгу, мы будем Вам
                напоминать об этом
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-full w-full">
          {withTarget
            ? "Начать читать с этой целью"
            : "Начать читать в своё удовольствие"}
        </Button>
      </form>
    </Form>
  )
}
