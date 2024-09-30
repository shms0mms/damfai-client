"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Loader } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { UserSignIn } from "@/types/user"
import { saveAccessToken } from "@/utils/auth"
import { OPTIONS } from "@/config/options.config"
import { ROUTES } from "@/config/route.config"
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
  email: z
    .string({
      message: OPTIONS.required
    })
    .email({
      message: "Введите правильный адрес электронной почты"
    }),
  password: z.string({ message: OPTIONS.required }).min(8, {
    message: "Пароль должен содержать не менее 8 символов"
  })
})
type FormSchema = z.infer<typeof formSchema>
export default function AuthForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })
  const { push } = useRouter()
  const { mutate } = useMutation({
    mutationFn: (data: UserSignIn) => authService.login(data),
    onSuccess(data) {
      toast.success("Вы успешно вошли в систему!")
      saveAccessToken(data?.token)
      push(ROUTES.DASHBOARD)
    },
    onError(error) {
      toast.error(error.message)
    }
  })
  const onSubmit: SubmitHandler<FormSchema> = values => {
    mutate(values)
  }
  const isLoading = form.formState.isLoading
  return (
    <div className="mx-auto max-w-[500px] space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Войти</h1>
        <p className="text-sm text-muted-foreground">
          Введите свой адрес электронной почты и пароль, чтобы войти в свой
          аккаунт.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="m@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Ваш пароль" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            Войти
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm text-muted-foreground">
        Еще нету аккаунта?{" "}
        <Link
          href={ROUTES.SIGN_UP}
          className="underline underline-offset-4 hover:text-primary"
        >
          Зарегистрироваться
        </Link>
      </div>
    </div>
  )
}
