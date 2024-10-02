import { useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { OPTIONS } from "@/config/options.config"
import { AuthContext } from "@/providers/auth"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

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
export default function EditProfile() {
  const { user } = useContext(AuthContext)
  const form = useForm<FormSchema>()
  const onSubmit: SubmitHandler<FormSchema> = data => {}
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button">Редактировать</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Редактировать</DialogTitle>
          <DialogDescription>
            Внесите изменения в свой профиль здесь. Когда закончите, нажмите
            сохранить.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="email"
              defaultValue={user?.email}
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
              defaultValue={user?.name}
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
              defaultValue={user?.name}
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
      </DialogContent>
    </Dialog>
  )
}
