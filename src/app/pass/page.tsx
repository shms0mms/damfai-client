"use client"

import { useEffect, useRef, useState } from "react"

const ChappiPassMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [points, setPoints] = useState([
    { x: 100, y: 100, radius: 20, label: "Точка 1" },
    { x: 300, y: 150, radius: 20, label: "Точка 2" },
    { x: 500, y: 300, radius: 20, label: "Точка 3" }
  ])
  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")
    setContext(ctx)
    drawMap(ctx)
  }, [])

  const drawMap = (ctx: CanvasRenderingContext2D | null) => {
    ctx!.clearRect(0, 0, ctx!.canvas.width, ctx!.canvas.height)

    // Соединяем точки линиями
    for (let i = 0; i < points.length - 1; i++) {
      const start = points[i]!
      const end = points[i + 1]!
      ctx!.beginPath()
      ctx!.moveTo(start.x, start.y)
      ctx!.lineTo(end.x, end.y)
      ctx!.stroke()
    }

    // Рисуем точки
    points.forEach(point => {
      ctx!.beginPath()
      ctx!.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
      ctx!.fillStyle = "white"
      ctx!.fill()
      ctx!.stroke()
    })
  }

  const handleMouseDown = (e: any) => {
    setIsDragging(true)
    setOffset({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    })
  }

  const handleMouseMove = (e: any) => {
    if (isDragging) {
      const dx = e.nativeEvent.offsetX - offset.x
      const dy = e.nativeEvent.offsetY - offset.y

      setPoints(prevPoints =>
        prevPoints.map(point => ({
          ...point,
          x: point.x + dx,
          y: point.y + dy
        }))
      )
      setOffset({
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY
      })

      drawMap(context)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <canvas
      ref={canvasRef}
      width={"1500px"}
      height={"1200px"}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ border: "1px solid black" }}
    />
  )
}

export default ChappiPassMap
