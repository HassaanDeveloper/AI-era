"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

const timelineEvents = [
  { year: "2024", title: "Generative AI Mainstream", description: "AI-generated content becomes ubiquitous across industries." },
  { year: "2025", title: "Multimodal AI Models", description: "AI systems seamlessly process text, images, video, and audio." },
  { year: "2026", title: "Autonomous AI Agents", description: "AI agents independently execute complex multi-step tasks." },
  { year: "2027", title: "AI Scientific Discovery", description: "AI accelerates drug discovery and materials science." },
  { year: "2028", title: "AGI Milestones", description: "First systems demonstrate general reasoning capabilities." },
  { year: "2030+", title: "Superintelligence", description: "Potential emergence of artificial superintelligence." },
]

export default function Timeline() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Timeline</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2">The AI Future Timeline</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Key milestones in the evolution of artificial intelligence
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="glass rounded-xl p-5 inline-block max-w-md">
                    <span className="text-xs font-semibold text-blue-400">{event.year}</span>
                    <h3 className="font-heading font-semibold mt-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
