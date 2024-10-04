"use client"

import React from "react"
import SelectionMenu from "@/components/ui/selection-popup"

export default function Example() {
  const handleCopy = (text: string) => {
    console.log("Скопирован текст:", text)
  }

  const handleShare = (text: string) => {
    console.log("Поделиться текстом:", text)
    // Здесь вы можете реализовать свою логику для функции "Поделиться"
  }

  const handleSpeak = (text: string) => {
    console.log("Озвучен текст:", text)
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">
        Пример использования SelectionMenu
      </h1>
      <p className="mb-4">
        Выделите любой текст на этой странице, чтобы увидеть меню с действиями.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
        nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt
        nisl nunc euismod nunc. Sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <SelectionMenu
        onCopy={handleCopy}
        onShare={handleShare}
        onSpeak={handleSpeak}
      />
    </div>
  )
}
