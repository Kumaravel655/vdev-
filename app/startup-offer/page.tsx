import type { Metadata } from "next"
import { BadgeCheck, ClipboardList, Lightbulb, Rocket, Smartphone } from "lucide-react"
import { FaqList, JsonLd, SectionTitle, breadcrumbSchema, faqSchema } from "@/components/pricing-blocks"
import { HeroBackdrop } from "@/components/page-sections"
import { StartupOfferForm } from "@/components/startup-offer-form"
import { startupFaqs, startupOffer } from "@/lib/pricing"
import { site } from "@/lib/site"

const PATH = "/startup-offer"
const range = `${startupOffer.minPct}-${startupOffer.maxPct}%`

export const metadata: Metadata = {
  title: `Startup Support - ${range} Off Building Your App Idea`,
  description: `Have an idea for a mobile app or platform? VelanDev builds your first version at ${startupOffer.minPct}% to ${startupOffer.maxPct}% off: design, development and Play Store launch. Apply with your idea.`,
  keywords: ["startup support", "app development for startups", "startup app discount", "build my app idea", "mvp development chennai", "startup mobile app tamil nadu"],
  alternates: { canonical: PATH },
  openGraph: { title: `${range} off building your startup idea`, url: PATH, type: "website" },
}

const steps = [
  { icon: ClipboardList, title: "Share your idea", text: "Tell us what you want to build and who it's for. Takes 3 minutes." },
  { icon: Lightbulb, title: "Idea review", text: "A call to understand the problem, your plans and the scope of the first version." },
  { icon: BadgeCheck, title: "Your discount, in writing", text: `We confirm your exact discount between ${startupOffer.minPct}% and ${startupOffer.maxPct}% before any work starts.` },
  { icon: Smartphone, title: "Build & launch", text: "We design, build and publish your app on Google Play and the web." },
]

export default function StartupOfferPage() {
  return (
    <div className="flex flex-col">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Offer",
          name: `Startup support: ${range} off your first version`,
          description: metadata.description,
          url: `${site.url}${PATH}`,
          eligibleCustomerType: "Founders with a mobile app or platform idea",
          offeredBy: { "@type": "Organization", name: site.name, url: site.url },
        }}
      />
      <JsonLd data={faqSchema(startupFaqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Offers", path: "/offers" }, { name: "Startup support", path: PATH }])} />

      {/* Hero */}
      <section className="dark relative overflow-hidden bg-background pb-16 pt-32 lg:pb-20 lg:pt-40">
        <HeroBackdrop name="startup-hero" position="center 35%" overlay="bg-black/65 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/55 lg:to-black/25" />
        <div className="container relative mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-sm font-medium text-amber-700 dark:text-gold">
                <Rocket className="h-4 w-4" aria-hidden />
                Startup support
              </p>
              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Have an app idea? We build it at <span className="text-primary">{range} off</span>
              </h1>
              {/* Answer-first paragraph for AI answers and featured snippets */}
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
                Founders with an idea for a mobile app or platform, like a marketplace for building materials, get their first version built at {startupOffer.minPct}% to {startupOffer.maxPct}% off our normal price. We set your exact discount after an idea review.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <a href="#apply" className="inline-flex h-12 items-center rounded-md bg-primary px-7 text-base font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90">
                  Apply with your idea
                </a>
              </div>
            </div>

            {/* The whole offer in one glance */}
            <div className="mx-auto w-full max-w-sm rounded-3xl border border-gold/50 bg-card p-6 shadow-2xl shadow-primary/10 sm:p-8">
              <p className="text-sm font-semibold uppercase text-amber-700 dark:text-gold">Your discount</p>
              <p className="mt-3 font-display text-6xl font-extrabold tabular-nums text-foreground">{range}</p>
              <p className="mt-1 text-sm text-muted-foreground">off the build of your first version</p>
              <ul className="mt-6 space-y-2 border-t border-border/60 pt-5">
                {["Design & development", "Android, iPhone or web", "Play Store & web launch", "You own the app and code"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-foreground">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle title="From idea to launched app" />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="flex items-center justify-between">
                  <s.icon className="h-6 w-6 text-primary" aria-hidden />
                  <span className="text-sm font-semibold tabular-nums text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Terms: published so the range is honest */}
      <section className="bg-muted/20 py-16 lg:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <SectionTitle title="Who qualifies and what's included" />
          <ul className="space-y-3 rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            {[
              "Founders with an idea for a mobile app, web platform or marketplace. Nothing needs to be built yet.",
              `${startupOffer.minPct}% to ${startupOffer.maxPct}% off our normal build price for the first version, set after an idea review.`,
              "Your exact discount and the scope are confirmed in writing before work starts.",
              "Hosting, third-party fees (such as Play Store and payment gateway charges) and later versions are quoted separately.",
              "The app is published under your name, and the code is handed over to you.",
              "One discount per idea; not combined with other offers.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application */}
      <section id="apply" className="scroll-mt-24 py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <SectionTitle title="Tell us about your idea" intro="We reply on WhatsApp within 1 working day." />
          <StartupOfferForm />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto max-w-3xl px-4">
          <SectionTitle title="Startup support questions" />
          <FaqList faqs={startupFaqs} />
        </div>
      </section>
    </div>
  )
}
