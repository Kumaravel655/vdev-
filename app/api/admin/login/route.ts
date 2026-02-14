import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const adminPassword = process.env.ADMIN_PASSWORD
  const adminToken = process.env.ADMIN_TOKEN

  if (!adminPassword || !adminToken) {
    return NextResponse.json(
      { error: "Admin login is not configured." },
      { status: 500 }
    )
  }

  let payload: { password?: string }

  try {
    payload = (await request.json()) as { password?: string }
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  if (!payload.password || payload.password !== adminPassword) {
    return NextResponse.json({ error: "Invalid password." }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set("admin_session", adminToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  })

  return response
}
