import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const requiredFields = ["fullName", "email", "message"] as const

type ContactPayload = {
  fullName: string
  email: string
  phone?: string
  company?: string
  message: string
}

const getMissingFields = (payload: ContactPayload) =>
  requiredFields.filter((field) => !payload[field]?.trim())

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
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Company: ${payload.company || "Not provided"}`,
    "",
    "Message:",
    payload.message,
  ]

  try {
    await transporter.sendMail({
      from: `VelanDev Website <${smtpUser}>`,
      to: contactTo,
      replyTo: payload.email,
      subject: `New Contact Request from ${payload.fullName}`,
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
