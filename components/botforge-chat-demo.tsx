"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type Line = { from: "customer"; text: string } | { from: "bot"; text: ReactNode }

const script: Line[] = [
  { from: "customer", text: "Is ghee pongal there now?" },
  { from: "bot", text: <>Yes! Ghee pongal ₹60, till 11 am. Reply <b>1</b> to order, <b>2</b> for menu.</> },
  { from: "customer", text: "1" },
  { from: "bot", text: "Order placed ✓ Ready for pickup in 10 min." },
]

const bubble = "rounded-[3cqw] px-[4cqw] py-[2.5cqw] motion-safe:animate-[fade-in_0.35s_ease-out]"

/**
 * The chat drawn on the BotForge phone photo. The customer types and sends, BotForge "types" and
 * replies, then it loops. Runs only while on screen; reduced-motion visitors get the full chat at once.
 */
export function BotForgeChatDemo({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [onScreen, setOnScreen] = useState(false)
  const [still, setStill] = useState(false)
  const [shown, setShown] = useState(0)
  const [draft, setDraft] = useState("")
  const [botTyping, setBotTyping] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true)
      setShown(script.length)
      return
    }
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.4 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!onScreen || still) return
    let cancelled = false
    const wait = (ms: number) =>
      new Promise<void>((resolve, reject) => setTimeout(() => (cancelled ? reject() : resolve()), ms))

    ;(async () => {
      while (true) {
        setShown(0)
        await wait(700)
        for (let i = 0; i < script.length; i++) {
          const line = script[i]
          if (line.from === "customer") {
            for (let c = 1; c <= line.text.length; c++) {
              setDraft(line.text.slice(0, c))
              await wait(55)
            }
            await wait(350)
            setDraft("")
          } else {
            setBotTyping(true)
            await wait(1300)
            setBotTyping(false)
          }
          setShown(i + 1)
          await wait(line.from === "customer" ? 500 : 1500)
        }
        await wait(3500)
      }
    })().catch(() => {
      setDraft("")
      setBotTyping(false)
    })

    return () => {
      cancelled = true
    }
  }, [onScreen, still])

  return (
    <div ref={ref} aria-hidden className={className}>
      <div className="bg-[#0b5c4f] px-[6cqw] pb-[4cqw] pt-[8cqw] text-white">
        <p className="text-[7cqw] font-semibold leading-tight">Tiffin Centre</p>
        <p className="text-[5cqw] text-white/75">{botTyping ? "typing…" : "auto-reply by BotForge"}</p>
      </div>

      <div className="flex flex-1 flex-col gap-[3.5cqw] overflow-hidden p-[5cqw] text-[6.2cqw] leading-snug text-neutral-900">
        {script.slice(0, shown).map((line, i) =>
          line.from === "customer" ? (
            <p key={i} className={`ml-auto max-w-[82%] bg-[#d9fdd3] ${bubble}`}>{line.text}</p>
          ) : (
            <p key={i} className={`max-w-[86%] bg-white ${bubble}`}>{line.text}</p>
          ),
        )}
        {botTyping && (
          <p className={`flex w-fit gap-[1.5cqw] bg-white ${bubble}`}>
            {[0, 150, 300].map((d) => (
              <span key={d} className="h-[2.2cqw] w-[2.2cqw] animate-bounce rounded-full bg-neutral-400" style={{ animationDelay: `${d}ms` }} />
            ))}
          </p>
        )}
      </div>

      {/* Input bar: the customer's message is typed here before it is sent */}
      <div className="flex items-center gap-[2.5cqw] px-[4cqw] pb-[5cqw]">
        <p className="min-h-[10cqw] flex-1 truncate rounded-full bg-white px-[4cqw] py-[2cqw] text-[5.8cqw] text-neutral-900">
          {draft || <span className="text-neutral-400">Message</span>}
          {draft && <span className="ml-px inline-block h-[5cqw] w-px animate-pulse bg-neutral-900 align-middle" />}
        </p>
        <span className="flex h-[10cqw] w-[10cqw] shrink-0 items-center justify-center rounded-full bg-[#0b5c4f] text-[5cqw] text-white">➤</span>
      </div>
    </div>
  )
}
