import { useQuery } from "@tanstack/react-query"
import { analyticsService } from "@/services/analytics.service"

export function useFavouriteGanres() {
  return useQuery({
    queryKey: ["/favourite-ganres"],
    queryFn: () => analyticsService.getFavouriteGanres(),
    retry: false
  })
}
