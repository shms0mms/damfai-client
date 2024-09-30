"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { format } from "date-fns"
import { CalendarIcon, Loader } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { User } from "@/types/user"
import { saveAccessToken } from "@/utils/auth"
import { OPTIONS } from "@/config/options.config"
import { ROUTES } from "@/config/route.config"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
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
  }),
  name: z.string({ message: OPTIONS.required }),
  surname: z.string({
    message: OPTIONS.required
  }),
  dob: z.date({
    required_error: "Дата рождения обязательная."
  })
})
type FormSchema = z.infer<typeof formSchema>
export default function AuthForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })
  const { push } = useRouter()
  const { mutate } = useMutation({
    mutationFn: (data: User) => authService.register(data),
    onSuccess(data) {
      toast.success("Вы успешно зарегистрировались!")
      saveAccessToken(data.token)
      push(ROUTES.DASHBOARD)
    },
    onError(error) {
      toast.error(error.message)
    }
  })
  const onSubmit: SubmitHandler<FormSchema> = values => {
    const _dob = values.dob.toLocaleDateString()
    const dob = _dob.replaceAll(".", "-").split("-").reverse().join("-")
    mutate({
      ...values,
      // @ts-expect-error asd
      dob
    })
  }
  const isLoading = form.formState.isLoading
  return (
    <div className="mx-auto max-w-[500px] space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Регистрация</h1>
        <p className="text-sm text-muted-foreground">
          Введите свой адрес электронной почты и пароль, чтобы зарегистрировать
          свой аккаунт.
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
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
            render={({ field }) => (
              <FormItem>
                <FormLabel>Surname</FormLabel>
                <FormControl>
                  <Input placeholder="Ваша фамилия" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>Дата рождения</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Выберите дату</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      toDate={field.value}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
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
        Уже есть аккаунт?{" "}
        <Link
          href={ROUTES.SIGN_IN}
          className="underline underline-offset-4 hover:text-primary"
        >
          Войти
        </Link>
      </div>
    </div>
  )
}
