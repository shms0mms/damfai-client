"use client"

import { useQuery } from "@tanstack/react-query"
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
    select: data => data.data
  })
  const {
    data: themes,
    isLoading: isThemeLoading,
    refetch: refetchThemes
  } = useQuery({
    queryKey: ["/themes/user"],
    queryFn: () => themeService.getUserThemes()
  })
  return (
    <>
      <TableCard
        refetch={refetchExtensions}
        isLoading={isExtensionLoading}
        data={extensions}
        is="extension"
      />
      <TableCard
        refetch={refetchThemes}
        isLoading={isThemeLoading}
        data={themes}
        is="theme"
      />
    </>
  )
}
