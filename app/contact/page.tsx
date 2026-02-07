import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact - VelanDev",
  description: "Get in touch with VelanDev for your software development needs. Request a quote or discuss your project requirements.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact VelanDev
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Ready to start your project? Have questions about our services?
              {"We'd love to hear from you."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  )
}
