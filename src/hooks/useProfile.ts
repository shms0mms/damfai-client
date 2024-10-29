import { useQuery } from "@tanstack/react-query"
import { authService } from "@/services/auth.service"

export const useProfile = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => authService.me(),
    retry: false
  })
}
