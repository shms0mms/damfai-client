import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import { useParams } from "next/navigation"
import { useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
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

const data = [
  {
    answer: "a",
    options: {
      a: "Князь Мышь",
      b: "Князь Олег",
      c: "Князь Кирилл"
    },
    question: "Кто главный герой?"
  },

  {
    answer: "b",
    options: {
      a: "Грустный",
      b: "Веселый",
      c: "Супер грустный"
    },
    question: "Какой был конец?"
  }
]

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
  const { id } = useParams<{ id: string }>()
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

  const [questions, setQuestions] = useState<Question[]>(data)
  // const { message } = useGenerateQuestions(+id, questionsCount)

  const isQuestionsGenerating = questionsCount != questions?.length

  // useEffect(() => {
  //   if (message?.length) {
  //     setQuestions(prev => [...prev, ...message])
  //   }
  // }, [message?.length])
  const onSubmit = (data: FormSchema) => {}
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
                  render={({ field }) => {
                    return (
                      <FormItem className={""}>
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
                              const isCheckingAnswers =
                                form.formState.submitCount
                              const isCorrect =
                                isCheckingAnswers &&
                                answers.find(a => a.questionId === i)?.key ===
                                  key
                              const isInCorrect =
                                isCheckingAnswers &&
                                answers.find(a => a.questionId === i)?.key !==
                                  key

                              return (
                                <div
                                  className={cn(
                                    "flex items-center gap-2 rounded-md p-1",
                                    {
                                      "bg-green-800": isCorrect,
                                      "bg-red-950": isInCorrect
                                    }
                                  )}
                                >
                                  <RadioGroupItem
                                    disabled={!!isCheckingAnswers}
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
          {new Array(3).fill(0).map(() => (
            <div className="flex w-full flex-col gap-2">
              {new Array(randomNumber(2, 4)).fill(0).map(() => (
                <Skeleton
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

{
  /* {questions
  .filter((item, index, arr) => arr.indexOf(item) === index)
  .map(question => {
    return (
      <>
        <motion.li key={question.question} variants={itemVariants}>
          <Label className="font-normal opacity-60">
            {question.question}
          </Label>
        </motion.li>
        <motion.div
          variants={variants}
          initial="closed"
          animate="open"
        >
          <RadioGroup>
            {Object.keys(question.options).map((key, k) => {
              const isCorrectAnswer = answers.find(
                i => i.answer == key
              )
              const isUseAnswer = !!answers.find(
                a => a.id == question.question
              )
              return (
                <motion.div
                  key={k}
                  variants={itemVariants}
                  className={`flex w-full cursor-pointer items-center gap-5 rounded-md p-3 ${isChecking && isCorrectAnswer ? "bg-muted" : isChecking && !isCorrectAnswer && isUseAnswer ? "border border-red-400" : "bg-foreground/5"}`}
                >
                  <RadioGroupItem
                    value={key}
                    key={k}
                  ></RadioGroupItem>
                  <Label>{question.options[key]}</Label>
                </motion.div>
              )
            })}
          </RadioGroup>
        </motion.div>
      </>
    )
  })} */
}

// setAnswers(p => {
//   const copy = structuredClone(p)
//   if (
//     copy.findIndex(
//       c => c.id === question.question
//     ) === -1
//   )
//     copy.push({
//       answer: key,
//       id: question.question
//     })
//   else {
//     const index = copy.findIndex(
//       c => c.id === question.question
//     )
//     // copy.splice(index, 1)
//     copy[index]!.answer = key
//   }
//   return copy
// })
