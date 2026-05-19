"use client"

interface AdPlaceholderProps {
  format?: "banner" | "rectangle" | "sidebar"
  className?: string
}

export default function AdPlaceholder({ format = "banner", className = "" }: AdPlaceholderProps) {
  const dimensions = {
    banner: "h-24 md:h-28",
    rectangle: "h-64",
    sidebar: "h-64",
  }

  return (
    <div
      className={`${dimensions[format]} w-full glass rounded-xl flex items-center justify-center ${className}`}
    >
      <p className="text-xs text-muted-foreground/50">Advertisement</p>
    </div>
  )
}
