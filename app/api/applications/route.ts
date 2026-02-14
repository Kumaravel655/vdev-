import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { createApplication, getJobById } from "@/lib/careers-db"

type ApplicationPayload = {
  jobId?: number | null
  fullName: string
  email: string
  phone?: string
  portfolio?: string
  resumeUrl?: string
  coverLetter: string
}

const requiredFields = ["fullName", "email", "coverLetter"] as const

const getMissingFields = (payload: ApplicationPayload) =>
  requiredFields.filter((field) => !payload[field]?.trim())

export async function POST(request: Request) {
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const contactTo = process.env.CAREERS_TO || process.env.CONTACT_TO || smtpUser

  if (!smtpUser || !smtpPass || !contactTo) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    )
  }

  let payload: ApplicationPayload

  try {
    payload = (await request.json()) as ApplicationPayload
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const missingFields = getMissingFields(payload)
  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: `Missing fields: ${missingFields.join(", ")}.` },
      { status: 400 }
    )
  }

  const job = payload.jobId ? getJobById(Number(payload.jobId)) : null
  const applicationId = createApplication({
    jobId: payload.jobId ?? null,
    fullName: payload.fullName.trim(),
    email: payload.email.trim(),
    phone: payload.phone?.trim(),
    portfolio: payload.portfolio?.trim(),
    resumeUrl: payload.resumeUrl?.trim(),
    coverLetter: payload.coverLetter.trim(),
  })

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const messageLines = [
    `Application ID: ${applicationId}`,
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Portfolio: ${payload.portfolio || "Not provided"}`,
    `Resume URL: ${payload.resumeUrl || "Not provided"}`,
    `Job: ${job?.title || "General Application"}`,
    "",
    "Cover Letter:",
    payload.coverLetter,
  ]

  try {
    await transporter.sendMail({
      from: `VelanDev Careers <${smtpUser}>`,
      to: contactTo,
      replyTo: payload.email,
      subject: `New Application: ${job?.title || "General"} - ${payload.fullName}`,
      text: messageLines.join("\n"),
    })

    return NextResponse.json({ ok: true, applicationId })
  } catch {
    return NextResponse.json(
      { error: "Failed to send application email." },
      { status: 500 }
    )
  }
}
