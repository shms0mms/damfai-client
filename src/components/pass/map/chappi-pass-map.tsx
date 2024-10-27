"use client"

import { usePass } from "@/hooks/usePass"
import { ChappiPassMenu } from "../menu"
import { ChappiPassNav } from "../nav"

export function ChappiPassMap() {
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleWheel,
    handleZoomIn,
    handleZoomOut,
    nodes,
    canvasRef,
    setNodes,
    selectedNode,
    setSelectedNode
  } = usePass()

  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
      />
      <ChappiPassNav
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
      />
      <ChappiPassMenu
        setNodes={setNodes}
        setSelectedNode={setSelectedNode}
        nodes={nodes}
        selectedNode={selectedNode}
      />
    </>
  )
}
