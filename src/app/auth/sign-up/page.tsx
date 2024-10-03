"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { useMutation } from "@tanstack/react-query"
import { format } from "date-fns"
import { AnimatePresence, motion } from "framer-motion"
import { CalendarIcon, Loader } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { UserSignUp } from "@/types/user"
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
import { Slider } from "@/components/ui/slider"
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
  password: z
    .string({ message: OPTIONS.required })
    .min(OPTIONS.password.value, {
      message: OPTIONS.password.message
    }),
  name: z.string({ message: OPTIONS.required }),
  surname: z.string({
    message: OPTIONS.required
  }),
  dob: z.date({
    required_error: "Дата рождения обязательная."
  })
})

const additionalFormSchema = z.object({
  readingTime: z
    .number()
    .min(1, {
      message: "Минимальное число часов читания должно быть не менее 1."
    })
    .max(8, {
      message: "Максимальное число часов читания в день не должно превышать 8."
    })
})

type FormSchema = z.infer<typeof formSchema>
type AdditionalFormSchema = z.infer<typeof additionalFormSchema>

export default function AuthForm() {
  const [step, setStep] = useState(1)
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })
  const readingSpeedForm = useForm<AdditionalFormSchema>({
    resolver: zodResolver(additionalFormSchema),
    defaultValues: {
      readingTime: 2
    }
  })
  const { push } = useRouter()
  const { mutate } = useMutation({
    mutationFn: (data: UserSignUp) => authService.register(data),
    onSuccess(data) {
      toast.success("Вы успешно зарегистрировались!")
      saveAccessToken(data.token)
      push(ROUTES.DASHBOARD)
    },
    onError(error) {
      toast.error(error.message)
    }
  })

  const onSubmit = () => setStep(2)

  const onAdditionalFormSubmit: SubmitHandler<
    AdditionalFormSchema
  > = values => {
    const formData = form.getValues()
    mutate({
      ...formData,
      ...values
    })
  }

  const isLoading =
    form.formState.isLoading || readingSpeedForm.formState.isLoading

  return (
    <div className="mx-auto space-y-6 sm:w-[400px] lg:w-[500px]">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Регистрация</h1>
        <p className="text-sm text-muted-foreground">
          {step === 1
            ? "Введите свой адрес электронной почты и пароль, чтобы зарегистрировать свой аккаунт."
            : "Укажите сколько вы читаете в день, это поможет  нам подобрать для вас идеальный план."}
        </p>
      </div>
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
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
                  name="email"
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Пароль</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ваш пароль"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && (
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Далее
                </Button>
              </form>
            </Form>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Form {...readingSpeedForm}>
              <form
                onSubmit={readingSpeedForm.handleSubmit(onAdditionalFormSubmit)}
                className="space-y-10"
              >
                <FormField
                  control={readingSpeedForm.control}
                  name="readingTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Скорость чтения</FormLabel>
                      <FormControl>
                        <Slider
                          min={1}
                          max={8}
                          minStepsBetweenThumbs={0.5}
                          step={0.5}
                          {...field}
                          value={[field.value]}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-[2.25rem_1fr] gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => setStep(1)}
                    size="icon"
                  >
                    <ArrowLeftIcon />
                  </Button>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && (
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Зарегистрироваться
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>

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
