"use client"

import { useScrollProgress } from "@/hooks/useScrollProgress"

export default function ReadingProgressBar() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-16 left-0 right-0 h-0.5 z-40 bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
