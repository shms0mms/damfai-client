"use client"

import { useEffect } from "react"
import useWebSocket from "react-use-websocket"
import { env } from "@/env"
import { getAccessToken } from "@/lib/auth"

export const useCompressedBook = (bookId: number) => {
  const { sendMessage, getWebSocket, lastMessage } = useWebSocket(
    `${env.NEXT_PUBLIC_WS_URL}/gigachat/ws/sum_text/book/${bookId}`,
    {
      onOpen: () => {
        sendMessage(getAccessToken()!)
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
  const message = lastMessage?.data ? JSON.parse(lastMessage?.data) : null
  return {
    send,
    connect,
    disconnect,
    message,
    socket
  }
}
