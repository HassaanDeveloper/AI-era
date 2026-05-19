import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AI ERA Insights privacy policy - how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Legal</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: May 2026</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">1. Introduction</h2>
          <p>AI ERA Insights ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">2. Information We Collect</h2>
          <p>We collect information that you voluntarily provide to us when you subscribe to our newsletter, fill out a contact form, or interact with our website. This may include your name and email address. We also automatically collect certain information when you visit our website, including your IP address, browser type, and usage patterns.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">3. How We Use Your Information</h2>
          <p>We use the information we collect to provide and improve our services, send you newsletters and updates (with your consent), respond to your inquiries, and analyze website usage to improve user experience.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">4. Cookies</h2>
          <p>We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. See our Cookie Policy for more details.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">5. Third-Party Services</h2>
          <p>We may use third-party services for analytics, advertising, and email delivery. These services have their own privacy policies governing the use of your information.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">6. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">7. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time.</p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">8. Contact</h2>
          <p>If you have questions about this Privacy Policy, please contact us at privacy@aierainsights.com.</p>
        </div>
      </div>
    </div>
  )
}
