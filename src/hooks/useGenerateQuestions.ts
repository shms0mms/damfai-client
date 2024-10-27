"use client"

import { useEffect } from "react"
import useWebSocket from "react-use-websocket"
import { env } from "@/env"

export const useGenerateQuestions = (
  bookId: number,
  questionsCount: number
) => {
  const { sendMessage, getWebSocket, lastMessage } = useWebSocket(
    `${env.NEXT_PUBLIC_WS_URL}/gigachat/ws/generate_questions/${bookId}`,
    {
      onOpen: () => {
        sendMessage(String(questionsCount))
      }
    }
  )
  const socket = getWebSocket()
  const send = (message: string) => {
    sendMessage(message)
  }

  const connect = () => {}
  const disconnect = () => {
    socket?.close()
  }
  useEffect(() => {
    return () => disconnect()
  }, [])
  const message = lastMessage?.data ? eval(lastMessage?.data) : null
  return {
    send,
    connect,
    disconnect,
    message,
    socket
  }
}
