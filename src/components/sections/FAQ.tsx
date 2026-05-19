"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import type { FAQItem } from "@/types"

const faqs: FAQItem[] = [
  {
    question: "What is AI ERA Insights?",
    answer:
      "AI ERA Insights is a premium content platform dedicated to exploring artificial intelligence trends, tools, risks, and future developments. We provide in-depth analysis, news, and resources for AI enthusiasts, professionals, and anyone curious about the future of AI.",
  },
  {
    question: "Is the content free to access?",
    answer:
      "Yes, all our articles and resources are completely free to access. We believe in democratizing AI knowledge and making it accessible to everyone.",
  },
  {
    question: "How often do you publish new content?",
    answer:
      "We publish new articles weekly, covering the latest AI developments, trends, and in-depth analysis. Our team works continuously to bring you the most relevant and timely AI content.",
  },
  {
    question: "Can I contribute to AI ERA Insights?",
    answer:
      "We welcome guest contributors! If you have expertise in AI and would like to share your insights, please reach out through our contact page with your article proposal.",
  },
  {
    question: "How do I stay updated with new articles?",
    answer:
      "Subscribe to our newsletter to receive weekly updates directly in your inbox. You can also follow us on social media for daily AI insights and news.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">FAQ</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-heading font-semibold text-sm sm:text-base pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
