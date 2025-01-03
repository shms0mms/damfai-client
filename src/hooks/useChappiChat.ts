"use client"

import { useEffect } from "react"
import useWebSocket from "react-use-websocket"
import { env } from "@/env"

export const useChappiChat = (bookId: string) => {
  const { sendMessage, getWebSocket, lastMessage } = useWebSocket(
    `${env.NEXT_PUBLIC_WS_URL}/gigachat/ws/ask_question/${bookId}`
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
    return () => {
      disconnect()
    }
  }, [])
  return { send, connect, disconnect, message: lastMessage }
}
