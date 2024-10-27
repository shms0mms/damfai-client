"use client"

import { DashboardIcon } from "@radix-ui/react-icons"
import { BookA, Gift, Home } from "lucide-react"
import { SyntheticEvent, WheelEvent, useEffect, useRef, useState } from "react"
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
import { Separator } from "../ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../ui/tooltip"
import { ItemLink } from "./item-link"
import NODES from "@/data/pass.json"

const TableItem = ({ description, id, title, completed }: Reward) => {
  return (
    <>
      {" "}
      <div key={id} className="w-full">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {title}
            </figcaption>
            <figcaption className="font-norml text-xs dark:text-white">
              {description}
            </figcaption>
          </div>{" "}
          <TooltipProvider>
            {" "}
            <Tooltip>
              <TooltipTrigger>
                <Button
                  disabled={completed}
                  className="aspect-square h-auto w-8"
                  size={"icon"}
                  type="button"
                >
                  <Gift size={14} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Собрать награду</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <Separator />
    </>
  )
}
export function ChappiPassMap() {
  const [scale, setScale] = useState(1)
  const handleZoomIn = () => setScale(prevScale => Math.min(prevScale * 1.1, 3))
  const handleZoomOut = () =>
    setScale(prevScale => Math.max(prevScale * 0.9, 0.5))
  const handleWheel = (e: WheelEvent<HTMLCanvasElement>) => {
    const zoom = e.deltaY > 0 ? 0.9 : 1.1
    setScale(prevScale => Math.max(0.5, Math.min(prevScale * zoom, 3))) // Ограничиваем масштаб
  }
  // Утилиты для начала создания canvas
  const COMPLETED_COLOR = "#478049"
  const isDesktop = useMediaQuery(MEDIA.lg)
  const SHEET_SIZE = isDesktop ? 0 : 500
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [nodes, setNodes] = useState<Reward[]>(NODES as Reward[])
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [selectedNode, setSelectedNode] = useState<Reward>()

  // Рисование самого canvas
  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")
    setContext(ctx)

    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window
      if (innerWidth > 0 && innerHeight > 0) {
        canvas.width = innerWidth
        canvas.height = innerHeight - 20
        if (ctx) {
          drawMap(ctx)
        }
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isDesktop])

  // Рисование карты
  useEffect(() => {
    if (context && context.canvas.width > 0 && context.canvas.height > 0) {
      drawMap(context)
    }
  }, [nodes, scale, context])

  // функция отображения карты и создания points и lines
  const drawMap = (ctx: CanvasRenderingContext2D) => {
    const canvasWidth = Math.max(ctx.canvas.width || 0, 1)
    const canvasHeight = Math.max(ctx.canvas.height || 0, 1)
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.save()
    ctx.scale(scale, scale)

    nodes.forEach(node => {
      node.connectedTo.forEach(targetId => {
        const targetNode = nodes.find(n => n.id === targetId)
        if (targetNode) {
          drawLine(
            ctx,
            node.x,
            node.y,
            targetNode.x,
            targetNode.y,
            node.completed
          )
        }
      })
    })

    nodes.forEach(node => {
      drawNode(ctx, {
        completed: node.completed,
        size: node.size,
        y: node.y,
        x: node.x,
        type: node.type,
        title: node.title,
        id: node.id,
        connectedTo: node.connectedTo,
        description: node.description
      })
    })

    ctx.restore()
  }

  // Создание линии меджу points
  const drawLine = (
    ctx: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    completed: boolean
  ) => {
    ctx.beginPath()
    ctx.moveTo(x1 + SHEET_SIZE, y1)
    ctx.lineTo(x2 + SHEET_SIZE, y2)
    if (completed) {
      ctx.strokeStyle = COMPLETED_COLOR
    } else {
      ctx.strokeStyle = "#333"
      ctx.setLineDash([5, 5])
    }
    ctx.lineWidth = 4
    ctx.stroke()
    ctx.setLineDash([])
  }

  // Рисование самого point
  const drawNode = (
    ctx: CanvasRenderingContext2D,
    { completed, size, y, x, type, title }: Reward
  ) => {
    ctx.beginPath()
    let radius = 60
    if (size === "big") {
      radius = 90
      ctx.arc(x + SHEET_SIZE, y, radius - 5, 0, Math.PI * 2)
      ctx.fillStyle = completed ? COMPLETED_COLOR : "#333"
      ctx.fill()
    } else {
      ctx.arc(x + SHEET_SIZE, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = completed ? COMPLETED_COLOR : "#555"
      ctx.fill()
    }

    ctx.fillStyle = "#fff"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.font = `${size === "big" ? "22px" : "16px"} Arial`

    const words = title.split(" ")
    let line = ""
    let lines = []
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " "
      const metrics = ctx.measureText(testLine)
      const testWidth = metrics.width
      if (testWidth > radius * 1.8 && i > 0) {
        lines.push(line)
        line = words[i] + " "
      } else {
        line = testLine
      }
    }
    lines.push(line)

    lines.forEach((line, index) => {
      ctx.fillText(
        line.trim(),
        x + SHEET_SIZE,
        y + (index - (lines.length - 1) / 2) * 20
      )
    })
  }

  // При нажатии на canvas вызываем функцию для чтобы найти нажатый point и отобразить по нему инфу
  const handleMouseDown = (
    e: SyntheticEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const rect = canvasRef.current!.getBoundingClientRect()
    const x = (e.nativeEvent.clientX - rect.left) / scale
    const y = (e.nativeEvent.clientY - rect.top) / scale

    const clickedNode = nodes.find(
      node =>
        Math.sqrt(
          Math.pow(node.x - x + SHEET_SIZE, 2) + Math.pow(node.y - y, 2)
        ) < 40
    )!

    if (clickedNode) {
      setSelectedNode(clickedNode)
    } else {
      setIsDragging(true)
      setDragOffset({
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY
      })
    }
  }

  const handleMouseMove = (
    e: SyntheticEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    if (isDragging) {
      const dx = e.nativeEvent.offsetX - dragOffset.x
      const dy = e.nativeEvent.offsetY - dragOffset.y

      setNodes(prevNodes =>
        prevNodes.map(node => ({
          ...node,
          x: node.x + dx / scale,
          y: node.y + dy / scale
        }))
      )

      setDragOffset({
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

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

  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
      />
      <div className="fixed right-6 top-1/2 flex w-[50px] -translate-y-1/2 flex-col justify-center p-2 max-lg:hidden">
        <button onClick={handleZoomIn} className="mb-1 rounded-md bg-muted p-2">
          +
        </button>
        <button onClick={handleZoomOut} className="rounded-md bg-muted p-2">
          -
        </button>
      </div>
      <Button
        size={"lg"}
        className="fixed bottom-4 left-1/2 -translate-x-1/2"
        type="button"
      >
        Собрать все доступные награды
      </Button>
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
              <SheetTitle>{selectedNode?.title || nodes[0]?.title}</SheetTitle>
              <SheetDescription>
                {selectedNode?.description || nodes[0]?.description}
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
                  .filter(n => n.completed)
                  .map(node => (
                    <TableItem {...node} key={node.id} />
                  ))}
              </TabsContent>
              <TabsContent className="flex flex-col gap-4" value="incompleted">
                {nodes
                  .filter(n => !n.completed)
                  .map(node => (
                    <TableItem {...node} key={node.id} />
                  ))}
              </TabsContent>
            </Tabs>
          </div>
          <div className="h-full" />
          <SheetFooter className="flex w-full flex-row items-center justify-between gap-5 sm:flex-row sm:justify-between">
            <ul className="flex items-center gap-4">
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
    </>
  )
}
