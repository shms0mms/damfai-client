"use client"

import { useEffect } from "react"
import useWebSocket from "react-use-websocket"
import { env } from "@/env"

const useChappiChat = (book_id: string) => {
  const { sendMessage, getWebSocket, lastJsonMessage } = useWebSocket(
    `${env.NEXT_PUBLIC_WS_URL}/gigachat/ws/ask_question/${book_id}`
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

  const message = JSON.parse(JSON.stringify(lastJsonMessage || ""))

  return { send, connect, disconnect, message }
}

export default useChappiChat
