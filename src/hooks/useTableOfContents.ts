"use client"

import { useEffect, useState, useRef } from "react"

export interface TOCItem {
  id: string
  text: string
  level: number
}

export function useTableOfContents() {
  const [items, setItems] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const headings = document.querySelectorAll("article h2, article h3")
    if (!headings.length) return

    const tocItems: TOCItem[] = Array.from(headings).map((heading) => ({
      id: heading.id,
      text: (heading as HTMLElement).textContent || "",
      level: heading.tagName === "H2" ? 2 : 3,
    }))
    setItems(tocItems)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        let mostVisible: string | null = null
        let maxRatio = 0
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            mostVisible = entry.target.id
          }
        })
        if (mostVisible) setActiveId(mostVisible)
      },
      { rootMargin: "-80px 0px -80% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    headings.forEach((heading) => observerRef.current?.observe(heading))
    return () => observerRef.current?.disconnect()
  }, [])

  return { items, activeId }
}
