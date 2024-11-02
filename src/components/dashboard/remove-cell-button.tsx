"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Minus } from "lucide-react"
import { useContext, useState } from "react"
import { toast } from "sonner"
import { ColorThemeContext } from "@/components/providers/theme-provider"
import { ConfirmationModal } from "@/components/ui/confirmation-modal"
import { TableCell } from "@/components/ui/table"
import { extensionsService } from "@/services/extensions.service"
import { shopService } from "@/services/shop.service"

export function RemoveCellButton({
  refetch,
  is,
  id
}: {
  refetch: () => void
  is: "extension" | "theme"
  id: number
}) {
  const { removeColorTheme } = useContext(ColorThemeContext)
  const queryClient = useQueryClient()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { mutate } = useMutation({
    mutationFn: async (id: number) => {
      if (is === "extension") {
        await Promise.all([
          await extensionsService.removeExtensionFromUser(id),
          await queryClient.invalidateQueries({
            queryKey: ["user", "extensions"]
          })
        ])
      } else {
        removeColorTheme()

        await Promise.all([
          await shopService.sellTheme(id),
          await queryClient.invalidateQueries({
            queryKey: ["user", "themes"]
          }),
          await queryClient.invalidateQueries({
            queryKey: ["theme", id]
          })
        ])
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
