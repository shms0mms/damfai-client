"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Send } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import React, { useEffect, useRef, useState } from "react"
import useChappiChat from "@/hooks/useChappiChat"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: number
  text: string
  sender: "user" | "support"
}

interface TypingAnimationProps {
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

export default function ChappiChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage: Message = {
        id: Date.now(),
        text: inputMessage,
        sender: "user"
      }
      setMessages([...messages, newMessage])
      setInputMessage("")
      setIsTyping(true)

      setTimeout(() => {
        const supportMessage: Message = {
          id: Date.now(),
          text: "Спасибо за ваше сообщение. Чем я могу вам помочь?",
          sender: "support"
        }
        setMessages(prevMessages => [...prevMessages, supportMessage])
        setIsTyping(false)
      }, 2000)
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])
  const { id: book_id } = useParams()
  const { message, send } = useChappiChat(String(book_id))
  return (
    <div className="flex h-96 w-80 flex-col rounded-lg shadow-lg dark:shadow-none">
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
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block rounded-lg p-2 ${
                message.sender === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {message.text}
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
