import { zodResolver } from "@hookform/resolvers/zod"
import { type FC } from "react"
import { useForm } from "react-hook-form"
import { Button } from "../../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../../components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../components/ui/select"
import { Textarea } from "../../components/ui/textarea"
import {
  LangEnum,
  LevelEnum,
  SummarizeFormSchema,
  summarizeFormSchema
} from "../../lib/schemas"
import { cn } from "../../lib/utils"

type SummarizeFormProps = {
  onSubmit: (data: SummarizeFormSchema) => void
  className?: string
}

export const SummarizeForm: FC<SummarizeFormProps> = ({
  className,
  onSubmit
}) => {
  const form = useForm<SummarizeFormSchema>({
    resolver: zodResolver(summarizeFormSchema),
    defaultValues: {
      level: LevelEnum.medium,
      lang: LangEnum.ru
    }
  })

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col gap-6", className)}
        onSubmit={form.handleSubmit(data => {
          onSubmit(data)
          // form.reset({
          //   text: ""
          // })
        })}
      >
        <FormField
          name="level"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Уровень сжатия</FormLabel>
              <Select onValueChange={field.onChange} value={field.value ?? ""}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите уровень сжатия" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={LevelEnum.strong}>Сильно</SelectItem>
                  <SelectItem value={LevelEnum.medium}>Средне</SelectItem>
                  <SelectItem value={LevelEnum.small}>Слабо</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Выберите насколько сильно нужно сжать введенный текст
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="lang"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Язык для сжатия</FormLabel>
              <Select onValueChange={field.onChange} value={field.value ?? ""}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите язык сжатия" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={LangEnum.ru}>Русский</SelectItem>
                  <SelectItem value={LangEnum.en}>Английский</SelectItem>
                  <SelectItem value={LangEnum.zh}>Китайский</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Выберите язык для сжатого текста
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="text"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Текст</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Введите текст для суммаризации"
                  className="max-h-28 resize-y"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Введите найденный вами большой текст
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" data-testid="button">
          Суммаризировать
        </Button>
      </form>
    </Form>
  )
}
