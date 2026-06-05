"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, Check, Star, Sparkles, HelpCircle, ChevronDown, Globe, Smartphone, ShoppingCart, Building2, Brain, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsInView(true) }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, isInView }
}

const tiers = [
  { title: "Business Website", price: "₹15,000", period: "starting from", icon: Globe, popular: false, features: ["Up to 8 pages", "Mobile responsive design", "Contact form", "SEO optimization", "Free domain setup (1 year)", "3 months support"], color: "from-primary/10 to-emerald-400/5" },
  { title: "E-Commerce Website", price: "₹40,000", period: "starting from", icon: ShoppingCart, popular: true, features: ["Full product catalog", "Payment gateway integration", "Order management", "Admin dashboard", "Inventory tracking", "6 months support"], color: "from-primary/20 to-violet-500/10" },
  { title: "Mobile Application", price: "₹75,000", period: "starting from", icon: Smartphone, popular: false, features: ["iOS & Android", "UI/UX design", "Backend API development", "Push notifications", "App Store deployment", "6 months support"], color: "from-violet-500/10 to-primary/5" },
  { title: "ERP / CRM System", price: "₹1,50,000+", period: "starting from", icon: Building2, popular: false, features: ["Custom modules", "Multi-user roles", "Reporting & analytics", "Third-party integrations", "Data migration", "12 months support"], color: "from-emerald-400/10 to-primary/5" },
  { title: "AI Agent / Chatbot", price: "₹50,000+", period: "starting from", icon: Brain, popular: false, features: ["Custom AI model training", "Natural language processing", "Knowledge base integration", "Multi-channel deployment", "Analytics dashboard", "6 months support"], color: "from-violet-500/10 to-emerald-400/5" },
  { title: "Custom SaaS Product", price: "Custom", period: "let's discuss", icon: Server, popular: false, features: ["Full-stack development", "Multi-tenant architecture", "Subscription management", "CI/CD pipeline", "Cloud deployment", "Ongoing partnership"], color: "from-primary/10 to-violet-500/5" },
]

const faqs = [
  { q: "What is included in the starting price?", a: "The starting price covers a standard scope. Complex features, custom integrations, and advanced requirements may increase the cost. We provide a detailed estimate after understanding your needs." },
  { q: "Do you offer payment plans?", a: "Yes, we offer flexible payment plans. Typically 40% upfront, 30% at midpoint, and 30% on delivery. For larger projects, we can arrange monthly installments." },
  { q: "How long does a typical project take?", a: "A business website takes 2-4 weeks. E-commerce sites take 4-8 weeks. Mobile apps take 8-16 weeks. ERP/CRM systems take 3-6 months. AI projects vary based on complexity." },
  { q: "What if I need changes after delivery?", a: "All plans include a support period for bug fixes and minor changes. Major feature additions can be discussed as a new phase or maintenance contract." },
  { q: "Do you provide hosting and maintenance?", a: "Yes, we can set up and manage hosting on AWS, DigitalOcean, or your preferred provider. Maintenance plans start at ₹5,000/month." },
]

export default function PricingPage() {
  const heroRef = useInView()
  const gridRef = useInView()
  const faqRef = useInView()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 via-muted/20 to-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute inset-0 neural-grid opacity-20" />
        <div ref={heroRef.ref} className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className={cn("mb-4 border border-primary/30 bg-primary/10 text-primary transition-all duration-700", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}><Sparkles className="mr-2 h-3.5 w-3.5" />Transparent Pricing</Badge>
              <h1 className={cn("text-balance text-4xl font-bold tracking-tight text-foreground transition-all duration-700 delay-150 sm:text-5xl", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-violet-400 bg-clip-text text-transparent">Pricing</span> Plans
              </h1>
              <p className={cn("mt-6 text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-300 sm:text-lg lg:max-w-xl", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                Clear, competitive pricing for every business size. No hidden fees. Get a custom quote today.
              </p>
              <div className={cn("mt-8 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-500 justify-center lg:justify-start", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                <Button size="lg" asChild className="ai-glow"><Link href="/contact">Get Custom Quote <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </div>
            </div>

            <div className={cn("hidden lg:block transition-all duration-1000 delay-300", heroRef.isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0")}>
              <div className="relative mx-auto h-80 w-80 xl:h-96 xl:w-96">
                <div className="absolute inset-0 animate-pulse-soft rounded-3xl bg-gradient-to-br from-primary/20 via-violet-500/10 to-emerald-400/20 blur-2xl" />
                <div className="absolute -inset-4 animate-rotate-slow rounded-full border border-primary/10" style={{ animationDuration: "18s" }}>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gold shadow-lg shadow-gold/50" />
                </div>
                <div className="absolute -inset-8 animate-rotate-slow rounded-full border border-violet-500/8" style={{ animationDuration: "28s", animationDirection: "reverse" }}>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
                </div>
                <div className="relative h-full w-full animate-float overflow-hidden rounded-3xl border border-primary/20 ai-glow-intense">
                  <video src="/pricing-hero.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={gridRef.ref} className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Card key={tier.title} className={cn("group relative flex flex-col border border-border/50 bg-card shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/5", tier.popular && "border-primary/50 shadow-primary/10", gridRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")} style={{ transitionDelay: `${i * 100}ms` }}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-emerald-400 text-white border-0 shadow-lg shadow-primary/30 px-4">
                      <Star className="mr-1 h-3 w-3" /> Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className={cn("bg-gradient-to-br rounded-t-lg", tier.color)}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background/80 backdrop-blur-sm">
                    <tier.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{tier.title}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                    <span className="ml-2 text-sm text-muted-foreground">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col pt-6">
                  <ul className="flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={tier.popular ? "default" : "outline"} className={cn("mt-8 w-full", tier.popular ? "ai-glow" : "border-primary/30 bg-transparent hover:bg-primary/10 hover:border-primary")} asChild>
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef.ref} className="bg-muted/20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <div className={cn("mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700", faqRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}><HelpCircle className="h-4 w-4" />FAQ</div>
              <h2 className={cn("text-3xl font-bold text-foreground transition-all duration-700", faqRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className={cn("rounded-2xl border border-border/50 bg-card/50 transition-all duration-500", faqRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")} style={{ transitionDelay: `${300 + i * 80}ms` }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between p-5 text-left">
                    <span className="font-medium text-foreground">{faq.q}</span>
                    <ChevronDown className={cn("h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300", openFaq === i && "rotate-180")} />
                  </button>
                  <div className={cn("overflow-hidden transition-all duration-300", openFaq === i ? "max-h-40 pb-5 px-5" : "max-h-0")}>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 animated-gradient opacity-95" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Need a Custom Quote?</h2>
            <p className="mt-4 text-white/80">Every project is unique. Contact us for a personalized estimate tailored to your requirements.</p>
            <Button size="lg" variant="secondary" asChild className="mt-8 shadow-2xl transition-all duration-300 hover:scale-105"><Link href="/contact">Get Custom Quote <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
