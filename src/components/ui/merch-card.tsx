import { Merch } from "@/types/shop"

export default function MarchCard({ description, imageUrl, id, name }: Merch) {
  return (
    <>
      <div
        key={id}
        className="flex h-full w-full flex-col gap-2 overflow-hidden rounded-md shadow-md"
      >
        <img className="overflow-hidden rounded-md" src={imageUrl} alt={name} />

        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-base text-muted-foreground">
          {description}
        </p>
      </div>
    </>
  )
}
