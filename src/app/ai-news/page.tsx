import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { articles } from "@/lib/content"
import { formatDate } from "@/utils"

export const metadata: Metadata = {
  title: "AI News",
  description: "The latest AI news and updates. Stay informed about breakthrough developments in artificial intelligence.",
}

export default function AINewsPage() {
  const sorted = [...articles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">News</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3">AI News</h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Stay informed with the latest AI news, breakthroughs, and developments from around the world.
          </p>
        </div>

        <div className="space-y-4">
          {sorted.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group glass rounded-xl p-5 flex flex-col sm:flex-row gap-5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-full sm:w-32 h-32 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold">{article.title.charAt(0)}</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 capitalize">
                  {article.category.replace("-", " ")}
                </span>
                <h2 className="font-heading font-semibold mt-2 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{article.description}</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(article.publishedAt)}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readingTime} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
