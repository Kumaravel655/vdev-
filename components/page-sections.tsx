"use client"

import Link from "next/link"
import type { PointerEvent, ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

/** Shared building blocks for inner pages, matching the Services page layout. */

/**
 * Full-bleed photo behind a hero. Decorative, so alt is empty. Put `dark` on the section
 * so text tokens switch to their light-on-dark values. Phones get the 960px file.
 */
export function HeroBackdrop({ name, position = "center", overlay = "bg-[radial-gradient(ellipse_at_center,rgb(0_0_0/0.85),rgb(0_0_0/0.55))]" }: { name: string; position?: string; overlay?: string }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element -- images are unoptimized; srcSet does the responsive work */}
      <img
        src={`/images/${name}.webp`}
        srcSet={`/images/${name}-sm.webp 960w, /images/${name}.webp 1920w`}
        sizes="100vw"
        alt=""
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      <div aria-hidden className={cn("pointer-events-none absolute inset-0", overlay)} />
    </>
  )
}

type LinkAction = { href: string; label: string }

export const reveal = (inView: boolean) => (inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")

/** Card surface used by every grid; same as the Services cards plus the pointer spotlight. */
export const cardClass =
  "surface-light spotlight group flex flex-col rounded-2xl bg-white p-6 shadow-lg shadow-black/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 sm:p-7"

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
  image,
}: {
  eyebrow: string
  icon: LucideIcon
  title: string
  accent: string
  description: string
  primary: LinkAction
  secondary: LinkAction
  /** Name of a /public/images photo to show behind the hero. */
  image?: string
}) {
  const { ref, isInView } = useInView()

  return (
    <section className={cn("relative overflow-hidden pb-16 pt-32 lg:pb-24 lg:pt-40", image ? "dark bg-background" : "bg-gradient-to-b from-accent/30 via-muted/20 to-background")}>
      {image ? (
        <HeroBackdrop name={image} />
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 aurora-bg" />
          <div className="pointer-events-none absolute inset-0 neural-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        </>
      )}
      <div ref={ref} className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Badge variant="secondary" className={cn("mb-4 border border-primary/30 bg-primary/10 text-primary transition-all duration-700", isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
              <Icon className="mr-2 h-3.5 w-3.5" aria-hidden />
              {eyebrow}
            </Badge>
            <h1 className={cn("text-balance text-4xl font-bold tracking-tight text-foreground transition-all duration-700 delay-150 sm:text-5xl lg:text-6xl", reveal(isInView))}>
              {title} <span className="text-primary">{accent}</span>
            </h1>
            <p className={cn("mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-300 sm:text-lg", reveal(isInView))}>
              {description}
            </p>
            <div className={cn("mt-8 flex flex-col justify-center gap-3 transition-all duration-700 delay-500 sm:flex-row", reveal(isInView))}>
              <Button size="lg" asChild>
                <Link href={primary.href}>{primary.label} <ArrowRight className="ml-2 h-4 w-4" aria-hidden /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent">
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ title, description, inView }: { title: string; description?: string; inView: boolean }) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center transition-all duration-700", reveal(inView))}>
      <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-pretty text-muted-foreground">{description}</p>}
    </div>
  )
}

/** Centred content section with a heading; children render below it. */
export function Section({
  id,
  title,
  description,
  muted,
  children,
}: {
  id?: string
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
          <SectionHeading title={title} description={description} inView={isInView} />
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
