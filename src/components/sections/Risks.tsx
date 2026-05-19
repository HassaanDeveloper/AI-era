"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Eye, Shield, Users, Brain, Globe } from "lucide-react"

const risks = [
  { icon: AlertTriangle, title: "Job Displacement", description: "Automation may render certain job categories obsolete." },
  { icon: Eye, title: "Privacy Concerns", description: "AI surveillance raises significant privacy issues." },
  { icon: Shield, title: "Security Vulnerabilities", description: "AI systems can be exploited by bad actors." },
  { icon: Users, title: "Bias & Fairness", description: "AI can perpetuate and amplify existing biases." },
  { icon: Brain, title: "Existential Risk", description: "Uncontrolled AGI could pose threats to humanity." },
  { icon: Globe, title: "Regulatory Challenges", description: "AI outpaces lawmaking, creating regulatory gaps." },
]

export default function Risks() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-sm font-medium text-red-400 uppercase tracking-wider">Risks</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2">Risks of AI</h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Understanding the challenges and dangers that accompany AI advancement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {risks.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-3 group-hover:bg-red-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
