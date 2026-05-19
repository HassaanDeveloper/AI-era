import dynamic from "next/dynamic"
import ErrorBoundary from "@/components/ErrorBoundary"
import { HeroSkeleton, SectionSkeleton } from "@/components/Skeleton"

const Hero = dynamic(() => import("@/components/sections/Hero"), {
  loading: () => <HeroSkeleton />,
  ssr: true,
})

const TrendingTopics = dynamic(() => import("@/components/sections/TrendingTopics"), {
  loading: () => <SectionSkeleton />,
})

const FeaturedArticles = dynamic(() => import("@/components/sections/FeaturedArticles"), {
  loading: () => <SectionSkeleton />,
})

const CategoriesSection = dynamic(() => import("@/components/sections/CategoriesSection"), {
  loading: () => <SectionSkeleton />,
})

const Timeline = dynamic(() => import("@/components/sections/Timeline"), {
  loading: () => <SectionSkeleton />,
})

const Advantages = dynamic(() => import("@/components/sections/Advantages"), {
  loading: () => <SectionSkeleton />,
})

const Risks = dynamic(() => import("@/components/sections/Risks"), {
  loading: () => <SectionSkeleton />,
})

const ToolsShowcase = dynamic(() => import("@/components/sections/ToolsShowcase"), {
  loading: () => <SectionSkeleton />,
})

const CareerSection = dynamic(() => import("@/components/sections/CareerSection"), {
  loading: () => <SectionSkeleton />,
})

const Newsletter = dynamic(() => import("@/components/sections/Newsletter"), {
  loading: () => <SectionSkeleton />,
})

const FAQSection = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <SectionSkeleton />,
})

const AdPlaceholder = dynamic(() => import("@/components/ads/AdPlaceholder"))

export default function Home() {
  return (
    <>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <AdPlaceholder format="banner" className="max-w-7xl mx-auto my-8 px-4" />
      </ErrorBoundary>
      <ErrorBoundary>
        <TrendingTopics />
      </ErrorBoundary>
      <ErrorBoundary>
        <FeaturedArticles />
      </ErrorBoundary>
      <ErrorBoundary>
        <CategoriesSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <AdPlaceholder format="rectangle" className="max-w-7xl mx-auto my-8 px-4" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Timeline />
      </ErrorBoundary>
      <ErrorBoundary>
        <Advantages />
      </ErrorBoundary>
      <ErrorBoundary>
        <Risks />
      </ErrorBoundary>
      <ErrorBoundary>
        <ToolsShowcase />
      </ErrorBoundary>
      <ErrorBoundary>
        <AdPlaceholder format="sidebar" className="max-w-7xl mx-auto my-8 px-4" />
      </ErrorBoundary>
      <ErrorBoundary>
        <CareerSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <Newsletter />
      </ErrorBoundary>
      <ErrorBoundary>
        <FAQSection />
      </ErrorBoundary>
    </>
  )
}
