"use client"

import { useMutation, useQuery } from "@tanstack/react-query"
import { motion } from "framer-motion"
import { Check, Loader } from "lucide-react"
import { useContext } from "react"
import { toast } from "sonner"
import { Extension } from "@/types/shop"
import { AuthContext } from "@/components/providers/auth-provider"
import { Button } from "@/components/ui/button"
import { extensionsService } from "@/services/extensions.service"

export function ExtensionDetail({ extension }: { extension: Extension }) {
  const { isAuth } = useContext(AuthContext)
  const { data, refetch } = useQuery({
    queryKey: ["/extensions/user"],
    queryFn: () => extensionsService.getUserExtensions(),
    retry: false
  })
  const { mutate } = useMutation({
    mutationFn: (extensionId: number) =>
      extensionsService.addExtensionToUser(extensionId),
    onSuccess: () => {
      toast.dismiss()
      toast(
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex h-full items-center justify-center"
          >
            <Check className="h-12 w-12 text-green-500" />
          </motion.div>
        </div>,
        {
          position: "top-center",
          className: "w-[80px] left-1/2 -translate-x-1/2",
          duration: 1000
        }
      )
      refetch()
    },
    onMutate: () => {
      toast(
        <div className="flex items-center justify-center">
          <Loader className="animate-spin" />
        </div>,
        {
          position: "top-center",
          className: "w-[60px] left-1/2 -translate-x-1/2"
        }
      )
    },
    onError() {
      toast.error("Произшошла ошибка, повторите позже!")
    }
  })
  const inCollection = !!data?.data?.find(
    (e: Extension) => e.id == +extension.id
  )

  return (
    <>
      <div className="flex w-full justify-end">
        <Button
          onClick={() => mutate(extension.id)}
          type="button"
          disabled={!isAuth || inCollection}
        >
          {!isAuth
            ? "Сначала авторизируйтесь!"
            : inCollection
              ? "Уже в коллекции"
              : "Получить"}
        </Button>
      </div>
    </>
  )
}
