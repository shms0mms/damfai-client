import { useQuery } from "@tanstack/react-query"
import { themeService } from "@/services/themes.service"

export const useUserThemes = () => {
  return useQuery({
    initialData: undefined,
    queryKey: ["user", "themes"],
    queryFn: themeService.getUserThemes
  })
}
