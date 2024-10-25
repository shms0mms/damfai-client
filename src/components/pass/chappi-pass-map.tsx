import { SyntheticEvent, WheelEvent, useEffect, useRef, useState } from "react"

export function ChappiPassMap({
  handleWheel,
  scale
}: {
  handleWheel: (e: WheelEvent<HTMLCanvasElement>) => void
  scale: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [nodes, setNodes] = useState([
    {
      id: 1,
      x: 400,
      y: 300,
      label: "Введение",
      connectedTo: [2],
      completed: true
    },
    {
      id: 2,
      x: 600,
      y: 250,
      label: "Что такое машинное обучение",
      connectedTo: [3, 4],
      completed: true
    },
    {
      id: 3,
      x: 800,
      y: 150,
      label: "Среда разработки",
      connectedTo: [],
      completed: false
    },
    {
      id: 4,
      x: 800,
      y: 350,
      label: "Оценка модели",
      connectedTo: [5],
      completed: false
    },
    {
      id: 5,
      x: 1000,
      y: 300,
      label: "Финальный проект",
      connectedTo: [],
      completed: false
    }
  ])
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")
    setContext(ctx)
    drawMap(ctx!)
  }, [nodes, scale])

  const drawMap = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.save()
    ctx.scale(scale, scale)

    nodes.forEach(node => {
      node.connectedTo.forEach(targetId => {
        const targetNode = nodes.find(n => n.id === targetId)
        if (targetNode) {
          drawLine(ctx, node.x, node.y, targetNode.x, targetNode.y)
        }
      })
    })

    nodes.forEach(node => {
      drawNode(ctx, node.x, node.y, node.label, node.completed)
    })

    ctx.restore()
  }

  const drawLine = (
    ctx: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = "#00FF00"
    ctx.lineWidth = 2
    ctx.stroke()
  }

  const drawNode = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    label: string,
    completed: boolean
  ) => {
    ctx.beginPath()
    ctx.arc(x, y, 30, 0, Math.PI * 2)
    ctx.fillStyle = completed ? "#00FF00" : "#FFFFFF"
    ctx.fill()
    ctx.strokeStyle = "#000000"
    ctx.lineWidth = 3
    ctx.stroke()

    ctx.fillStyle = "#fff"
    ctx.textAlign = "center"
    ctx.font = "14px Arial"
    ctx.fillText(label, x, y + 50)
  }

  const handleMouseDown = (
    e: SyntheticEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    setIsDragging(true)
    setDragOffset({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    })
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

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight - 20}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
    />
  )
}
