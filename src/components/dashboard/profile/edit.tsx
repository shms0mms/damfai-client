"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import type { UserUpdate } from "@/types/user"
import { OPTIONS } from "@/config/options.config"
import { AuthContext } from "@/components/providers/auth-provider"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authService } from "@/services/auth.service"

const formSchema = z.object({
  name: z.string({
    message: OPTIONS.required
  }),
  surname: z.string({
    message: OPTIONS.required
  }),
  email: z.string({ message: OPTIONS.required }).email({
    message: OPTIONS.email.message
  }),
  password: z
    .string({
      message: OPTIONS.required
    })
    .min(OPTIONS.password.value, {
      message: OPTIONS.password.message
    })
})
type FormSchema = z.infer<typeof formSchema>
export function EditProfile() {
  const ctx = useContext(AuthContext)
  const form = useForm<FormSchema>({})
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: (data: UserUpdate) => authService.update(data),
    onSuccess() {
      toast.success("Профиль успешно обновлен!")
      queryClient.invalidateQueries({
        queryKey: ["user"]
      })
    },
    onError(error) {
      toast.error(error.message)
    }
  })
  const onSubmit: SubmitHandler<FormSchema> = data => {
    mutate({ ...data, password: (data.password || null) as string })
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-4 py-4"
        >
          <FormField
            control={form.control}
            name="email"
            defaultValue={ctx?.user?.email}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Почта</FormLabel>
                <FormControl>
                  <Input placeholder="m@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            defaultValue={ctx?.user?.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input placeholder="Ваше имя" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            defaultValue={ctx?.user?.surname}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Фамилия</FormLabel>
                <FormControl>
                  <Input placeholder="Ваша фамилия" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            defaultValue={undefined}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input placeholder="Новый пароль" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="ml-auto">
            Сохранить
          </Button>
        </form>
      </Form>
    </>
  )
}
