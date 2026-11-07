"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const categories = ["Marketplace / e-commerce", "Delivery & logistics", "Construction & real estate", "Education", "Health", "Finance", "Social / community", "Other"]
const stages = ["Just an idea", "Designs or a plan ready", "Partly built", "Already launched"]
const needs = ["Android app", "iPhone app", "Web platform", "Admin panel", "AI features"]

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"

export function StartupOfferForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const chosen = form.getAll("needs").map(String)
    if (chosen.length === 0) {
      setError("Pick at least one thing you want built.")
      return
    }
    setError(null)
    setStatus("sending")

    const field = (k: string) => String(form.get(k) || "").trim()
    const message = [
      "STARTUP SUPPORT APPLICATION",
      `Idea: ${field("business")}`,
      `Category: ${field("category")}`,
      `City: ${field("city")}`,
      `Stage: ${field("stage")}`,
      `Wants built: ${chosen.join(", ")}`,
      `Description: ${field("notes")}`,
    ].filter(Boolean).join("\n")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: field("owner"),
          phone: field("phone"),
          email: field("email"),
          company: field("business"),
          service: "startup-offer",
          message,
        }),
      })
      if (!res.ok) throw new Error((await res.json().catch(() => null))?.error || "Request failed")
      setStatus("sent")
    } catch {
      setStatus("idle")
      setError("We couldn't send your application. Please try again, or message us on WhatsApp.")
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="surface-light flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-xl shadow-black/30">
        <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden />
        <h3 className="mt-4 text-2xl font-bold text-foreground">Application received</h3>
        <p className="mt-2 max-w-md text-muted-foreground">We&apos;ll read about your idea and reply on WhatsApp within 1 working day to set up your idea review.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="surface-light grid gap-5 rounded-3xl bg-white p-6 shadow-xl shadow-black/30 sm:grid-cols-2 sm:p-8">
      <div className="space-y-2">
        <Label htmlFor="business">Idea or startup name</Label>
        <Input id="business" name="business" required placeholder="A working name is fine" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="owner">Your name</Label>
        <Input id="owner" name="owner" required autoComplete="name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">WhatsApp number</Label>
        <Input id="phone" name="phone" type="tel" inputMode="tel" required pattern="[0-9+ ]{10,15}" title="10-digit mobile number" autoComplete="tel" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email <span className="text-muted-foreground">(optional)</span></Label>
        <Input id="email" name="email" type="email" autoComplete="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <select id="category" name="category" required className={selectClass} defaultValue="">
          <option value="" disabled>Select a category</option>
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="city">City</Label>
        <Input id="city" name="city" required placeholder="e.g. Vellore" autoComplete="address-level2" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="stage">Where are you now?</Label>
        <select id="stage" name="stage" required className={selectClass} defaultValue="">
          <option value="" disabled>Select one</option>
          {stages.map((st) => <option key={st}>{st}</option>)}
        </select>
      </div>

      <fieldset className="sm:col-span-2">
        <legend className="text-sm font-medium text-foreground">What do you want built?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {needs.map((n) => (
            <label key={n} className="flex cursor-pointer items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-foreground transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10">
              <input type="checkbox" name="needs" value={n} className="h-4 w-4 accent-[oklch(var(--primary))]" />
              {n}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="notes">Describe your idea</Label>
        <textarea id="notes" name="notes" rows={4} required placeholder="What problem does it solve, and who will use it?" className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
      </div>

      {error && <p role="alert" className="text-sm font-medium text-destructive sm:col-span-2">{error}</p>}

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="h-12 w-full sm:w-auto" disabled={status === "sending"}>
          {status === "sending" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden /> : <Send className="mr-2 h-4 w-4" aria-hidden />}
          {status === "sending" ? "Sending…" : "Apply with my idea"}
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">We use these details only to review your idea and contact you about it.</p>
      </div>
    </form>
  )
}
