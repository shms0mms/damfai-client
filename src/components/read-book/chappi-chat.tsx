"use client"

import { createId } from "@paralleldrive/cuid2"
import { AnimatePresence, motion } from "framer-motion"
import { Send } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Message } from "@/types/chat"
import { useChappiChat } from "@/hooks/useChappiChat"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type TypingAnimationProps = {
  isVisible: boolean
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex space-x-1"
        >
          {[0, 1, 2].map(dot => (
            <motion.div
              key={dot}
              animate={{
                y: ["0%", "-50%", "0%"]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "loop",
                delay: dot * 0.2
              }}
              className="h-2 w-2 rounded-full bg-gray-400"
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ChappiChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const { id: book_id } = useParams()
  const { message, send } = useChappiChat(String(book_id))
  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage: Message = {
        id: createId(),
        content: inputMessage,
        sender: "me"
      }
      setMessages([...messages, newMessage])
      setInputMessage("")
      send(inputMessage)
      setIsTyping(true)
    }
  }
  useEffect(() => {
    if (message?.data) {
      setMessages(prevMessages => [
        ...prevMessages,
        { content: message.data, id: createId(), sender: "chappi" }
      ])
      setIsTyping(false)
    }
  }, [message])
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="relative flex h-[600px] w-[400px] flex-col rounded-lg shadow-lg dark:shadow-none">
      <div className="flex items-center space-x-3 bg-black p-4">
        <div className="">
          <Image
            src={"/chappi-white.png"}
            alt="chappi"
            width={40}
            height={40}
          />
        </div>
        <div className="text-white">
          <h2 className="font-semibold">Чаппи</h2>
          <p className="text-sm opacity-75">Всегда онлайн</p>
        </div>
      </div>
      <ScrollArea className="flex-grow bg-white p-4" ref={scrollAreaRef}>
        {messages.map(message => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.sender === "me" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block max-w-[80%] rounded-lg p-2 ${
                message.sender === "me"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {message.content}
            </span>
          </div>
        ))}
        {isTyping && (
          <div className="mb-4 text-left">
            <span className="inline-block rounded-lg bg-secondary p-2 text-secondary-foreground">
              <TypingAnimation isVisible={isTyping} />
            </span>
          </div>
        )}
      </ScrollArea>
      <div className="flex space-x-2 border-t border-gray-200 bg-white p-4">
        <Input
          type="text"
          placeholder="Введите сообщение..."
          value={inputMessage}
          className="text-black"
          onChange={e => setInputMessage(e.target.value)}
          onKeyPress={e => e.key === "Enter" && handleSendMessage()}
        />
        <Button onClick={handleSendMessage}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
