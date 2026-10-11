import type { Metadata } from "next"
import { BadgeCheck, ClipboardList, Rocket, ShieldCheck } from "lucide-react"
import { FaqList, JsonLd, SectionTitle, breadcrumbSchema, faqSchema } from "@/components/pricing-blocks"
import { StartupOfferForm } from "@/components/startup-offer-form"
import { startupFaqs, startupOffer } from "@/lib/pricing"
import { site } from "@/lib/site"

const PATH = "/startup-offer"

export const metadata: Metadata = {
  title: `Startup Offer — Up to ${startupOffer.maxPct}% Off for New Businesses`,
  description: `New business in Vellore, Chennai or Tamil Nadu? Get up to ${startupOffer.maxPct}% off setup and the first ${startupOffer.months} months of WhatsApp bot, billing software or CRM. Apply with your business details.`,
  keywords: ["startup offer", "new business discount", "software for new business", "billing software discount", "whatsapp bot offer", "startup website chennai", "new shop billing software vellore"],
  alternates: { canonical: PATH },
  openGraph: { title: `Up to ${startupOffer.maxPct}% off for new businesses`, url: PATH, type: "website" },
}

const steps = [
  { icon: ClipboardList, title: "Apply", text: "Tell us about your business and what you need. Takes 2 minutes." },
  { icon: ShieldCheck, title: "We verify", text: "We check your start date from GST, Udyam or shop licence." },
  { icon: Rocket, title: "Start with your discount", text: "Your discount applies to setup and the first 3 months." },
]

export default function StartupOfferPage() {
  return (
    <div className="flex flex-col">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Offer",
          name: `Startup offer: up to ${startupOffer.maxPct}% off`,
          description: metadata.description,
          url: `${site.url}${PATH}`,
          eligibleCustomerType: "Business started within the last 12 months",
          offeredBy: { "@type": "Organization", name: site.name, url: site.url },
        }}
      />
      <JsonLd data={faqSchema(startupFaqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Offers", path: "/offers" }, { name: "Startup offer", path: PATH }])} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/30 via-muted/20 to-background pb-16 pt-32 lg:pb-20 lg:pt-40">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-sm font-medium text-amber-700 dark:text-gold">
                <Rocket className="h-4 w-4" aria-hidden />
                For businesses under 12 months old
              </p>
              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Just started? Get up to <span className="text-primary">{startupOffer.maxPct}% off</span>
              </h1>
              {/* Answer-first paragraph for AI answers and featured snippets */}
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
                New businesses get up to {startupOffer.maxPct}% off setup and the first {startupOffer.months} months of BotForge WhatsApp bot, Billing OS or CRM. Share your business details and we&apos;ll confirm your discount within 1 working day.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <a href="#apply" className="inline-flex h-12 items-center rounded-md bg-primary px-7 text-base font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90">
                  Check my discount
                </a>
              </div>
            </div>

            {/* Tier card: the whole rule in one glance */}
            <div className="mx-auto w-full max-w-sm rounded-3xl border border-primary/30 bg-card p-6 shadow-2xl shadow-primary/10 sm:p-8">
              <p className="text-sm font-semibold uppercase text-primary">Your discount</p>
              <ul className="mt-4 divide-y divide-border/60">
                {startupOffer.tiers.map((t) => (
                  <li key={t.pct} className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm text-foreground">{t.label}</span>
                    <span className="text-4xl font-bold tabular-nums text-primary">{t.pct}%</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-muted-foreground">
                On setup fees and the first {startupOffer.months} months of subscriptions. Website builds stay at the normal price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="How it works" title="Three steps to your discount" />
          <ol className="grid gap-4 md:grid-cols-3">
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

      {/* Terms: published so "up to" is honest */}
      <section className="bg-muted/20 py-16 lg:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <SectionTitle eyebrow="Terms" title="Who qualifies and what's included" />
          <ul className="space-y-3 rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            {[
              "Business started or registered within the last 12 months.",
              `${startupOffer.tiers[0].pct}% off if under 3 months old; ${startupOffer.tiers[1].pct}% off if 3 to 12 months old.`,
              `Applies to setup fees and the first ${startupOffer.months} months of BotForge, Billing OS and CRM subscriptions.`,
              "One-time builds (websites, e-commerce, delivery apps, custom software) are charged at the normal price.",
              "Start date verified from GST, Udyam, shop licence or another proof before billing.",
              "One offer per business; not combined with other offers.",
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
          <SectionTitle eyebrow="Apply" title="Tell us about your business" intro="We reply on WhatsApp within 1 working day." />
          <StartupOfferForm />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto max-w-3xl px-4">
          <SectionTitle eyebrow="FAQ" title="Startup offer questions" />
          <FaqList faqs={startupFaqs} />
        </div>
      </section>
    </div>
  )
}
