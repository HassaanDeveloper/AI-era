import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { articles } from "@/lib/content"
import { formatDate } from "@/utils"

export const metadata: Metadata = {
  title: "AI Trends",
  description: "Stay ahead of the curve with the latest AI trends. Explore emerging technologies, industry shifts, and future predictions.",
}

export default function AITrendsPage() {
  const trends = articles.filter((a) => a.category === "ai-trends" || a.category === "ai-future")

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Trends</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3">AI Trends</h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Stay ahead of the curve with the latest AI trends, emerging technologies, and industry shifts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trends.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group glass rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="relative h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-300">
                  <span className="text-white font-bold">{article.title.charAt(0)}</span>
                </div>
              </div>
              <div className="p-5">
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 capitalize">
                  {article.category.replace("-", " ")}
                </span>
                <h2 className="font-heading font-semibold mt-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{article.description}</p>
                <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
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
