import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react"
import { analyticsService } from "@/services/analytics.service"

export const useAddMinutesPerDay = () => {
  const { mutate } = useMutation({
    mutationFn: async () => {
      const secondsReadTime = +localStorage.getItem("read_time")! || 0
      const minutes = secondsReadTime / 60
      if (minutes) await analyticsService.add_minutes_per_day(minutes)
    }
  })
  useEffect(() => {
    window.addEventListener("beforeunload", event => {
      mutate()
      localStorage.removeItem("read_time")
      // event.preventDefault()
      // event.returnValue = ""
    })
  }, [])
  return mutate
}
