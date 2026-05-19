import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { getCategoryBySlug, getArticlesByCategory, categories } from "@/lib/content"
import { formatDate } from "@/utils"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return {}
  return {
    title: `${category.name} - AI ERA Insights`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  const categoryArticles = getArticlesByCategory(slug)

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">{category.name}</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3">{category.name}</h1>
          <p className="text-muted-foreground mt-3 max-w-xl">{category.description}</p>
        </div>

        {categoryArticles.length === 0 ? (
          <div className="glass rounded-xl p-8 text-center">
            <p className="text-muted-foreground">No articles in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.map((article) => (
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
                  <h2 className="font-heading font-semibold group-hover:text-blue-400 transition-colors line-clamp-2">
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
        )}

        <div className="mt-10 text-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
