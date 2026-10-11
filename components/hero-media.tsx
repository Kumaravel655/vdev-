/** Framed looping video used as the visual on inner-page heroes. Scales to its column; never wider than the viewport. */
export function HeroMedia({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[18rem] sm:max-w-xs xl:max-w-sm">
      <div aria-hidden className="absolute inset-4 rounded-3xl bg-primary/25 blur-3xl" />
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-2xl shadow-primary/20">
        <video src={src} autoPlay loop muted playsInline aria-label={label} className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
      </div>
    </div>
  )
}
