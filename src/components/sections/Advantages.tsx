"use client"

import { motion } from "framer-motion"
import { Zap, TrendingUp, Clock, DollarSign, Shield, Heart } from "lucide-react"

const advantages = [
  { icon: Zap, title: "Increased Efficiency", description: "AI automates repetitive tasks, freeing humans for creative work." },
  { icon: TrendingUp, title: "Better Decision Making", description: "Data-driven insights help businesses make smarter choices." },
  { icon: Clock, title: "24/7 Availability", description: "AI systems work around the clock without fatigue." },
  { icon: DollarSign, title: "Cost Reduction", description: "Automation significantly reduces operational costs." },
  { icon: Shield, title: "Enhanced Security", description: "AI detects threats and fraud faster than humans." },
  { icon: Heart, title: "Healthcare Breakthroughs", description: "AI accelerates diagnosis and drug discovery." },
]

export default function Advantages() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-sm font-medium text-green-400 uppercase tracking-wider">Benefits</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2">Advantages of AI</h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            How artificial intelligence is creating positive change across every industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {advantages.map((item, index) => {
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
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-3 group-hover:bg-green-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-green-400" />
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
