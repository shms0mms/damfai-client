"use client"

import { Blocks } from "lucide-react"
import Link from "next/link"
import { type Extension } from "@/types/shop"
import { Button } from "./button"

export function Extension({ description, slug, title, id }: Extension) {
  return (
    <article
      key={id}
      className="inline-flex h-full w-full flex-col rounded-md p-4 shadow-sm transition-all duration-200 hover:shadow-lg"
    >
      <div className="flex min-h-[200px] w-full items-center justify-center overflow-hidden p-2">
        <Blocks size={42} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mb-5 flex-[1_1_auto] text-muted-foreground">
        {description}
      </p>
      <div className="flex w-full justify-between gap-5">
        <Button asChild>
          <Link href={`/shop/extensions/${slug}`}>Узнать больше</Link>
        </Button>
      </div>
    </article>
  )
}
