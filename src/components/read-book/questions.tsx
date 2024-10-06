import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Loader } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import useGenerateQuestions from "@/hooks/useGenerateQuestions"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,

      delayChildren: 0.8
    }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}
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
    answer: "a",
    options: {
      a: "Мышь",
      b: "Кирилла",
      c: "Олега"
    },
    question: "Кого убили в конце?"
  }
  // {
  //   answer: "b",
  //   options: {
  //     a: "Грустный",
  //     b: "Веселый",
  //     c: "Супер грустный"
  //   },
  //   question: "Какой был конец?"
  // }
]
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
type Question = {
  question: string
  options: Record<string, string>
  answer: string
}

const formSchema = z.object({})

export default function Questions() {
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

  return (
    <motion.div
      key={"questions"}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-full flex-col gap-5"
    >
      {questions.length ? (
        <>
          <motion.ul
            className="flex w-full flex-col gap-2"
            variants={variants}
            initial={"closed"}
            animate="open"
          >
            {questions
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
              })}
          </motion.ul>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.8
              }
            }}
          >
            <Button
              className="flex w-full items-center gap-2"
              variant={"outline"}
              onClick={() => setChecking(true)}
              disabled={
                questionsCount != questions?.length ||
                answers.length != questions?.length
              }
            >
              {questionsCount != questions?.length ? (
                <>
                  Остальные вопросы генерируются..
                  <Loader className="animate-spin" size={20} />
                </>
              ) : (
                "Завершить опрос"
              )}
            </Button>
          </motion.div>
        </>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-sm text-foreground/60">
          Идёт генерация вопросов, пожалуйста, подождите..
          <Loader className="animate-spin" size={20} />
        </div>
      )}
    </motion.div>
  )
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
