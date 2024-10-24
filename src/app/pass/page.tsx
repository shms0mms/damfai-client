"use client"

import { WheelEvent, useState } from "react"
import { ChappiPassMap } from "@/components/pass/chappi-pass-map"
import { QuestsMap } from "@/components/pass/quests-map"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ChappiPass = () => {
  const [scale, setScale] = useState(1)
  const handleZoomIn = () => setScale(prevScale => Math.min(prevScale * 1.1, 3))
  const handleZoomOut = () =>
    setScale(prevScale => Math.max(prevScale * 0.9, 0.5))
  const handleWheel = (e: WheelEvent<HTMLCanvasElement>) => {
    const zoom = e.deltaY > 0 ? 0.9 : 1.1
    setScale(prevScale => Math.max(0.5, Math.min(prevScale * zoom, 3))) // Ограничиваем масштаб
  }
  return (
    <div className="flex">
      <Tabs defaultValue="rewards" className="w-[400px]">
        <div className="fixed top-4 flex w-full items-center justify-center">
          <TabsList>
            <TabsTrigger value="rewards">Награды</TabsTrigger>
            <TabsTrigger value="quests">Квесты</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="rewards">
          <ChappiPassMap handleWheel={handleWheel} scale={scale} />
        </TabsContent>
        <TabsContent value="quests">
          <QuestsMap handleWheel={handleWheel} scale={scale} />
        </TabsContent>
      </Tabs>
      <div className="fixed right-6 top-1/2 flex w-[50px] -translate-y-1/2 flex-col justify-center p-2">
        <button onClick={handleZoomIn} className="bg-muted p-2">
          +
        </button>
        <button onClick={handleZoomOut} className="bg-muted p-2">
          -
        </button>
      </div>
    </div>
  )
}

export default ChappiPass
