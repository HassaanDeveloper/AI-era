"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { TrendingUp, ArrowRight } from "lucide-react"

const topics = [
  { label: "AGI Timeline", href: "/articles/agi-timeline-2026", color: "from-purple-500 to-pink-500" },
  { label: "AI Jobs Report", href: "/articles/will-ai-replace-jobs", color: "from-blue-500 to-cyan-500" },
  { label: "Healthcare AI", href: "/articles/ai-in-healthcare-revolution", color: "from-green-500 to-teal-500" },
  { label: "AI Coding Tools", href: "/articles/best-ai-coding-tools-2026", color: "from-orange-500 to-red-500" },
  { label: "AI Safety", href: "/articles/risks-of-artificial-intelligence", color: "from-yellow-500 to-orange-500" },
  { label: "Business AI", href: "/articles/ai-business-automation-guide", color: "from-indigo-500 to-purple-500" },
]

export default function TrendingTopics() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Trending Now</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">Hot AI Topics</h2>
          </div>
          <Link
            href="/ai-trends"
            className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={topic.href}
                className="group block glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${topic.color} mb-3 flex items-center justify-center`}>
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg group-hover:text-blue-400 transition-colors">
                  {topic.label}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Trending
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
