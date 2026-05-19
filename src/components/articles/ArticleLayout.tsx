"use client"

import { Calendar, Clock, User } from "lucide-react"
import { motion } from "framer-motion"
import ReadingProgressBar from "./ReadingProgressBar"
import Breadcrumbs from "./Breadcrumbs"
import ShareButtons from "./ShareButtons"
import TableOfContents from "./TableOfContents"
import RelatedArticles from "./RelatedArticles"
import AdPlaceholder from "@/components/ads/AdPlaceholder"
import { formatDate } from "@/utils"
import type { Article } from "@/types"

interface ArticleLayoutProps {
  article: Article
  content: React.ReactNode
}

export default function ArticleLayout({ article, content }: ArticleLayoutProps) {
  return (
    <>
      <ReadingProgressBar />
      <article className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: article.category.replace("-", " "), href: `/categories/${article.category}` },
              { label: article.title },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 capitalize mb-4">
                {article.category.replace("-", " ")}
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {article.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {article.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {article.readingTime} min read
                </span>
              </div>

              <ShareButtons
                url={`https://aierainsights.com/articles/${article.slug}`}
                title={article.title}
              />

              <AdPlaceholder format="banner" className="my-8" />

              <div className="prose prose-invert prose-lg max-w-none mt-8 article-content">
                {content}
              </div>

              <AdPlaceholder format="banner" className="my-8" />

              <div className="flex flex-wrap gap-2 mt-8">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium glass"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <RelatedArticles currentSlug={article.slug} category={article.category} />
            </motion.div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="glass rounded-xl p-5">
                  <TableOfContents />
                </div>
                <AdPlaceholder format="sidebar" />
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
