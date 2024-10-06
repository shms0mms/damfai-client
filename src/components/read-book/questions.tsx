import { motion } from "framer-motion"
import { Loader } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { useState } from "react"
import useGenerateQuestions from "@/hooks/useGenerateQuestions"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}
interface Question {
  question: string
  options: Record<string, string>
  answer: string
}
export default function Questions() {
  const { id } = useParams()
  const [questions, setQuestions] = useState<Question[]>([
    {
      answer: "a",
      options: {
        a: "Князь Мышь",
        b: "Князь Мышь",
        c: "Князь Мышь"
      },
      question: "Кто главный герой?"
    },
    {
      answer: "a",
      options: {
        a: "Князь Мышь",
        b: "Князь Мышь",
        c: "Князь Мышь"
      },
      question: "Кто главный герой?"
    },
    {
      answer: "b",
      options: {
        a: "Князь Мышь",
        b: "Князь Мышь",
        c: "Князь Мышь"
      },
      question: "Кто главный герой?"
    }
  ])
  const { message } = useGenerateQuestions(String(id))

  // useEffect(() => {
  //   if (message?.length) {
  //     setQuestions(prev => [...prev, ...message])
  //   }
  // }, [message?.length])
  const [currentAnswer, setCurrentAnswer] = useState<string>("")

  return (
    <motion.div
      key={"questions"}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
    >
      {questions.length ? (
        <>
          <motion.ul
            className="flex h-full w-full flex-col gap-2"
            variants={variants}
          >
            {questions
              .filter((item, index, arr) => arr.indexOf(item) === index)
              .map(question => (
                <>
                  {" "}
                  <motion.li
                    className=""
                    key={question.question}
                    variants={itemVariants}
                  >
                    <Label className="font-normal opacity-60">
                      {question.question}
                    </Label>
                  </motion.li>
                  <RadioGroup
                    value={currentAnswer}
                    onValueChange={setCurrentAnswer}
                  >
                    {Object.keys(question.options).map((key, k) => (
                      <div
                        onClick={() => setCurrentAnswer(key)}
                        className="flex w-full cursor-pointer items-center gap-5 rounded-md bg-foreground/5 p-3"
                      >
                        <RadioGroupItem value={key} key={k}></RadioGroupItem>
                        <Label>{question.options[key]}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </>
              ))}
          </motion.ul>

          <Button
            className="w-full"
            variant={"outline"}
            disabled={!questions?.length || !currentAnswer}
          >
            Завершить опрос
          </Button>
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
