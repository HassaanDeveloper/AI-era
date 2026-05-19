import type { Article, Category } from "@/types"

export const categories: Category[] = [
  { slug: "ai-trends", name: "AI Trends", description: "Latest trends in artificial intelligence", icon: "TrendingUp", count: 5 },
  { slug: "ai-healthcare", name: "AI in Healthcare", description: "How AI is transforming healthcare", icon: "Heart", count: 4 },
  { slug: "ai-education", name: "AI in Education", description: "AI's impact on learning and education", icon: "BookOpen", count: 3 },
  { slug: "ai-business", name: "AI in Business", description: "AI driving business innovation", icon: "Briefcase", count: 4 },
  { slug: "ai-cybersecurity", name: "AI in Cybersecurity", description: "AI for security and defense", icon: "Shield", count: 3 },
  { slug: "ai-tools", name: "AI Tools", description: "Best AI tools and resources", icon: "Wrench", count: 5 },
  { slug: "ai-future", name: "AI Future", description: "Predictions and future of AI", icon: "Rocket", count: 4 },
  { slug: "ai-jobs", name: "AI Jobs", description: "AI's impact on employment", icon: "Users", count: 3 },
]

export const articles: Article[] = [
  {
    slug: "ai-trends-2026",
    title: "Top 10 AI Trends Shaping 2026",
    description: "From multimodal AI to autonomous agents, discover the key AI trends defining 2026 and beyond.",
    coverImage: "/images/ai-trends-2026.jpg",
    category: "ai-trends",
    author: "AI ERA Insights",
    publishedAt: "2026-05-15",
    readingTime: 8,
    tags: ["AI trends", "2026", "technology", "machine learning"],
    featured: true,
    content: "",
  },
  {
    slug: "ai-in-healthcare-revolution",
    title: "How AI is Revolutionizing Healthcare in 2026",
    description: "Explore the transformative impact of AI on diagnostics, drug discovery, and patient care.",
    coverImage: "/images/ai-healthcare.jpg",
    category: "ai-healthcare",
    author: "AI ERA Insights",
    publishedAt: "2026-05-12",
    readingTime: 10,
    tags: ["healthcare", "AI", "medical", "diagnostics"],
    featured: true,
    content: "",
  },
  {
    slug: "will-ai-replace-jobs",
    title: "Will AI Replace Jobs? A Realistic Look at the Future of Work",
    description: "An honest analysis of which jobs AI will replace, which it will create, and how to prepare.",
    coverImage: "/images/ai-jobs.jpg",
    category: "ai-jobs",
    author: "AI ERA Insights",
    publishedAt: "2026-05-10",
    readingTime: 9,
    tags: ["jobs", "automation", "career", "future of work"],
    featured: true,
    content: "",
  },
  {
    slug: "agi-timeline-2026",
    title: "AGI Timeline: How Close Are We to Artificial General Intelligence?",
    description: "Leading AI researchers weigh in on when AGI might arrive and what it means for humanity.",
    coverImage: "/images/agi-timeline.jpg",
    category: "ai-future",
    author: "AI ERA Insights",
    publishedAt: "2026-05-08",
    readingTime: 11,
    tags: ["AGI", "AI future", "AI risks", "superintelligence"],
    featured: true,
    content: "",
  },
  {
    slug: "ai-in-education-transforming-learning",
    title: "AI in Education: Personalized Learning for Every Student",
    description: "How AI-powered tools are creating personalized learning experiences and transforming classrooms.",
    coverImage: "/images/ai-education.jpg",
    category: "ai-education",
    author: "AI ERA Insights",
    publishedAt: "2026-05-05",
    readingTime: 7,
    tags: ["education", "AI", "learning", "personalization"],
    featured: false,
    content: "",
  },
  {
    slug: "ai-cybersecurity-threats-defense",
    title: "AI in Cybersecurity: Protecting Against Next-Gen Threats",
    description: "Learn how AI is both creating new security challenges and providing powerful defense mechanisms.",
    coverImage: "/images/ai-cybersecurity.jpg",
    category: "ai-cybersecurity",
    author: "AI ERA Insights",
    publishedAt: "2026-05-03",
    readingTime: 8,
    tags: ["cybersecurity", "AI", "security", "threats"],
    featured: false,
    content: "",
  },
  {
    slug: "best-ai-coding-tools-2026",
    title: "Best AI Coding Tools in 2026: A Complete Comparison",
    description: "We compare the top AI coding assistants including GitHub Copilot, Cursor, and Claude.",
    coverImage: "/images/ai-coding-tools.jpg",
    category: "ai-tools",
    author: "AI ERA Insights",
    publishedAt: "2026-04-28",
    readingTime: 9,
    tags: ["coding", "AI tools", "developers", "programming"],
    featured: false,
    content: "",
  },
  {
    slug: "ai-business-automation-guide",
    title: "AI Business Automation: A Complete Guide for 2026",
    description: "How businesses are leveraging AI automation to reduce costs and increase productivity.",
    coverImage: "/images/ai-business.jpg",
    category: "ai-business",
    author: "AI ERA Insights",
    publishedAt: "2026-04-25",
    readingTime: 10,
    tags: ["business", "automation", "AI", "productivity"],
    featured: false,
    content: "",
  },
  {
    slug: "risks-of-artificial-intelligence",
    title: "The Real Risks of AI: What Everyone Should Know",
    description: "A balanced examination of AI risks from bias and privacy concerns to existential threats.",
    coverImage: "/images/ai-risks.jpg",
    category: "ai-future",
    author: "AI ERA Insights",
    publishedAt: "2026-04-22",
    readingTime: 9,
    tags: ["AI risks", "safety", "ethics", "privacy"],
    featured: false,
    content: "",
  },
  {
    slug: "ai-news-may-2026",
    title: "AI News Roundup: Biggest Stories of May 2026",
    description: "Catch up on the most important AI news from the past month, from new models to regulations.",
    coverImage: "/images/ai-news.jpg",
    category: "ai-trends",
    author: "AI ERA Insights",
    publishedAt: "2026-05-01",
    readingTime: 6,
    tags: ["news", "AI", "roundup", "updates"],
    featured: false,
    content: "",
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((article) => article.category === categorySlug)
}

export function getRelatedArticles(currentSlug: string, categorySlug: string, limit = 3): Article[] {
  return articles
    .filter((a) => a.slug !== currentSlug && a.category === categorySlug)
    .slice(0, limit)
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
