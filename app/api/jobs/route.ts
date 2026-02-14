import { NextResponse } from "next/server"
import { listJobs } from "@/lib/careers-db"

export async function GET() {
  const jobs = listJobs()
  return NextResponse.json({ jobs })
}
