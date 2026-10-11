"use client"

import Link from "next/link"
import { ArrowRight, Check, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { HeroMedia } from "@/components/hero-media"
import { products, statusStyles, type Product } from "@/lib/products"

const latest = products.filter((p) => p.status === "New")
const catalogue = products.filter((p) => p.status !== "New")

function StatusBadge({ product }: { product: Product }) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <Badge variant="outline" className="text-xs font-medium">{product.category}</Badge>
      <Badge variant="outline" className={cn("text-xs font-medium", statusStyles[product.status])}>{product.status}</Badge>
    </div>
  )
}

export default function ProductsPage() {
  const heroRef = useInView()
  const latestRef = useInView()
  const gridRef = useInView()

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 via-muted/20 to-background pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 aurora-bg" />
        <div ref={heroRef.ref} className="container relative mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className={cn("mb-4 border border-primary/30 bg-primary/10 text-primary transition-all duration-700", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
                <Cpu className="mr-2 h-3.5 w-3.5" aria-hidden />
                Software products
              </Badge>
              <h1 className={cn("text-balance text-4xl font-bold tracking-tight text-foreground transition-all duration-700 delay-150 sm:text-5xl lg:text-6xl", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                Software that runs <span className="text-primary">your daily work</span>
              </h1>
              <p className={cn("mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-300 sm:text-lg lg:mx-0", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                Ready-to-deploy platforms for customer messaging, accounting practices, education, HR and operations, set up around how your business already works.
              </p>
              <div className={cn("mt-8 flex flex-col justify-center gap-3 transition-all duration-700 delay-500 sm:flex-row lg:justify-start", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                <Button size="lg" asChild><Link href="/contact">Book a demo <ArrowRight className="ml-2 h-4 w-4" aria-hidden /></Link></Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent"><Link href="#latest">See what&apos;s new</Link></Button>
              </div>
            </div>

            <div className={cn("transition-all duration-1000 delay-300", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              <HeroMedia src="/products-hero.mp4" label="Product dashboard preview" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest releases */}
      <section id="latest" ref={latestRef.ref} className="scroll-mt-28 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase text-primary">Latest releases</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">New from VelanDev</h2>

            <div className={cn("mt-10 grid gap-6 md:grid-cols-2", latest.length >= 3 && "lg:grid-cols-3")}>
              {latest.map((product, i) => (
                <article
                  key={product.slug}
                  id={product.slug}
                  className={cn(
                    "group relative flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-primary/20 bg-card p-6 shadow-xl shadow-primary/5 transition-all duration-500 hover:border-primary/40 sm:p-8",
                    latestRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                      <product.icon className="h-7 w-7" aria-hidden />
                    </div>
                    <StatusBadge product={product} />
                  </div>
                  <h3 className="relative mt-6 text-2xl font-bold text-foreground">{product.title}</h3>
                  <p className="relative mt-3 max-w-prose leading-relaxed text-muted-foreground">{product.description}</p>
                  <ul className="relative mt-6 grid gap-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 rounded-xl bg-muted/60 p-3 text-sm font-medium text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-8 flex flex-1 items-end">
                    <Button asChild className="w-full sm:w-auto">
                      <Link href={product.href ?? "/contact"}>{product.href ? "See plans & pricing" : "Book a demo"} <ArrowRight className="ml-2 h-4 w-4" aria-hidden /></Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full catalogue */}
      <section ref={gridRef.ref} className="border-t border-border/50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase text-primary">All products</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Platforms in production</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {catalogue.map((product, i) => (
                <article
                  key={product.slug}
                  id={product.slug}
                  className={cn(
                    "group flex scroll-mt-28 flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5",
                    gridRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                      <product.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" aria-hidden />
                    </div>
                    <StatusBadge product={product} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{product.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="mt-6 w-full border-primary/30 bg-transparent hover:border-primary hover:bg-primary/10" asChild>
                    <Link href={product.href ?? "/contact"}>{product.href ? "See details & pricing" : product.status === "Coming Soon" ? "Join the waitlist" : "Book a demo"}</Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl border border-primary/20 bg-card p-8 sm:p-10 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Need something these don&apos;t cover?</h2>
              <p className="mt-3 text-muted-foreground">We build custom products around your process. Tell us what you need and we&apos;ll scope it with you.</p>
            </div>
            <Button size="lg" asChild className="shrink-0">
              <Link href="/contact">Discuss your requirements <ArrowRight className="ml-2 h-4 w-4" aria-hidden /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
