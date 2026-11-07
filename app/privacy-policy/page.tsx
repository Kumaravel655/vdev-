import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read VelanDev's Privacy Policy to understand how we collect, use, and protect your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: April 7, 2026
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
            <p className="mt-2 leading-relaxed">
              We collect the information you submit through our contact and careers forms,
              including your name, email address, phone number, company details, and
              message content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">How We Use Information</h2>
            <p className="mt-2 leading-relaxed">
              We use submitted information to respond to inquiries, evaluate applications,
              communicate project updates, and provide requested services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Data Retention</h2>
            <p className="mt-2 leading-relaxed">
              We retain information only as long as needed for legitimate business and
              legal purposes, and we aim to delete outdated records in a timely manner.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-2 leading-relaxed">
              For privacy-related questions, contact us at info@velandev.in.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}