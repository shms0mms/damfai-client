"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

// Определение схемы валидации
const purposeSchema = z
  .object({
    minDays: z.number().min(1, "Минимальное количество дней - 1"),
    maxDays: z.number().min(1, "Минимальное количество дней - 1"),
    isChecking: z.boolean().default(false).optional()
  })
  .refine(data => data.maxDays >= data.minDays, {
    message:
      "Максимальное количество дней должно быть больше или равно минимальному",
    path: ["maxDays"]
  })

// Тип данных формы
export type PurposeFormData = z.infer<typeof purposeSchema>

type PurposeProps = {
  type: "set" | "edit"
  submitCallback?: (data: PurposeFormData) => void
  initialMinDays?: number
  initialMaxDays?: number
  className?: string
  canToggleChecking?: boolean
}

export function Purpose({
  type,
  submitCallback,
  initialMinDays = 1,
  initialMaxDays = 7,
  className,
  canToggleChecking
}: PurposeProps) {
  const form = useForm<PurposeFormData>({
    resolver: zodResolver(purposeSchema),
    defaultValues: {
      minDays: initialMinDays,
      maxDays: initialMaxDays,
      isChecking: true
    }
  })

  const handleSubmit = (data: PurposeFormData) => {
    submitCallback && submitCallback(data)
  }
  const isChecking = form.getValues("isChecking")

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn("flex flex-col space-y-4", className)}
      >
        {canToggleChecking && (
          <FormField
            control={form.control}
            name="isChecking"
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
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="minDays"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Минимум дней</FormLabel>
                <FormControl>
                  <Input
                    disabled={!isChecking}
                    type="number"
                    {...field}
                    onChange={e => field.onChange(+e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxDays"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Максимум дней</FormLabel>
                <FormControl>
                  <Input
                    disabled={!isChecking}
                    type="number"
                    {...field}
                    onChange={e => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormDescription>
          Укажите диапазон дней, за которые вы планируете прочитать книгу.
        </FormDescription>
        <Button type="submit" disabled={!isChecking}>
          {type === "set" ? "Поставить цель" : "Изменить цель"}
        </Button>
        {!isChecking && <Button type="submit">Начать читать</Button>}
      </form>
    </Form>
  )
}
