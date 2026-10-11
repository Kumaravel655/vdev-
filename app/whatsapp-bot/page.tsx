import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BadgeCheck, Bot, CalendarCheck, Clock, Megaphone, MessageCircle, ShoppingBag, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaqList, JsonLd, OfferGrid, PlanGrid, PlanTable, SectionTitle, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/pricing-blocks"
import { inr, offers, websitePlans, whatsappFaqs, whatsappPlans } from "@/lib/pricing"
import { whatsappLink } from "@/lib/site"

const PATH = "/whatsapp-bot"
const lowest = whatsappPlans[0].price

export const metadata: Metadata = {
  title: `WhatsApp Bot from ${inr(lowest)}/month — Low-Cost Chatbot India`,
  description: `Automate WhatsApp replies, leads, broadcasts and orders from ${inr(lowest)}/month on the official WhatsApp Business API, setup free on yearly plans. BotForge plans for shops, clinics and small businesses in Vellore, Chennai and across India.`,
  keywords: ["whatsapp bot", "whatsapp bot price", "cheapest whatsapp bot india", "whatsapp chatbot for business", "whatsapp automation", "whatsapp business api chennai", "whatsapp auto reply bot"],
  alternates: { canonical: PATH },
  openGraph: { title: `WhatsApp Bot from ${inr(lowest)}/month`, description: "Instant 24/7 replies, lead capture and broadcasts on the official WhatsApp Business API. Setup free on yearly plans.", url: PATH, type: "website" },
}

const useCases = [
  { icon: Clock, title: "Reply in seconds, 24/7", text: "Customers get an answer the moment they message, even at midnight." },
  { icon: Users, title: "Capture every lead", text: "Name, number and requirement land in your Google Sheet automatically." },
  { icon: Megaphone, title: "Send offers to customers", text: "Broadcast new arrivals, festival offers and reminders to opted-in customers." },
  { icon: ShoppingBag, title: "Take orders in chat", text: "Share your catalogue and accept orders without a website checkout." },
  { icon: CalendarCheck, title: "Book appointments", text: "Clinics, salons and coaching centres take bookings inside WhatsApp." },
  { icon: Bot, title: "Hand over to your team", text: "When a person is needed, the chat moves to your shared team inbox." },
]

const chat = [
  { from: "customer", text: "Hi, what are your timings?" },
  { from: "bot", text: "Hello! 👋 We're open 9 AM – 9 PM, Monday to Saturday.\n\n1️⃣ Price list\n2️⃣ Book a visit\n3️⃣ Talk to our team" },
  { from: "customer", text: "1" },
  { from: "bot", text: "Here's our latest price list 📄. Want me to book a visit for you?" },
]

export default function WhatsappBotPage() {
  const featuredOffers = offers.filter((o) => ["yearly", "combo", "free-audit"].includes(o.id))

  return (
    <div className="flex flex-col">
      <JsonLd data={serviceSchema("WhatsApp Bot Automation", metadata.description as string, PATH, whatsappPlans)} />
      <JsonLd data={faqSchema(whatsappFaqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "WhatsApp Bot", path: PATH }])} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 via-muted/20 to-background pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-1 text-sm font-medium text-foreground">
                <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden />
                BotForge · Official WhatsApp Business API
              </p>
              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                WhatsApp bot from <span className="text-primary">{inr(lowest)}/month</span>
              </h1>
              {/* Answer-first paragraph: the sentence AI answers and featured snippets quote. */}
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
                VelanDev&apos;s WhatsApp bot replies to your customers instantly, 24/7, starting at {inr(lowest)} per month. Pay yearly and the setup fee is waived. It answers questions, captures leads, sends offers and takes orders on your own WhatsApp number.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Button size="lg" asChild className="h-12">
                  <a href={whatsappLink(`Hi VelanDev, I want a WhatsApp bot. Please share details of the ${inr(lowest)}/month plan.`)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" aria-hidden /> Get a free demo on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-12 bg-transparent">
                  <Link href="#plans">See plans</Link>
                </Button>
              </div>
              <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start">
                {[`From ${inr(lowest)}/month`, "Official WhatsApp API", "Setup free on yearly plans"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-primary" aria-hidden />{t}</li>
                ))}
              </ul>
            </div>

            {/* Chat preview: shows the product instead of describing it */}
            <div aria-label="Example WhatsApp bot conversation" role="img" className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border/60 bg-[#0b141a] shadow-2xl shadow-primary/20">
              <div className="flex items-center gap-3 bg-[#202c33] px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-sm font-bold text-white">Y</div>
                <div>
                  <p className="text-sm font-semibold text-white">Your Business</p>
                  <p className="text-xs text-white/60">online · replies instantly</p>
                </div>
              </div>
              <div className="space-y-3 p-4">
                {chat.map((m, i) => (
                  <p
                    key={i}
                    className={
                      m.from === "bot"
                        ? "max-w-[85%] whitespace-pre-line rounded-2xl rounded-tl-sm bg-[#202c33] px-3 py-2 text-sm text-white"
                        : "ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-[#005c4b] px-3 py-2 text-sm text-white"
                    }
                  >
                    {m.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="scroll-mt-24 py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Plans" title="WhatsApp bot pricing" intro="Monthly plans with a one-time setup fee. Pay yearly and setup is free." />
          <PlanGrid plans={whatsappPlans} contactService="whatsapp-bot" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
            Prices exclude GST. Messages your business starts (broadcasts, reminders) are charged by Meta at official rates and billed at cost. Replies to customer messages are free.
          </p>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-muted/20 py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="What it does" title="What a WhatsApp bot does for your business" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-2xl border border-border/60 bg-card p-6">
                <u.icon className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-4 font-semibold text-foreground">{u.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <SectionTitle eyebrow="Compare" title="WhatsApp bot plans at a glance" />
          <PlanTable plans={whatsappPlans} caption="VelanDev WhatsApp bot plans and monthly prices" />
        </div>
      </section>

      {/* Offers */}
      <section className="bg-muted/20 py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Offers" title="Current offers" />
          <OfferGrid offers={featuredOffers} />
          <p className="mt-8 text-center">
            <Link href="/offers" className="text-sm font-semibold text-primary">See all offers →</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <SectionTitle eyebrow="FAQ" title="WhatsApp bot questions, answered" />
          <FaqList faqs={whatsappFaqs} />
        </div>
      </section>

      {/* Cross-sell + CTA */}
      <section className="px-4 pb-20 lg:pb-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-violet-700 to-purple-900 px-6 py-14 text-center sm:px-12">
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">Need a website too?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Websites start at {inr(websitePlans[0].price)}. Buy a Business or Pro website and get BotForge Starter setup free plus your first month free.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" variant="secondary" asChild className="h-12 w-full sm:w-auto">
              <Link href="/website-design-cost">See website prices <ArrowRight className="ml-2 h-4 w-4" aria-hidden /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-12 w-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto">
              <Link href="/offers">All offers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
