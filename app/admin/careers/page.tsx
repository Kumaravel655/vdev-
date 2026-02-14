"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type JobRecord = {
  id: number
  title: string
  department: string
  location: string
  type: string
  description: string
}

const emptyForm = {
  title: "",
  department: "",
  location: "",
  type: "",
  description: "",
}

export default function CareersAdminPage() {
  const [jobs, setJobs] = useState<JobRecord[]>([])
  const [formState, setFormState] = useState(emptyForm)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const loadJobs = async () => {
    const response = await fetch("/api/jobs")
    if (!response.ok) return
    const data = await response.json()
    setJobs(data.jobs || [])
  }

  useEffect(() => {
    loadJobs()
  }, [])

  const updateField = (field: keyof typeof formState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setFormState(emptyForm)
    setEditingId(null)
  }

  const submitJob = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)
    setSuccessMessage(null)

    const payload = {
      ...formState,
      id: editingId ?? undefined,
    }

    try {
      const response = await fetch("/api/admin/jobs", {
        method: editingId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        setErrorMessage(data?.error || "Unable to save job.")
        return
      }

      setSuccessMessage(editingId ? "Job updated." : "Job posted.")
      resetForm()
      await loadJobs()
    } catch {
      setErrorMessage("Unable to save job.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const editJob = (job: JobRecord) => {
    setEditingId(job.id)
    setFormState({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      description: job.description,
    })
  }

  const deleteJob = async (jobId: number) => {
    if (!window.confirm("Delete this job?")) return

    setIsSubmitting(true)
    setErrorMessage(null)
    setSuccessMessage(null)

    try {
      const response = await fetch("/api/admin/jobs", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: jobId }),
      })

      const data = await response.json().catch(() => null)
      if (!response.ok) {
        setErrorMessage(data?.error || "Unable to delete job.")
        return
      }

      setSuccessMessage("Job deleted.")
      await loadJobs()
    } catch {
      setErrorMessage("Unable to delete job.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted/20 py-12">
      <div className="container mx-auto flex flex-col gap-8 px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Careers Admin</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Post new roles and manage existing openings.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={async () => {
              await fetch("/api/admin/logout", { method: "POST" })
              window.location.href = "/admin/login"
            }}
          >
            Log out
          </Button>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>{editingId ? "Edit Job" : "Post a Job"}</CardTitle>
            <CardDescription>Fill out all fields before publishing.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={submitJob} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input
                  id="title"
                  value={formState.title}
                  onChange={(event) => updateField("title", event.target.value)}
                  required
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    value={formState.department}
                    onChange={(event) => updateField("department", event.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formState.location}
                    onChange={(event) => updateField("location", event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Employment Type</Label>
                <Input
                  id="type"
                  value={formState.type}
                  onChange={(event) => updateField("type", event.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formState.description}
                  onChange={(event) => updateField("description", event.target.value)}
                  rows={4}
                  required
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? "Saving..."
                    : editingId
                    ? "Update Job"
                    : "Publish Job"}
                </Button>
                {editingId ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                ) : null}
              </div>
              {successMessage ? (
                <p className="text-sm text-emerald-600">{successMessage}</p>
              ) : null}
              {errorMessage ? (
                <p className="text-sm text-destructive">{errorMessage}</p>
              ) : null}
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Open Roles</CardTitle>
            <CardDescription>Manage current job listings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {jobs.length === 0 ? (
              <p className="text-sm text-muted-foreground">No jobs posted yet.</p>
            ) : (
              jobs.map((job) => (
                <div
                  key={job.id}
                  className="rounded-lg border border-border/60 bg-background p-4"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {job.department} · {job.location} · {job.type}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {job.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => editJob(job)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteJob(job.id)}
                        disabled={isSubmitting}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
