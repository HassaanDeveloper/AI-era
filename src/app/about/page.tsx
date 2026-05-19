import type { Metadata } from "next"
import { Target, Eye, Heart, Shield, Users, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AI ERA Insights - our mission, vision, and commitment to providing premium AI content and insights.",
}

const values = [
  { icon: Target, title: "Accuracy", description: "We verify every fact and source to ensure our content is accurate and trustworthy." },
  { icon: Eye, title: "Transparency", description: "We clearly communicate our methodologies, sources, and any potential biases in our content." },
  { icon: Heart, title: "Accessibility", description: "We make complex AI topics understandable and accessible to everyone." },
  { icon: Shield, title: "Responsibility", description: "We address AI ethics and risks honestly while highlighting positive developments." },
  { icon: Users, title: "Community", description: "We foster an inclusive community of AI enthusiasts, professionals, and learners." },
  { icon: Lightbulb, title: "Innovation", description: "We stay at the forefront of AI developments to bring you the latest insights." },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">About</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-6">
            About AI ERA Insights
          </h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              AI ERA Insights is a premier content platform dedicated to exploring the transformative world of artificial intelligence. Founded in 2024, our mission is to provide accurate, insightful, and accessible AI content that helps individuals and organizations navigate the rapidly evolving AI landscape.
            </p>
            <p>
              We believe that AI is the most important technological development of our time, and understanding it is essential for everyone. Our team of experienced writers, researchers, and AI practitioners work tirelessly to bring you the latest trends, in-depth analysis, and practical insights.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="glass rounded-xl p-5">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-12 glass rounded-xl p-6">
            <h2 className="font-heading text-xl font-bold mb-3">Our Mission</h2>
            <p className="text-muted-foreground">
              To democratize AI knowledge and empower individuals and organizations to harness the power of artificial intelligence responsibly and effectively. We strive to be the most trusted source of AI insights, helping our readers understand not just what AI can do, but what it means for humanity.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
