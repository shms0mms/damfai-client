import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { useGenerateQuestions } from "@/hooks/useGenerateQuestions"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Skeleton } from "@/components/ui/skeleton"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { cn, randomNumber } from "@/lib/utils"

const formSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.number(),
      key: z.string(),
      isRight: z.boolean()
    })
  )
})

type FormSchema = z.infer<typeof formSchema>

type Question = {
  question: string
  options: Record<string, string>
  answer: string
}

export function Questions() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })

  const questionsCount = 2
  const {
    fields: answers,
    append,
    replace
  } = useFieldArray({
    name: "answers",
    control: form.control,
    rules: {
      required: true,
      maxLength: questionsCount,
      minLength: questionsCount
    }
  })
  const { id } = useParams<{ id: string }>()
  const { message } = useGenerateQuestions(+id, questionsCount)

  const [questions, setQuestions] = useState<Question[]>([])

  useEffect(() => {
    if (message?.length) {
      setQuestions(prev => [...prev, ...message])
    }
  }, [message?.length])

  const isQuestionsGenerating = questionsCount != questions?.length

  const onSubmit = (_data: FormSchema) => {
    // TODO: save on backend (for race)
  }
  return (
    <div className="flex min-h-full flex-col gap-10">
      {questions.length ? (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full flex-col gap-5"
            >
              {questions.map((question, i) => (
                <FormField
                  name="answers"
                  control={form.control}
                  key={i}
                  render={() => {
                    return (
                      <FormItem>
                        <FormLabel>{question.question}</FormLabel>
                        <RadioGroup
                          value={
                            answers.find(answer => answer.questionId === i)?.key
                          }
                          onValueChange={(key: string) => {
                            const answer = {
                              questionId: i,
                              key: key,
                              isRight: question.answer === key
                            }

                            if (
                              answers.length &&
                              answers.some(answer => answer.questionId === i)
                            )
                              replace(answer)
                            else append(answer)
                          }}
                        >
                          {Object.entries(question.options).map(
                            ([key, value]) => {
                              const submitCount = form.formState.submitCount
                              const isCorrect =
                                submitCount && key === question.answer
                              const isInCorrect =
                                submitCount && key !== question.answer

                              return (
                                <div
                                  key={key}
                                  className={cn(
                                    "flex items-center gap-2 rounded-md p-1",
                                    {
                                      "bg-green-800": isCorrect,
                                      "bg-red-950": isInCorrect
                                    }
                                  )}
                                >
                                  <RadioGroupItem
                                    disabled={!!submitCount}
                                    id={key}
                                    value={key}
                                  />
                                  <Label htmlFor={key}>{value}</Label>
                                </div>
                              )
                            }
                          )}
                        </RadioGroup>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              ))}

              <Button
                className="flex w-full items-center gap-2"
                disabled={isQuestionsGenerating || !!form.formState.submitCount}
                type="submit"
              >
                {isQuestionsGenerating ? (
                  <>
                    Остальные вопросы генерируются..
                    <Loader className="animate-spin" size={20} />
                  </>
                ) : (
                  "Завершить опрос"
                )}
              </Button>
            </form>
          </Form>
        </>
      ) : (
        <div className="flex h-full w-full flex-col gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex w-full flex-col gap-2">
              {Array({ length: randomNumber(2, 4) }).map((_, j) => (
                <Skeleton
                  key={j}
                  className="h-9"
                  style={{
                    width: randomNumber(100, 250)
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
