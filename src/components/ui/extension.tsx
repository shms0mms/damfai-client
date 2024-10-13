"use client"

import { Blocks } from "lucide-react"
import Link from "next/link"
import { type Extension } from "@/types/shop"
import { PinContainer } from "./3d-pin"
import { Button } from "./button"
import { toPrice } from "@/lib/utils"

export function Extension({ description, id, title, price }: Extension) {
  return (
    <>
      <PinContainer
        className="h-full w-full"
        title={title}
        href={`/shop/${id}`}
      >
        <article
          key={id}
          className="inline-flex h-full w-full flex-col rounded-md p-4 shadow-sm"
        >
          <div className="flex min-h-[200px] w-full items-center justify-center overflow-hidden p-2">
            <Blocks size={42} />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mb-5 flex-[1_1_auto] text-muted-foreground">
            {description}
          </p>
          <div className="flex w-full justify-between gap-5">
            <span className="font-semibold">{toPrice(price)}</span>
            <Button asChild>
              <Link href={`/shop/${id}`}>Узнать больше</Link>
            </Button>
          </div>
        </article>
      </PinContainer>
    </>
  )
}
