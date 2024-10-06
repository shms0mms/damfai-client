import { zodResolver } from "@hookform/resolvers/zod"
<<<<<<< HEAD
import { motion } from "framer-motion"
=======
>>>>>>> a09e3c3a83c199a85e7b63ee3f83169b02398dc8
import { Loader } from "lucide-react"
import { useParams } from "next/navigation"
import { useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
<<<<<<< HEAD
import useGenerateQuestions from "@/hooks/useGenerateQuestions"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
=======
import { useGenerateQuestions } from "@/hooks/useGenerateQuestions"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Skeleton } from "@/components/ui/skeleton"
import { randomNumber } from "@/lib/utils"
>>>>>>> a09e3c3a83c199a85e7b63ee3f83169b02398dc8

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
<<<<<<< HEAD
const itemVariants = {
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}
=======

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

>>>>>>> a09e3c3a83c199a85e7b63ee3f83169b02398dc8
type Question = {
  question: string
  options: Record<string, string>
  answer: string
}

const formSchema = z.object({})

export default function Questions() {
<<<<<<< HEAD
  const questionsCount = 2
  const { id } = useParams()
  const form = useForm({
    resolver: zodResolver(formSchema)
  })
  const { fields: questions } = useFieldArray({
    name: "questions",
    control: form.control
  })
  const { message } = useGenerateQuestions(String(id), questionsCount)

  const [isChecking, setChecking] = useState(false)

=======
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
  const { message } = useGenerateQuestions(+id, questionsCount)

  const isQuestionsGenerating = questionsCount != questions?.length

  // useEffect(() => {
  //   if (message?.length) {
  //     setQuestions(prev => [...prev, ...message])
  //   }
  // }, [message?.length])
>>>>>>> a09e3c3a83c199a85e7b63ee3f83169b02398dc8
  return (
    <div className="flex min-h-full flex-col gap-10">
      {questions.length ? (
        <>
          <Form {...form}>
            <form className="flex w-full flex-col gap-5">
              {questions.map((question, i) => (
                <FormField
                  name="answers"
                  control={form.control}
                  key={i}
                  render={({ field }) => (
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
                          ([key, value]) => (
                            <div className="flex items-center gap-2">
                              <RadioGroupItem id={key} value={key} />
                              <Label htmlFor={key}>{value}</Label>
                            </div>
                          )
                        )}
                      </RadioGroup>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </form>
          </Form>

          <Button
            className="flex w-full items-center gap-2"
            disabled={isQuestionsGenerating}
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
