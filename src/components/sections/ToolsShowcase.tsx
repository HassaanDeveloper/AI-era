"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Pen, Image, Music, Video, MessageSquare, ArrowRight } from "lucide-react"

const tools = [
  { icon: Code, name: "GitHub Copilot", description: "AI pair programming assistant", color: "from-blue-500 to-cyan-500" },
  { icon: Pen, name: "ChatGPT", description: "Conversational AI for any task", color: "from-green-500 to-teal-500" },
  { icon: Image, name: "Midjourney", description: "AI image generation", color: "from-purple-500 to-pink-500" },
  { icon: Music, name: "Suno AI", description: "AI music and audio generation", color: "from-orange-500 to-red-500" },
  { icon: Video, name: "Runway", description: "AI video creation and editing", color: "from-yellow-500 to-orange-500" },
  { icon: MessageSquare, name: "Claude", description: "Advanced AI assistant", color: "from-indigo-500 to-purple-500" },
]

export default function ToolsShowcase() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">Tools</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2">AI Tools Showcase</h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Discover the most powerful AI tools transforming how we work and create.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-semibold group-hover:text-blue-400 transition-colors">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Link
            href="/ai-tools"
            className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
          >
            Explore All AI Tools <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
