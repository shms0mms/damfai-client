import { useQuery } from "@tanstack/react-query"
import { authService } from "@/services/auth.service"

const useProfile = () => {
  return useQuery({
    queryKey: ["/user/me"],
    queryFn: () => authService.me(),
    retry: false
  })
}

export default useProfile
