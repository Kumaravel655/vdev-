"use client"

import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Bot, BrainCircuit, Check, Database, FileText, MessageSquare, Mic, Workflow } from "lucide-react"
import { cn } from "@/lib/utils"
import { CtaPanel, PageHero, Section, cardClass, reveal, trackSpotlight } from "@/components/page-sections"

type Solution = { title: string; description: string; icon: LucideIcon; highlights: string[] }

const solutions: Solution[] = [
  {
    title: "AI Agents",
    description: "Agents that plan and finish multi-step tasks on their own, using your tools through MCP — look up an order, update the CRM, send the follow-up.",
    icon: Bot,
    highlights: ["Multi-step task execution", "Tool access via MCP", "Human approval where it matters"],
  },
  {
    title: "RAG Knowledge Systems",
    description: "Ask questions in plain language and get answers drawn from your own documents and databases, with the source shown alongside.",
    icon: Database,
    highlights: ["Search across PDFs, sheets and wikis", "Answers cite their source", "Stays current as files change"],
  },
  {
    title: "Chatbots & Assistants",
    description: "Assistants trained on your products, prices and policies that answer customers on your website or WhatsApp, any hour of the day.",
    icon: MessageSquare,
    highlights: ["Trained on your business data", "Multi-language support", "Hands off to a person when needed"],
  },
  {
    title: "Workflow Automation",
    description: "Take repetitive steps — data entry, routing, approvals — off your team's plate and catch errors before they reach a customer.",
    icon: Workflow,
    highlights: ["Automatic routing and approvals", "Error checks on every entry", "Connects to the apps you use"],
  },
  {
    title: "Document Processing",
    description: "Read invoices, contracts and forms automatically. Fields are extracted, checked and sent to the right system without re-typing.",
    icon: FileText,
    highlights: ["OCR with AI extraction", "Sorts documents by type", "Validates data before saving"],
  },
  {
    title: "Voice Agents",
    description: "Voice bots that answer calls, book appointments and take enquiries in a natural voice, with every call logged and summarised.",
    icon: Mic,
    highlights: ["Natural-sounding speech", "Real-time conversation", "Call summaries and analytics"],
  },
]

const outcomes = [
  { title: "Less manual work", description: "Repetitive typing, copying and checking moves to software." },
  { title: "Replies around the clock", description: "Customers get an answer at 11 pm, not the next morning." },
  { title: "Faster decisions", description: "Reports and summaries are ready when you need them." },
  { title: "Growth without extra hiring", description: "Handle more enquiries with the team you already have." },
  { title: "Use the data you already have", description: "Emails, PDFs and spreadsheets become searchable answers." },
  { title: "Start small, then scale", description: "Prove one workflow first, then roll out to the rest." },
]

const techStack = ["OpenAI", "LangChain", "LangGraph", "MCP", "RAG", "Python", "FastAPI", "Vector databases", "Embeddings", "Fine-tuning"]

export default function AISolutionsPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="AI Solutions"
        icon={BrainCircuit}
        title="AI that takes on the"
        accent="repetitive work"
        description="Agents, chatbots, document processing and voice bots trained on your own data. We start with one workflow, show it working, then scale it across the business."
        primary={{ href: "/contact", label: "Get a free AI assessment" }}
        secondary={{ href: "#solutions", label: "See what we build" }}
        media={{ src: "/ai-brain.mp4", label: "Animated AI visual" }}
      />

      <Section id="solutions" eyebrow="What we build" title="Six ways to put AI to work" description="Each one connects to tools you already use — WhatsApp, your CRM, your database.">
        {(inView) => (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <article key={solution.title} onPointerMove={trackSpotlight} className={cn(cardClass, reveal(inView))} style={{ transitionDelay: `${index * 60}ms` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                  <solution.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{solution.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
                <ul className="mt-5 flex-1 space-y-2 border-t border-border/60 pt-5">
                  {solution.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Discuss this solution
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        )}
      </Section>

      <Section muted eyebrow="Why it pays off" title="What changes for your team" description="AI isn't only for large companies. You can start with a single workflow.">
        {(inView) => (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome, index) => (
              <div key={outcome.title} onPointerMove={trackSpotlight} className={cn(cardClass, "p-5 sm:p-6", reveal(inView))} style={{ transitionDelay: `${index * 60}ms` }}>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <h3 className="font-semibold text-foreground">{outcome.title}</h3>
                </div>
                <p className="mt-2 pl-8 text-sm leading-relaxed text-muted-foreground">{outcome.description}</p>
              </div>
            ))}
          </div>
        )}
      </Section>

      <Section eyebrow="Technology" title="The stack behind it" description="Proven, well-supported tools — so what we build keeps working after launch.">
        {(inView) => (
          <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <li
                key={tech}
                className={cn("rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-all duration-500 hover:border-primary/40 hover:bg-primary/5", reveal(inView))}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </Section>

      <CtaPanel
        title="Ready to try AI?"
        description="Book a free assessment. We'll find the workflow where AI saves you the most time and show you what it would take."
        primary={{ href: "/contact", label: "Get a free AI assessment" }}
        secondary={{ href: "/pricing", label: "View pricing" }}
      />
    </div>
  )
}
