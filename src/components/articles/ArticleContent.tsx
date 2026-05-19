import { articleContents } from "@/content/articles/content"

interface ArticleContentProps {
  slug: string
}

export default function ArticleContent({ slug }: ArticleContentProps) {
  const content = articleContents[slug]
  if (!content) return null

  const elements = content.map((section, index) => {
    switch (section.type) {
      case "heading":
        return (
          <h2 key={`h-${index}`} id={section.content!.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")} className="font-heading text-2xl font-bold mt-10 mb-4">
            {section.content}
          </h2>
        )
      case "subheading":
        return (
          <h3 key={`sh-${index}`} id={section.content!.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")} className="font-heading text-xl font-semibold mt-8 mb-3">
            {section.content}
          </h3>
        )
      case "paragraph":
        return (
          <p key={`p-${index}`} className="text-muted-foreground leading-relaxed">
            {section.content}
          </p>
        )
      case "list":
        return (
          <ul key={`l-${index}`} className="list-disc list-inside space-y-2 text-muted-foreground">
            {section.items!.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )
      case "numbered":
        return (
          <ol key={`ol-${index}`} className="list-decimal list-inside space-y-2 text-muted-foreground">
            {section.items!.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        )
      case "table":
        return (
          <div key={`t-${index}`} className="overflow-x-auto">
            <table className="w-full glass rounded-xl overflow-hidden">
              <thead>
                <tr className="border-b border-white/10">
                  {section.headers!.map((header, i) => (
                    <th key={i} className="text-left p-3 text-sm font-semibold">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows!.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0">
                    {row.map((cell, j) => (
                      <td key={j} className="p-3 text-sm text-muted-foreground">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      case "quote":
        return (
          <blockquote key={`q-${index}`} className="border-l-2 border-blue-400 pl-4 italic text-muted-foreground">
            {section.content}
          </blockquote>
        )
      case "faq":
        return (
          <div key={`faq-${index}`} className="glass rounded-xl p-5 space-y-4">
            <h3 className="font-heading font-semibold">FAQ</h3>
            {section.items!.map((item, i) => {
              const [q, a] = item.split("|")
              return (
                <div key={i}>
                  <p className="font-medium text-sm mb-1">{q}</p>
                  <p className="text-sm text-muted-foreground">{a}</p>
                </div>
              )
            })}
          </div>
        )
      default:
        return null
    }
  })

  return <div className="space-y-6">{elements}</div>
}
