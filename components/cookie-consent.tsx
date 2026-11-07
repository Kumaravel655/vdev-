"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"

const KEY = "velandev-cookie-consent"
const OPEN_EVENT = "open-cookie-settings"

export type Consent = "all" | "essential"

/** The visitor's choice, or null if they haven't chosen. Check this before loading any analytics. */
export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === "all" || v === "essential" ? v : null
  } catch {
    return null
  }
}

/** Reopens the banner, e.g. from a "Cookie settings" link. */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}

/**
 * Cookie notice. Both choices are equal-weight buttons (no dark pattern), the choice is saved
 * in localStorage, and a "consent" event lets future analytics start only after "all".
 */
export function CookieConsent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!getConsent()) setOpen(true)
    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_EVENT, reopen)
    return () => window.removeEventListener(OPEN_EVENT, reopen)
  }, [])

  const choose = (value: Consent) => {
    try {
      localStorage.setItem(KEY, value)
    } catch {
      /* private mode: the banner simply shows again next visit */
    }
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: value }))
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-text"
      className="surface-light fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-2xl bg-white p-5 shadow-2xl shadow-black/40 ring-1 ring-black/5 motion-safe:animate-[fade-in_0.3s_ease-out] sm:bottom-5 sm:p-6"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <Cookie className="h-5 w-5 text-primary" aria-hidden />
        </span>
        <div>
          <h2 id="cookie-title" className="font-semibold text-foreground">Cookies on this site</h2>
          <p id="cookie-text" className="mt-1 text-sm leading-relaxed text-muted-foreground">
            We use essential cookies so the site works. Optional cookies, like analytics, are only set if you accept.{" "}
            <Link href="/cookie-policy" className="font-medium text-primary underline-offset-4 hover:underline">
              Cookie policy
            </Link>
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Button variant="outline" className="h-11 border-border bg-white text-foreground hover:bg-muted" onClick={() => choose("essential")}>
          Only essential
        </Button>
        <Button className="h-11" onClick={() => choose("all")}>
          Accept all
        </Button>
      </div>
    </div>
  )
}
