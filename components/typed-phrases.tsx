"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

/**
 * Types each phrase, holds it, deletes it, moves to the next. Starts fully typed so the first
 * paint has real text. Decorative: give the parent heading an sr-only version of the sentence.
 */
export function TypedPhrases({ phrases, className }: { phrases: string[]; className?: string }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(phrases[0])
  const [deleting, setDeleting] = useState(false)
  const [still, setStill] = useState(false)

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  useEffect(() => {
    if (still) return
    const full = phrases[index]
    let delay = deleting ? 30 : 65
    if (!deleting && text === full) delay = 2200
    if (deleting && text === "") delay = 300

    const id = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true)
      else if (deleting && text === "") {
        setDeleting(false)
        setIndex((index + 1) % phrases.length)
      } else setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1))
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, index, phrases, still])

  return (
    <span className={cn("block", className)}>
      {text}
      {!still && <span className="ml-[0.04em] inline-block h-[0.85em] w-[0.06em] translate-y-[0.08em] animate-pulse bg-current" />}
    </span>
  )
}
