"use client"

import { useQuery, useQueryClient } from "@tanstack/react-query"
import { TableCard } from "./table-card"
import { extensionsService } from "@/services/extensions.service"
import { themeService } from "@/services/themes.service"

export function TablesCard() {
  const {
    data: extensions,
    isLoading: isExtensionLoading,
    refetch: refetchExtensions
  } = useQuery({
    queryKey: ["/extensions/user"],
    queryFn: () => extensionsService.getUserExtensions(),
    select: data => data.data,
    retry: false
  })
  const {
    data: themes,
    isLoading: isThemeLoading,
    refetch: refetchThemes
  } = useQuery({
    queryKey: ["/themes/user"],
    queryFn: () => themeService.getUserThemes(),
    retry: false
  })
  const queryClient = useQueryClient()
  return (
    <>
      <TableCard
        refetch={async () => {
          refetchExtensions()
          await queryClient.invalidateQueries({
            queryKey: ["user"]
          })
        }}
        isLoading={isExtensionLoading}
        data={extensions}
        is="extension"
      />
      <TableCard
        refetch={async () => {
          refetchThemes()
          await queryClient.invalidateQueries({
            queryKey: ["user"]
          })
        }}
        isLoading={isThemeLoading}
        data={themes}
        is="theme"
      />
    </>
  )
}
