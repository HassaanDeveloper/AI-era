import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import dynamic from "next/dynamic"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const NetworkStatus = dynamic(() => import("@/components/NetworkStatus"))

const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"))

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "AI ERA Insights - The Future of AI Starts Here",
    template: "%s | AI ERA Insights",
  },
  description:
    "Explore AI trends, opportunities, risks, tools, and future technologies shaping humanity from 2026 and beyond.",
  keywords: [
    "AI",
    "artificial intelligence",
    "AI trends",
    "AI tools",
    "future of AI",
    "machine learning",
    "deep learning",
    "AI news",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "AI ERA Insights - The Future of AI Starts Here",
    description:
      "Explore AI trends, opportunities, risks, tools, and future technologies shaping humanity from 2026 and beyond.",
    type: "website",
    locale: "en_US",
    siteName: "AI ERA Insights",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI ERA Insights - The Future of AI Starts Here",
    description:
      "Explore AI trends, opportunities, risks, tools, and future technologies shaping humanity from 2026 and beyond.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://aierainsights.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground" data-scroll-behavior="smooth">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <NetworkStatus />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
