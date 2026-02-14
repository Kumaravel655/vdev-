import Database from "better-sqlite3"
import fs from "fs"
import path from "path"

type JobInput = {
  title: string
  department: string
  location: string
  type: string
  description: string
}

export type JobRecord = JobInput & {
  id: number
  created_at: string
}

type ApplicationInput = {
  jobId?: number | null
  fullName: string
  email: string
  phone?: string
  portfolio?: string
  resumeUrl?: string
  coverLetter: string
}

let dbInstance: Database.Database | null = null

const initDb = (db: Database.Database) => {
  db.pragma("journal_mode = WAL")
  db.exec(`
    CREATE TABLE IF NOT EXISTS jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      department TEXT NOT NULL,
      location TEXT NOT NULL,
      type TEXT NOT NULL,
      description TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS applications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      job_id INTEGER,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      portfolio TEXT,
      resume_url TEXT,
      cover_letter TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY(job_id) REFERENCES jobs(id) ON DELETE SET NULL
    );
  `)
}

const getDb = () => {
  if (dbInstance) return dbInstance

  const dataDir = path.join(process.cwd(), "data")
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  const dbPath = path.join(dataDir, "careers.db")
  dbInstance = new Database(dbPath)
  initDb(dbInstance)
  return dbInstance
}

export const listJobs = () => {
  const db = getDb()
  const rows = db
    .prepare(
      "SELECT id, title, department, location, type, description, created_at FROM jobs ORDER BY datetime(created_at) DESC"
    )
    .all()
  return rows as JobRecord[]
}

export const getJobById = (id: number) => {
  const db = getDb()
  const row = db
    .prepare(
      "SELECT id, title, department, location, type, description, created_at FROM jobs WHERE id = ?"
    )
    .get(id)
  return (row || null) as JobRecord | null
}

export const createJob = (input: JobInput) => {
  const db = getDb()
  const stmt = db.prepare(
    "INSERT INTO jobs (title, department, location, type, description) VALUES (@title, @department, @location, @type, @description)"
  )
  const result = stmt.run(input)
  return getJobById(Number(result.lastInsertRowid))
}

export const updateJob = (id: number, input: JobInput) => {
  const db = getDb()
  const stmt = db.prepare(
    "UPDATE jobs SET title = @title, department = @department, location = @location, type = @type, description = @description WHERE id = @id"
  )
  stmt.run({ id, ...input })
  return getJobById(id)
}

export const deleteJob = (id: number) => {
  const db = getDb()
  const result = db.prepare("DELETE FROM jobs WHERE id = ?").run(id)
  return result.changes > 0
}

export const createApplication = (input: ApplicationInput) => {
  const db = getDb()
  const stmt = db.prepare(
    `INSERT INTO applications
      (job_id, full_name, email, phone, portfolio, resume_url, cover_letter)
     VALUES
      (@jobId, @fullName, @email, @phone, @portfolio, @resumeUrl, @coverLetter)`
  )
  const result = stmt.run({
    jobId: input.jobId ?? null,
    fullName: input.fullName,
    email: input.email,
    phone: input.phone || null,
    portfolio: input.portfolio || null,
    resumeUrl: input.resumeUrl || null,
    coverLetter: input.coverLetter,
  })
  return Number(result.lastInsertRowid)
}
