"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { ChappiPassMap } from "@/components/pass/chappi-pass-map"
import { QuestsMap } from "@/components/pass/quests-map"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ChappiPass = () => {
  const { push } = useRouter()
  const searchParams = useSearchParams()
  return (
    <div className="flex">
      <Tabs
        onValueChange={value => push(`/pass?type=${value}`)}
        defaultValue={searchParams.get("type") || "rewards"}
        className="w-full"
      >
        <div className="fixed top-4 z-50 flex w-full items-center justify-center">
          <TabsList>
            <TabsTrigger value="rewards">Награды</TabsTrigger>
            <TabsTrigger value="quests">Квесты</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="rewards">
          <ChappiPassMap />
        </TabsContent>
        <TabsContent className="w-full" value="quests">
          <QuestsMap />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ChappiPass
