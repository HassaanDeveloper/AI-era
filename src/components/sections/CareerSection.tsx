"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, TrendingUp, Cpu, LineChart, ArrowRight } from "lucide-react"

const careers = [
  { title: "AI Engineer", salary: "$150K - $250K", growth: "+35%", icon: Cpu },
  { title: "ML Engineer", salary: "$140K - $230K", growth: "+32%", icon: TrendingUp },
  { title: "Data Scientist", salary: "$130K - $200K", growth: "+28%", icon: LineChart },
  { title: "AI Product Manager", salary: "$140K - $220K", growth: "+30%", icon: Briefcase },
]

export default function CareerSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Careers</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2">AI Careers & Salaries</h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Top AI careers in 2026 with salary ranges and growth projections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {careers.map((career, index) => {
            const Icon = career.icon
            return (
              <motion.div
                key={career.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-heading font-semibold">{career.title}</h3>
                <div className="mt-2 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Salary</span>
                    <span className="font-medium text-green-400">{career.salary}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Growth</span>
                    <span className="font-medium text-blue-400">{career.growth}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/articles/will-ai-replace-jobs"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Read: Will AI Replace Jobs? <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
