"use client"

import { useTableOfContents } from "@/hooks/useTableOfContents"

export default function TableOfContents() {
  const { items, activeId } = useTableOfContents()

  if (items.length === 0) return null

  return (
    <nav className="space-y-1">
      <h3 className="font-heading font-semibold text-sm mb-3">Table of Contents</h3>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`block text-sm py-1.5 transition-colors ${
            item.level === 3 ? "pl-4" : ""
          } ${
            activeId === item.id
              ? "text-blue-400 font-medium"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.text}
        </a>
      ))}
    </nav>
  )
}
