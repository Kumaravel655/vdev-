import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { BrainCircuit, Clock, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact - VelanDev | Get a Free Consultation",
  description: "Get in touch with VelanDev for your software development needs. Request a free quote, book a consultation, or discuss your project requirements.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="relative bg-gradient-to-b from-accent/30 via-muted/20 to-background py-16 lg:py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute inset-0 neural-grid opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 border border-primary/30 bg-primary/10 text-primary">
              <BrainCircuit className="mr-2 h-3.5 w-3.5" />
              Get in Touch
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-violet-400 bg-clip-text text-transparent">
                VelanDev
              </span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Ready to start your project? Have questions about our services?
              {"We'd love to hear from you. Get a free consultation today."}
            </p>

            {/* Quick Info */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Mon–Fri 9AM–6PM IST
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                6369472659
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Chennai, India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  )
}
