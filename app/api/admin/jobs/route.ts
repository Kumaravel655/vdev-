import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createJob, deleteJob, updateJob } from "@/lib/careers-db"

type JobPayload = {
  id?: number
  title: string
  department: string
  location: string
  type: string
  description: string
}

const requireAdmin = async () => {
  const token = process.env.ADMIN_TOKEN

  if (!token) {
    return NextResponse.json(
      { error: "Admin token is not configured." },
      { status: 500 }
    )
  }

  const session = (await cookies()).get("admin_session")?.value
  if (session !== token) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  }

  return null
}

const validatePayload = (payload: JobPayload) => {
  const fields: Array<keyof JobPayload> = [
    "title",
    "department",
    "location",
    "type",
    "description",
  ]
  return fields.filter((field) => !payload[field]?.toString().trim())
}

export async function POST(request: Request) {
  const authError = await requireAdmin()
  if (authError) return authError

  let payload: JobPayload

  try {
    payload = (await request.json()) as JobPayload
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 })
  }

  const missing = validatePayload(payload)
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing fields: ${missing.join(", ")}.` },
      { status: 400 }
    )
  }

  const job = createJob({
    title: payload.title.trim(),
    department: payload.department.trim(),
    location: payload.location.trim(),
    type: payload.type.trim(),
    description: payload.description.trim(),
  })

  return NextResponse.json({ job })
}

export async function PUT(request: Request) {
  const authError = await requireAdmin()
  if (authError) return authError

  let payload: JobPayload

  try {
    payload = (await request.json()) as JobPayload
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 })
  }

  if (!payload.id) {
    return NextResponse.json({ error: "Job ID is required." }, { status: 400 })
  }

  const missing = validatePayload(payload)
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing fields: ${missing.join(", ")}.` },
      { status: 400 }
    )
  }

  const job = updateJob(payload.id, {
    title: payload.title.trim(),
    department: payload.department.trim(),
    location: payload.location.trim(),
    type: payload.type.trim(),
    description: payload.description.trim(),
  })

  return NextResponse.json({ job })
}

export async function DELETE(request: Request) {
  const authError = await requireAdmin()
  if (authError) return authError

  let payload: { id?: number }

  try {
    payload = (await request.json()) as { id?: number }
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 })
  }

  if (!payload.id) {
    return NextResponse.json({ error: "Job ID is required." }, { status: 400 })
  }

  const deleted = deleteJob(payload.id)
  return NextResponse.json({ ok: deleted })
}
