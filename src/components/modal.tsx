"use client"

import { useRouter } from "next/navigation"
import type { FC, PropsWithChildren } from "react"
import {
  Credenza,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle
} from "@/components/ui/credenza"

type ModalProps = {
  title: React.ReactNode
  description?: React.ReactNode
  classNames?: Partial<{
    content: string
    header: string
    title: string
    description: string
  }>
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  title,
  description,
  classNames
}) => {
  const router = useRouter()

  const handleOpenChange = () => router.back()
  return (
    <Credenza open onOpenChange={handleOpenChange}>
      <CredenzaContent className={classNames?.content}>
        <CredenzaHeader className={classNames?.header}>
          <CredenzaTitle className={classNames?.title}>{title}</CredenzaTitle>
          {description ? (
            <CredenzaDescription className={classNames?.description}>
              {description}
            </CredenzaDescription>
          ) : null}
        </CredenzaHeader>
        {children}
      </CredenzaContent>
    </Credenza>
  )
}
