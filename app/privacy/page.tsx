import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - VelanDev",
  description: "VelanDev Privacy Policy. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-accent/20 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
            <p className="mt-4 text-muted-foreground">Last updated: June 2025</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
                <p className="mt-3 leading-relaxed">VelanDev (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website velandev.in and use our services.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
                <p className="mt-3 leading-relaxed"><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, company name, and other information you provide through our contact forms.</p>
                <p className="mt-2 leading-relaxed"><strong className="text-foreground">Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages, and other diagnostic data collected automatically.</p>
                <p className="mt-2 leading-relaxed"><strong className="text-foreground">Cookies:</strong> We use cookies and similar tracking technologies to improve your browsing experience.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send you project updates and service-related communications</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">4. Data Sharing</h2>
                <p className="mt-3 leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and services, subject to confidentiality agreements.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">5. Data Security</h2>
                <p className="mt-3 leading-relaxed">We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">6. Your Rights</h2>
                <p className="mt-3 leading-relaxed">You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at hello@velandev.in.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">7. Contact Us</h2>
                <p className="mt-3 leading-relaxed">If you have any questions about this Privacy Policy, please contact us:</p>
                <p className="mt-2"><strong className="text-foreground">Email:</strong> hello@velandev.in</p>
                <p><strong className="text-foreground">Address:</strong> Sholinganallur, Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
