import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { getRelatedArticles } from "@/lib/content"
import { formatDate } from "@/utils"

interface RelatedArticlesProps {
  currentSlug: string
  category: string
}

export default function RelatedArticles({ currentSlug, category }: RelatedArticlesProps) {
  const related = getRelatedArticles(currentSlug, category)

  if (related.length === 0) return null

  return (
    <div className="mt-12 pt-8 border-t border-white/10">
      <h2 className="font-heading text-xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {related.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group glass rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="font-heading font-semibold text-sm group-hover:text-blue-400 transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{article.description}</p>
            <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(article.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readingTime} min
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
