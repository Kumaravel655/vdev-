"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

const FRAME_COUNT = 80 // public/hero-frames/f001.webp … f080.webp (every 3rd frame of the source video, 960px WebP)
const SCROLL_VH = 240 // total section height; the stage stays pinned for the extra 140vh
const frameSrc = (i: number) => `/hero-frames/f${String(i + 1).padStart(3, "0")}.webp`

/**
 * Pinned full-screen stage whose background is an image sequence scrubbed by scroll position.
 * Reduced-motion users get a normal-height section showing the first frame.
 */
export function ScrollFrames({ children, overlay }: { children: ReactNode; overlay?: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setReduced(isReduced)

    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    let current = 0
    let drawn = -1
    let raf = 0
    // ponytail: loads all 80 frames up front (~2.2 MB); switch to windowed loading if the sequence grows.
    const images = Array.from({ length: isReduced ? 1 : FRAME_COUNT }, (_, i) => {
      const img = new Image()
      img.decoding = "async"
      img.src = frameSrc(i)
      img.onload = () => { if (i <= current && i > drawn) draw(current) }
      return img
    })

    // Nearest already-loaded frame at or before the target, so fast scrolls never show a blank canvas.
    const draw = (index: number) => {
      let i = index
      while (i > 0 && !images[i]?.naturalWidth) i--
      const img = images[i]
      if (!img?.complete || !img.naturalWidth) return
      const { width: cw, height: ch } = canvas
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight)
      const w = img.naturalWidth * scale
      const h = img.naturalHeight * scale
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h)
      drawn = i
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5) // frames are 960px wide; more pixels add nothing
      canvas.width = Math.round(canvas.clientWidth * dpr)
      canvas.height = Math.round(canvas.clientHeight * dpr)
      draw(current)
    }

    const update = () => {
      raf = 0
      const section = sectionRef.current
      if (!section || isReduced) return
      const rect = section.getBoundingClientRect()
      const range = section.offsetHeight - window.innerHeight
      const progress = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 0
      const index = Math.round(progress * (FRAME_COUNT - 1))
      if (index !== current || drawn !== index) {
        current = index
        draw(index)
      }
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }

    resize()
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(raf)
      images.forEach((img) => { img.onload = null })
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-black" style={{ height: reduced ? "auto" : `${SCROLL_VH}vh` }}>
      <div
        className="sticky top-0 flex min-h-[100dvh] items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${frameSrc(0)})` }}
      >
        <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />
        {overlay}
        <div className="relative w-full">{children}</div>
      </div>
    </section>
  )
}
