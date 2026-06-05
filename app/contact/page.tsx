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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
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
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground lg:max-w-xl">
                Ready to start your project? Have questions about our services?
                {" We'd love to hear from you. Get a free consultation today."}
              </p>

              {/* Quick Info */}
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start text-sm text-muted-foreground">
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

            <div className="transition-all duration-1000 delay-300">
              <div className="relative mx-auto h-80 w-80 xl:h-96 xl:w-96">
                <div className="absolute inset-0 animate-pulse-soft rounded-3xl bg-gradient-to-br from-primary/20 via-violet-500/10 to-emerald-400/20 blur-2xl" />
                <div className="absolute -inset-4 animate-rotate-slow rounded-full border border-primary/10" style={{ animationDuration: "20s" }}>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                </div>
                <div className="absolute -inset-8 animate-rotate-slow rounded-full border border-violet-500/8" style={{ animationDuration: "30s", animationDirection: "reverse" }}>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
                </div>
                <div className="relative h-full w-full animate-float overflow-hidden rounded-3xl border border-primary/20 ai-glow-intense">
                  <video src="/contact-hero.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                </div>
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
