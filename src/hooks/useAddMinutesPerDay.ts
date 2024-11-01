import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react"
import { analyticsService } from "@/services/analytics.service"

export const useAddMinutesPerDay = () => {
  const { mutate } = useMutation({
    mutationFn: async () => {
      const secondsReadTime = +localStorage.getItem("readTime")! || 0
      const minutes = secondsReadTime / 60
      if (minutes) await analyticsService.addMinutesPerDay(minutes)
    }
  })
  const handle = (event: BeforeUnloadEvent) => {
    mutate()
    localStorage.removeItem("readTime")
    event.preventDefault()
    event.returnValue = ""
  }
  useEffect(() => {
    window.addEventListener("beforeunload", handle)
    return () => {
      window.removeEventListener("beforeunload", handle)
      mutate()
      localStorage.removeItem("readTime")
    }
  }, [])
  return mutate
}
