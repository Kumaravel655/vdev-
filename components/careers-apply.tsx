"use client"

import * as React from "react"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export type CareersApplyJob = {
  id: number
  title: string
}

type ApplyFormState = {
  jobId: string
  fullName: string
  email: string
  phone: string
  portfolio: string
  resumeUrl: string
  coverLetter: string
}

const defaultState: ApplyFormState = {
  jobId: "",
  fullName: "",
  email: "",
  phone: "",
  portfolio: "",
  resumeUrl: "",
  coverLetter: "",
}

export function CareersApply({ jobs }: { jobs: CareersApplyJob[] }) {
  const [formState, setFormState] = useState<ApplyFormState>(defaultState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const jobOptions = useMemo(() => jobs, [jobs])

  const updateField = (field: keyof ApplyFormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)
    setSuccessMessage(null)

    const payload = {
      jobId: formState.jobId ? Number(formState.jobId) : null,
      fullName: formState.fullName.trim(),
      email: formState.email.trim(),
      phone: formState.phone.trim(),
      portfolio: formState.portfolio.trim(),
      resumeUrl: formState.resumeUrl.trim(),
      coverLetter: formState.coverLetter.trim(),
    }

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        setErrorMessage(data?.error || "Unable to submit application.")
        return
      }

      setSuccessMessage("Application submitted successfully. We will reach out soon.")
      setFormState(defaultState)
    } catch {
      setErrorMessage("Unable to submit application.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="apply" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <Card className="border bg-card">
            <CardHeader>
              <CardTitle>Apply to VelanDev</CardTitle>
              <CardDescription>
                Submit your details and we will get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="jobId">Position</Label>
                  <select
                    id="jobId"
                    value={formState.jobId}
                    onChange={(event) => updateField("jobId", event.target.value)}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                  >
                    <option value="">General Application</option>
                    {jobOptions.map((job) => (
                      <option key={job.id} value={job.id}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={formState.fullName}
                      onChange={(event) => updateField("fullName", event.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formState.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio</Label>
                    <Input
                      id="portfolio"
                      value={formState.portfolio}
                      onChange={(event) => updateField("portfolio", event.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resumeUrl">Resume URL</Label>
                  <Input
                    id="resumeUrl"
                    value={formState.resumeUrl}
                    onChange={(event) => updateField("resumeUrl", event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    value={formState.coverLetter}
                    onChange={(event) => updateField("coverLetter", event.target.value)}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
                {successMessage ? (
                  <p className="text-sm text-emerald-600">{successMessage}</p>
                ) : null}
                {errorMessage ? (
                  <p className="text-sm text-destructive">{errorMessage}</p>
                ) : null}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
