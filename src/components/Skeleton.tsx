export function ArticleCardSkeleton() {
  return (
    <div className="glass rounded-xl overflow-hidden animate-pulse">
      <div className="h-48 bg-white/5" />
      <div className="p-5 space-y-3">
        <div className="h-4 w-20 rounded-full bg-white/5" />
        <div className="h-5 w-full rounded bg-white/10" />
        <div className="h-5 w-3/4 rounded bg-white/10" />
        <div className="h-4 w-full rounded bg-white/5" />
        <div className="flex gap-3">
          <div className="h-3 w-24 rounded bg-white/5" />
          <div className="h-3 w-20 rounded bg-white/5" />
        </div>
      </div>
    </div>
  )
}

export function SectionSkeleton() {
  return (
    <div className="py-20 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <div className="h-4 w-24 rounded bg-white/10" />
          <div className="h-8 w-64 rounded bg-white/10" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="glass rounded-xl p-5 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-white/5" />
              <div className="h-5 w-3/4 rounded bg-white/10" />
              <div className="h-4 w-full rounded bg-white/5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center animate-pulse">
      <div className="text-center space-y-6 max-w-2xl mx-auto px-4">
        <div className="h-6 w-48 mx-auto rounded-full bg-white/10" />
        <div className="h-16 w-full mx-auto rounded bg-white/10" />
        <div className="h-6 w-3/4 mx-auto rounded bg-white/5" />
        <div className="flex justify-center gap-4">
          <div className="h-12 w-40 rounded-lg bg-white/10" />
          <div className="h-12 w-40 rounded-lg bg-white/5" />
        </div>
      </div>
    </div>
  )
}
