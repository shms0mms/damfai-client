"use client"

import { DashboardIcon } from "@radix-ui/react-icons"
import { BookA, Home } from "lucide-react"
import { useMediaQuery } from "usehooks-ts"
import { Reward } from "@/types/pass"
import { MEDIA } from "@/config/media.config"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"
import { ThemeToggle } from "../theme-toggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { ItemLink } from "./item-link"
import { TableItem } from "./table-item"

export function ChappiPassMenu({
  selectedNode,
  setSelectedNode,
  nodes,
  setNodes
}: {
  selectedNode?: Reward
  setSelectedNode: React.Dispatch<React.SetStateAction<Reward | undefined>>
  nodes?: Reward[]
  setNodes: React.Dispatch<React.SetStateAction<Reward[]>>
}) {
  // Получение награды (в дальнейшем будет запрос)

  const handleClaim = () => {
    if (selectedNode) {
      setNodes(prevNodes =>
        prevNodes.map(node =>
          node.id === selectedNode.id ? { ...node, completed: true } : node
        )
      )
      setSelectedNode(undefined)
    }
  }
  const isDesktop = useMediaQuery(MEDIA.lg)
  return (
    <Sheet open={isDesktop ? !!selectedNode : true} modal={false}>
      <SheetContent
        onClose={() => setSelectedNode(undefined)}
        isCloseButton={isDesktop ? true : false}
        side={"left"}
        className="absolute left-0 top-0 flex flex-col gap-5 overflow-auto p-3"
      >
        {" "}
        <div className="flex flex-col gap-5">
          <SheetHeader>
            <SheetTitle>
              {selectedNode?.title || nodes?.at(0)?.title}
            </SheetTitle>
            <SheetDescription>
              {selectedNode?.description || nodes?.at(0)?.description}
            </SheetDescription>
          </SheetHeader>
          <Button
            className="w-full"
            onClick={handleClaim}
            disabled={selectedNode?.completed}
          >
            {selectedNode?.completed ? "Получено" : "Получить"}
          </Button>
        </div>
        <div className="flex flex-col gap-5 md:rounded-md md:bg-muted/25 md:p-4">
          <Tabs defaultValue={"completed"}>
            <TabsList className="w-full">
              <TabsTrigger className="w-full" value="completed">
                Собранные
              </TabsTrigger>
              <TabsTrigger className="w-full" value="incompleted">
                Не собранные
              </TabsTrigger>
            </TabsList>
            <TabsContent className="flex flex-col gap-4" value="completed">
              {nodes
                ?.filter(n => n.completed)
                ?.map(node => <TableItem {...node} key={node.id} />)}
            </TabsContent>
            <TabsContent className="flex flex-col gap-4" value="incompleted">
              {nodes
                ?.filter(n => !n.completed)
                ?.map(node => <TableItem {...node} key={node.id} />)}
            </TabsContent>
          </Tabs>
        </div>
        <div className="h-full" />
        <SheetFooter className="flex w-full flex-row items-center justify-between gap-5 sm:flex-row sm:justify-between">
          <ul className="flex items-center gap-1">
            <ItemLink content="Главная" href={"/"}>
              <Home />
            </ItemLink>
            <ItemLink content="Личный кабинет" href={"/dashboard"}>
              <DashboardIcon />
            </ItemLink>
            <ItemLink content="Книги" href={"/books"}>
              <BookA />
            </ItemLink>
          </ul>
          <ThemeToggle />{" "}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
