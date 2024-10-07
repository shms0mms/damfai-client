"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
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
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"
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
type PurposeFormData = z.infer<typeof purposeSchema>

interface PurposeProps {
  type: "set" | "edit"
  onSubmit?: (data: PurposeFormData) => void
  initialMinDays?: number
  initialMaxDays?: number
  className?: string
}

export default function Purpose({
  type,
  onSubmit,
  initialMinDays = 1,
  initialMaxDays = 7,
  className
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
    onSubmit?.(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn("flex flex-col space-y-4", className)}
      >
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
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="minDays"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Минимум дней</FormLabel>
                <FormControl>
                  <Input
                    disabled={!form.getValues("isChecking")}
                    type="number"
                    {...field}
                    onChange={e => field.onChange(+e.target.value)}
                    min={1}
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
                    disabled={!form.getValues("isChecking")}
                    type="number"
                    {...field}
                    onChange={e => field.onChange(Number(e.target.value))}
                    min={1}
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
        <Button type="submit">
          {type === "set" ? "Поставить цель" : "Изменить цель"}
        </Button>
      </form>
    </Form>
  )
}
