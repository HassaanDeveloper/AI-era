"use client"

import { useEffect, useState, useRef } from "react"
import { throttle } from "@/lib/performance"

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (rafId.current) return
      rafId.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
        rafId.current = null
      })
    }, 100)

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return progress
}
