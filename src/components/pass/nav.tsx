import { Button } from "../ui/button"

export function ChappiPassNav({
  handleZoomIn,
  handleZoomOut
}: {
  handleZoomIn: () => void
  handleZoomOut: () => void
}) {
  return (
    <>
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
    </>
  )
}
