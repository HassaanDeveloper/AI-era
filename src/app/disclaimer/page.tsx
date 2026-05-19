import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "AI ERA Insights disclaimer - important information about the use of our content and website.",
}

export default function DisclaimerPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Legal</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-8">Disclaimer</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: May 2026</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">General Information</h2>
          <p>The content provided on AI ERA Insights is for general informational and educational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on our website.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">Professional Advice</h2>
          <p>The information on this website is not intended to be a substitute for professional advice, including but not limited to legal, financial, medical, or technical advice. You should consult with qualified professionals for advice specific to your situation.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">External Links</h2>
          <p>Our website may contain links to external websites that are not under our control. We have no control over the content, privacy policies, or practices of these third-party websites and assume no responsibility for them.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">AI-Generated Content</h2>
          <p>Some content on this website may be generated or assisted by artificial intelligence tools. While we review and edit all content, readers should be aware that AI-generated content may contain errors or inaccuracies.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">Limitation of Liability</h2>
          <p>AI ERA Insights shall not be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from the use of or reliance on any information provided on this website.</p>
        </div>
      </div>
    </div>
  )
}
