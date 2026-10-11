"use client"

import Link from "next/link"
import type { PointerEvent, ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { HeroMedia } from "@/components/hero-media"

/** Shared building blocks for inner pages, matching the Services page layout. */

type LinkAction = { href: string; label: string }

export const reveal = (inView: boolean) => (inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")

/** Card surface used by every grid; same as the Services cards plus the pointer spotlight. */
export const cardClass =
  "spotlight group flex flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-7"

/** Moves the `.spotlight` glow to the pointer. */
export function trackSpotlight(event: PointerEvent<HTMLElement>) {
  const el = event.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty("--x", `${event.clientX - rect.left}px`)
  el.style.setProperty("--y", `${event.clientY - rect.top}px`)
}

export function PageHero({
  eyebrow,
  icon: Icon,
  title,
  accent,
  description,
  primary,
  secondary,
  media,
}: {
  eyebrow: string
  icon: LucideIcon
  title: string
  accent: string
  description: string
  primary: LinkAction
  secondary: LinkAction
  media: { src: string; label: string }
}) {
  const { ref, isInView } = useInView()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 via-muted/20 to-background pb-16 pt-32 lg:pb-24 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 aurora-bg" />
      <div className="pointer-events-none absolute inset-0 neural-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div ref={ref} className="container relative mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className={cn("mb-4 border border-primary/30 bg-primary/10 text-primary transition-all duration-700", isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
              <Icon className="mr-2 h-3.5 w-3.5" aria-hidden />
              {eyebrow}
            </Badge>
            <h1 className={cn("text-balance text-4xl font-bold tracking-tight text-foreground transition-all duration-700 delay-150 sm:text-5xl lg:text-6xl", reveal(isInView))}>
              {title} <span className="text-primary">{accent}</span>
            </h1>
            <p className={cn("mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-300 sm:text-lg lg:mx-0", reveal(isInView))}>
              {description}
            </p>
            <div className={cn("mt-8 flex flex-col justify-center gap-3 transition-all duration-700 delay-500 sm:flex-row lg:justify-start", reveal(isInView))}>
              <Button size="lg" asChild>
                <Link href={primary.href}>{primary.label} <ArrowRight className="ml-2 h-4 w-4" aria-hidden /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent">
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            </div>
          </div>

          <div className={cn("transition-all duration-1000 delay-300", reveal(isInView))}>
            <HeroMedia src={media.src} label={media.label} />
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description, inView }: { eyebrow: string; title: string; description?: string; inView: boolean }) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center transition-all duration-700", reveal(inView))}>
      <p className="text-sm font-semibold uppercase text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-pretty text-muted-foreground">{description}</p>}
    </div>
  )
}

/** Centred content section with a heading; children render below it. */
export function Section({
  id,
  eyebrow,
  title,
  description,
  muted,
  children,
}: {
  id?: string
  eyebrow: string
  title: string
  description?: string
  muted?: boolean
  children: (inView: boolean) => ReactNode
}) {
  const { ref, isInView } = useInView()

  return (
    <section id={id} ref={ref} className={cn("scroll-mt-28 py-20 lg:py-28", muted && "bg-muted/20")}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} inView={isInView} />
          <div className="mt-12">{children(isInView)}</div>
        </div>
      </div>
    </section>
  )
}

export function CtaPanel({ title, description, primary, secondary }: { title: string; description: string; primary: LinkAction; secondary: LinkAction }) {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="px-4 pb-20 lg:pb-28">
      <div className={cn("relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-violet-700 to-purple-900 px-6 py-16 text-center transition-all duration-700 sm:px-12 lg:py-20", reveal(isInView))}>
        <div aria-hidden className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">{description}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" variant="secondary" asChild className="group h-12 w-full px-7 text-base sm:w-auto">
              <Link href={primary.href}>
                {primary.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-12 w-full border-white/40 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white sm:w-auto">
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
