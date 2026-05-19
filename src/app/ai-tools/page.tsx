import type { Metadata } from "next"
import Link from "next/link"
import { Code, Pen, Image, Music, Video, MessageSquare, ExternalLink, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Tools",
  description: "Discover the best AI tools for productivity, creativity, and development. Comprehensive reviews and comparisons.",
}

const toolsList = [
  { name: "GitHub Copilot", description: "AI pair programmer that helps you write better code faster.", category: "Development", icon: Code, color: "from-blue-500 to-cyan-500", url: "#" },
  { name: "ChatGPT", description: "Advanced conversational AI for research, writing, and problem-solving.", category: "General", icon: MessageSquare, color: "from-green-500 to-teal-500", url: "#" },
  { name: "Midjourney", description: "AI image generation with stunning artistic quality and style control.", category: "Creative", icon: Image, color: "from-purple-500 to-pink-500", url: "#" },
  { name: "Suno AI", description: "Generate music and audio content with AI in any genre or style.", category: "Music", icon: Music, color: "from-orange-500 to-red-500", url: "#" },
  { name: "Runway", description: "Professional AI video editing, generation, and post-production tools.", category: "Video", icon: Video, color: "from-yellow-500 to-orange-500", url: "#" },
  { name: "Claude", description: "Advanced AI assistant for analysis, writing, and complex reasoning tasks.", category: "General", icon: MessageSquare, color: "from-indigo-500 to-purple-500", url: "#" },
  { name: "Cursor", description: "AI-native code editor with deep codebase understanding.", category: "Development", icon: Code, color: "from-blue-500 to-purple-500", url: "#" },
  { name: "Canva AI", description: "AI-powered design tools for creating professional graphics quickly.", category: "Creative", icon: Pen, color: "from-pink-500 to-rose-500", url: "#" },
  { name: "Descript", description: "AI-powered audio and video editing with text-based editing.", category: "Video", icon: Video, color: "from-cyan-500 to-blue-500", url: "#" },
]

export default function AIToolsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">Tools</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3">AI Tools Directory</h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Discover and compare the best AI tools for productivity, creativity, and development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolsList.map((tool) => {
            const Icon = tool.icon
            return (
              <div key={tool.name} className="glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-muted-foreground px-2 py-1 rounded-full glass">
                    {tool.category}
                  </span>
                </div>
                <h3 className="font-heading font-semibold group-hover:text-blue-400 transition-colors">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
                <div className="flex items-center gap-1 mt-3 text-xs text-blue-400 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 glass rounded-xl p-6 text-center">
          <h2 className="font-heading text-xl font-bold mb-2">Compare AI Coding Tools</h2>
          <p className="text-muted-foreground mb-4">Read our detailed comparison of the best AI coding assistants.</p>
          <Link
            href="/articles/best-ai-coding-tools-2026"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            Read Full Comparison <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
