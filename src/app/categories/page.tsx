import type { Metadata } from "next"
import Link from "next/link"
import { TrendingUp, Heart, BookOpen, Briefcase, Shield, Wrench, Rocket, Users, ArrowRight } from "lucide-react"
import { categories } from "@/lib/content"
import type { LucideIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse AI articles by category - explore AI trends, healthcare, education, business, cybersecurity, tools, and more.",
}

const iconMap: Record<string, LucideIcon> = {
  TrendingUp, Heart, BookOpen, Briefcase, Shield, Wrench, Rocket, Users,
}

export default function CategoriesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Browse</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3">Categories</h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Explore our comprehensive collection of AI articles organized by category.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || TrendingUp
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="font-heading text-lg font-semibold group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h2>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{category.description}</p>
                <div className="flex items-center gap-1 mt-4 text-sm text-blue-400">
                  <span>{category.count} articles</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:ml-1 transition-all" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
