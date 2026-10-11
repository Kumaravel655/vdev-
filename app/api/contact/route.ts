import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const requiredFields = ["fullName", "message"] as const

type ContactPayload = {
  fullName: string
  email?: string
  phone?: string
  company?: string
  service?: string // plan/offer tag from the form, e.g. "whatsapp-bot", "startup-offer"
  message: string
}

// A lead needs a name, a message, and at least one way to reach them (many owners prefer WhatsApp to email).
const getMissingFields = (payload: ContactPayload) => {
  const missing: string[] = requiredFields.filter((field) => !payload[field]?.trim())
  if (!payload.email?.trim() && !payload.phone?.trim()) missing.push("email or phone")
  return missing
}

export async function POST(request: Request) {
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const contactTo = process.env.CONTACT_TO || smtpUser

  if (!smtpUser || !smtpPass || !contactTo) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    )
  }

  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
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
    `Name: ${payload.fullName}`,
    `Email: ${payload.email || "Not provided"}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Company: ${payload.company || "Not provided"}`,
    `Interested in: ${payload.service || "Not selected"}`,
    "",
    "Message:",
    payload.message,
  ]

  try {
    await transporter.sendMail({
      from: `VelanDev Website <${smtpUser}>`,
      to: contactTo,
      replyTo: payload.email || undefined,
      subject: `${payload.service ? `[${payload.service}] ` : ""}New lead from ${payload.fullName}`,
      text: messageLines.join("\n"),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    )
  }
}
