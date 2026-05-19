# AI ERA Insights

A premium AI media website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** ShadCN UI with Base UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Features

- Dark futuristic theme with glassmorphism
- Responsive design (mobile-first)
- SEO optimized (metadata, sitemap, robots.txt, schema markup)
- Article system with reading progress, TOC, share buttons
- MDX-powered article content
- Google AdSense ready with ad placeholders
- FAQ section with FAQ schema
- Full legal pages (Privacy, Terms, Disclaimer, Cookie Policy)
- Reading time estimation
- Dynamic category pages

## Pages

- Home
- About
- Contact
- Privacy Policy
- Terms & Conditions
- Disclaimer
- Cookie Policy
- AI Trends
- AI News
- AI Future
- AI Tools
- Categories (with dynamic category pages)
- Dynamic Article Pages (10 articles)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/            # App Router pages
├── components/
│   ├── ui/         # ShadCN UI components
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # Homepage sections
│   ├── articles/   # Article components
│   └── ads/        # Ad placeholders
├── content/
│   └── articles/   # Article content data
├── hooks/          # Custom React hooks
├── lib/            # Utilities and content
├── types/          # TypeScript types
└── utils/          # Helper functions
```

## Deployment

Deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
