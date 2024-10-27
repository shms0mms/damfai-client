"use client"

import { useMutation } from "@tanstack/react-query"
import { Minus } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { ConfirmationModal } from "../ui/confirmation-modal"
import { TableCell } from "../ui/table"
import { extensionsService } from "@/services/extensions.service"
import { themeService } from "@/services/themes.service"

export function RemoveCellButton({
  refetch,
  is,
  id
}: {
  refetch: () => void
  is: "extension" | "theme"
  id: number
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { mutate } = useMutation({
    mutationFn: async (id: number) => {
      if (is === "extension") {
        await extensionsService.removeExtensionFromUser(id)
      } else {
        await themeService.removeThemeFromUser(id)
      }
    },
    onSuccess: () => {
      refetch()
      setIsModalOpen(false)
      toast.success("Успешно удалено!")
    }
  })
  return (
    <>
      <TableCell
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer"
      >
        <Minus size={16} className="text-red-500" />
      </TableCell>{" "}
      <ConfirmationModal
        setIsOpen={setIsModalOpen}
        isOpen={isModalOpen}
        title="Подтверждение удаления"
        message="Вы уверены, что хотите данное расширение из своих расширений? Это действие нельзя отменить."
        onConfirm={() => mutate(id)}
        onCancel={() => setIsModalOpen(false)}
        confirmText="Удалить"
        cancelText="Отмена"
      />
    </>
  )
}
