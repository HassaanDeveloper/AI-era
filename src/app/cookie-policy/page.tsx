import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "AI ERA Insights cookie policy - how we use cookies and similar tracking technologies.",
}

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Legal</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-8">Cookie Policy</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: May 2026</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">1. What Are Cookies</h2>
          <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes: essential cookies required for the website to function properly; analytics cookies to understand how visitors interact with our website; and preference cookies to remember your settings and preferences.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">3. Types of Cookies We Use</h2>
          <p><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be disabled. <strong>Analytics Cookies:</strong> These cookies help us understand how visitors use our website. <strong>Advertising Cookies:</strong> These cookies may be used to deliver relevant advertisements.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">4. Managing Cookies</h2>
          <p>You can control and manage cookies in your browser settings. Please note that disabling certain cookies may affect the functionality of our website. Most browsers allow you to block or delete cookies through their settings.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">5. Third-Party Cookies</h2>
          <p>We may use third-party services such as Google Analytics and Google AdSense that set their own cookies. These third parties have their own cookie policies.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">6. Updates</h2>
          <p>We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">7. Contact</h2>
          <p>For questions about our Cookie Policy, please contact us at privacy@aierainsights.com.</p>
        </div>
      </div>
    </div>
  )
}
