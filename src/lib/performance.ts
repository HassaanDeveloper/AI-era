export function preloadCriticalImages() {
  if (typeof window === "undefined") return

  const images = ["/images/hero-bg.webp"]
  images.forEach((src) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = src
    document.head.appendChild(link)
  })
}

export function deferNonCriticalCSS() {
  if (typeof window === "undefined") return

  const loadDeferred = () => {
    const links = document.querySelectorAll('link[data-defer]')
    links.forEach((link) => {
      const l = link as HTMLLinkElement
      l.rel = "stylesheet"
      l.removeAttribute("data-defer")
    })
  }

  if (requestIdleCallback) {
    requestIdleCallback(loadDeferred, { timeout: 2000 })
  } else {
    setTimeout(loadDeferred, 2000)
  }
}

export function throttle<T extends (...args: any[]) => void>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export function getConnectionType(): string {
  if (typeof navigator === "undefined") return "unknown"
  const conn = (navigator as any).connection
  return conn?.effectiveType || "unknown"
}

export function isLowEndDevice(): boolean {
  if (typeof navigator === "undefined") return false
  const memory = (navigator as any).deviceMemory
  const cores = navigator.hardwareConcurrency
  return (memory && memory <= 4) || (cores && cores <= 4)
}
