"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
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

// Определение схемы валидации
const purposeSchema = z
  .object({
    minDays: z.number().min(1, "Минимальное количество дней - 1"),
    maxDays: z.number().min(1, "Минимальное количество дней - 1")
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
  onSubmit: (data: PurposeFormData) => void
  initialMinDays?: number
  initialMaxDays?: number
}

export default function Purpose({
  type,
  onSubmit,
  initialMinDays = 1,
  initialMaxDays = 7
}: PurposeProps) {
  const form = useForm<PurposeFormData>({
    resolver: zodResolver(purposeSchema),
    defaultValues: {
      minDays: initialMinDays,
      maxDays: initialMaxDays
    }
  })

  const handleSubmit = (data: PurposeFormData) => {
    onSubmit(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="minDays"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Минимум дней</FormLabel>
                <FormControl>
                  <Input
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
          <FormField
            control={form.control}
            name="maxDays"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Максимум дней</FormLabel>
                <FormControl>
                  <Input
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
