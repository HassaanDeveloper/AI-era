"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { TrendingUp, Heart, BookOpen, Briefcase, Shield, Wrench, Rocket, Users, ArrowRight } from "lucide-react"
import { categories } from "@/lib/content"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  TrendingUp, Heart, BookOpen, Briefcase, Shield, Wrench, Rocket, Users,
}

export default function CategoriesSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Categories</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2">Explore AI Topics</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon] || TrendingUp
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/categories/${category.slug}`}
                  className="group block glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="font-heading font-semibold group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{category.description}</p>
                  <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                    <span>{category.count} articles</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
