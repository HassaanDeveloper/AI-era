"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, MessageSquare, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Contact</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-4">Get In Touch</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a question, suggestion, or want to contribute? We would love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {submitted ? (
                <div className="glass rounded-xl p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7 text-green-400" />
                  </div>
                  <h2 className="font-heading text-xl font-bold mb-2">Message Sent!</h2>
                  <p className="text-muted-foreground">Thank you for reaching out. We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-xl p-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-11">
                    <Send className="mr-2 w-4 h-4" /> Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            <div className="space-y-4">
              {[
                { icon: MessageSquare, title: "Social", detail: "@aierainsights" },
                { icon: MapPin, title: "Location", detail: "San Francisco, CA" },
              ].map((item) => (
                <div key={item.title} className="glass rounded-xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="font-medium">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
