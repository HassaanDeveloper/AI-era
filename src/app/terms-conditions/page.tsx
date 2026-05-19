import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "AI ERA Insights terms and conditions governing the use of our website and services.",
}

export default function TermsConditionsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Legal</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-8">Terms & Conditions</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: May 2026</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">1. Acceptance of Terms</h2>
          <p>By accessing and using AI ERA Insights, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you should not use our website.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">2. Intellectual Property</h2>
          <p>All content published on AI ERA Insights, including articles, images, graphics, and logos, is our intellectual property unless otherwise stated. You may not reproduce, distribute, or create derivative works without our express permission.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">3. User Conduct</h2>
          <p>You agree to use our website for lawful purposes only. You must not engage in any activity that could damage, disable, or impair our website or interfere with other users access.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">4. Disclaimer</h2>
          <p>Our content is for informational purposes only and should not be considered professional advice. We make no representations or warranties about the accuracy or completeness of the information provided.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">5. Limitation of Liability</h2>
          <p>AI ERA Insights shall not be liable for any damages arising from the use of our website or reliance on our content.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">6. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">7. Contact</h2>
          <p>For questions about these terms, please contact us at legal@aierainsights.com.</p>
        </div>
      </div>
    </div>
  )
}
