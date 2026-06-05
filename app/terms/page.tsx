import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - VelanDev",
  description: "VelanDev Terms of Service. Read our terms and conditions for using our software development services.",
}

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-accent/20 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Terms of Service</h1>
            <p className="mt-4 text-muted-foreground">Last updated: June 2025</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                <p className="mt-3 leading-relaxed">By accessing or using VelanDev&apos;s website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">2. Services</h2>
                <p className="mt-3 leading-relaxed">VelanDev provides custom software development, web and mobile application development, AI solutions, cloud services, and related technology consulting services. The specific scope, deliverables, and timelines for each project will be defined in a separate service agreement or statement of work.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">3. Payment Terms</h2>
                <p className="mt-3 leading-relaxed">Payment terms will be specified in individual project agreements. Standard terms include a 40% advance payment, 30% at project midpoint, and 30% upon delivery. Late payments may incur additional charges as specified in the agreement.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">4. Intellectual Property</h2>
                <p className="mt-3 leading-relaxed">Upon full payment, clients receive ownership of the custom code developed specifically for their project. VelanDev retains ownership of its proprietary tools, frameworks, and pre-existing code libraries used during development.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">5. Confidentiality</h2>
                <p className="mt-3 leading-relaxed">Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. We are happy to sign Non-Disclosure Agreements (NDAs) upon request.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
                <p className="mt-3 leading-relaxed">VelanDev&apos;s total liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific project in question. We are not liable for indirect, incidental, or consequential damages.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">7. Termination</h2>
                <p className="mt-3 leading-relaxed">Either party may terminate a project agreement with 30 days written notice. In case of termination, the client shall pay for all work completed up to the termination date.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">8. Governing Law</h2>
                <p className="mt-3 leading-relaxed">These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu, India.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">9. Contact</h2>
                <p className="mt-3 leading-relaxed">For questions about these Terms of Service, please contact us at hello@velandev.in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
