import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review VelanDev's Terms of Service for website use, inquiries, and service engagement.",
}

export default function TermsOfServicePage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: April 7, 2026
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">Use of Website</h2>
            <p className="mt-2 leading-relaxed">
              You agree to use this website only for lawful purposes and in a way that does
              not disrupt or misuse our services, infrastructure, or communication channels.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Service Engagement</h2>
            <p className="mt-2 leading-relaxed">
              Project timelines, pricing, and delivery terms are defined in individual
              proposals and contracts. These terms apply to general website usage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Intellectual Property</h2>
            <p className="mt-2 leading-relaxed">
              All website content, branding, and materials are owned by VelanDev unless
              otherwise stated. Reuse requires prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-2 leading-relaxed">
              For legal questions about these terms, contact info@velandev.in.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}