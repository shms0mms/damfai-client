"use client"

import { useRouter } from "next/navigation"
import { ChappiPassMap } from "@/components/pass/map/chappi-pass-map"
import { QuestsMap } from "@/components/pass/map/quests-map"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ChappiPass({
  searchParams
}: {
  searchParams: { type: string }
}) {
  const { push } = useRouter()
  return (
    <Tabs
      onValueChange={value => push(`/pass?type=${value}`)}
      defaultValue={searchParams.type || "rewards"}
      className="h-full w-full"
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
      <TabsContent className="h-full w-full" value="quests">
        <QuestsMap />
      </TabsContent>
    </Tabs>
  )
}
