"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const industries = ["Restaurant / café", "Retail shop", "Supermarket", "Pharmacy", "Salon / spa", "Bakery / sweets", "Hardware / building supply", "Clinic / healthcare", "Education / coaching", "Services", "Other"]
const registrations = ["GST", "Udyam (MSME)", "Shop & establishment licence", "Not registered yet"]
const needs = ["Website", "BotForge WhatsApp bot", "Billing OS", "Delivery app", "CRM"]

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
      setError("Pick at least one thing you need.")
      return
    }
    setError(null)
    setStatus("sending")

    const field = (k: string) => String(form.get(k) || "").trim()
    const message = [
      "STARTUP OFFER APPLICATION",
      `Business: ${field("business")}`,
      `Industry: ${field("industry")}`,
      `City: ${field("city")}`,
      `Started: ${field("started")}`,
      `Registration: ${field("registration")}`,
      `Needs: ${chosen.join(", ")}`,
      field("notes") && `Notes: ${field("notes")}`,
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
      <div role="status" className="flex flex-col items-center rounded-3xl border border-primary/30 bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden />
        <h3 className="mt-4 text-2xl font-bold text-foreground">Application received</h3>
        <p className="mt-2 max-w-md text-muted-foreground">We&apos;ll check your details and reply on WhatsApp within 1 working day with your discount.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl border border-border/60 bg-card p-6 sm:grid-cols-2 sm:p-8">
      <div className="space-y-2">
        <Label htmlFor="business">Business name</Label>
        <Input id="business" name="business" required autoComplete="organization" />
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
        <Label htmlFor="industry">Industry</Label>
        <select id="industry" name="industry" required className={selectClass} defaultValue="">
          <option value="" disabled>Select your industry</option>
          {industries.map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="city">City</Label>
        <Input id="city" name="city" required placeholder="e.g. Vellore" autoComplete="address-level2" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="started">When did your business start?</Label>
        <Input id="started" name="started" type="month" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="registration">Registration</Label>
        <select id="registration" name="registration" required className={selectClass} defaultValue="">
          <option value="" disabled>Select one</option>
          {registrations.map((r) => <option key={r}>{r}</option>)}
        </select>
      </div>

      <fieldset className="sm:col-span-2">
        <legend className="text-sm font-medium text-foreground">What do you need?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {needs.map((n) => (
            <label key={n} className="flex cursor-pointer items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-foreground transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10">
              <input type="checkbox" name="needs" value={n} className="h-4 w-4 accent-[hsl(var(--primary))]" />
              {n}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="notes">Anything else? <span className="text-muted-foreground">(optional)</span></Label>
        <textarea id="notes" name="notes" rows={3} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
      </div>

      {error && <p role="alert" className="text-sm font-medium text-destructive sm:col-span-2">{error}</p>}

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="h-12 w-full sm:w-auto" disabled={status === "sending"}>
          {status === "sending" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden /> : <Send className="mr-2 h-4 w-4" aria-hidden />}
          {status === "sending" ? "Sending…" : "Check my discount"}
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">We use these details only to check your eligibility and contact you about this offer.</p>
      </div>
    </form>
  )
}
