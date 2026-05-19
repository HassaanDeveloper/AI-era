export interface Article {
  slug: string
  title: string
  description: string
  content: string
  coverImage: string
  category: string
  author: string
  publishedAt: string
  readingTime: number
  tags: string[]
  featured: boolean
}

export interface Category {
  slug: string
  name: string
  description: string
  icon: string
  count: number
}

export interface FAQItem {
  question: string
  answer: string
}
