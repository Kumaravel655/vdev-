"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, Brain, Bot, FileText, Workflow, Mic, Network, Sparkles, Code2, Zap, CheckCircle2, BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsInView(true) }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, isInView }
}

const solutions = [
  { title: "AI Agents", description: "Autonomous AI agents that reason, plan, and execute complex multi-step tasks. Built with Agentic AI frameworks and MCP (Model Context Protocol) for seamless tool integration.", icon: Bot, highlights: ["Autonomous task execution", "Multi-tool orchestration via MCP", "Custom reasoning chains"] },
  { title: "RAG Systems", description: "Retrieval Augmented Generation systems that ground AI responses in your organization's data. Accurate, up-to-date answers from your documents and databases.", icon: Brain, highlights: ["Enterprise knowledge bases", "Document Q&A systems", "Semantic search and retrieval"] },
  { title: "AI Chatbots & Assistants", description: "Intelligent conversational agents trained on your business data. Natural language interfaces that understand context and provide accurate responses 24/7.", icon: Bot, highlights: ["Custom training on your data", "Multi-language support", "Seamless CRM integration"] },
  { title: "Workflow Automation", description: "AI-powered automation that eliminates repetitive tasks and streamlines business processes. From data entry to complex decision-making workflows.", icon: Workflow, highlights: ["Process mining and optimization", "Intelligent routing and approvals", "Error detection and correction"] },
  { title: "Document Processing", description: "Extract, classify, and process information from documents at scale using AI. Invoices, contracts, forms — handled automatically with high accuracy.", icon: FileText, highlights: ["OCR with AI extraction", "Document classification", "Automated data validation"] },
  { title: "AI Voice Agents", description: "Voice-enabled AI agents that can handle phone calls, meetings, and customer service interactions with natural speech.", icon: Mic, highlights: ["Natural voice synthesis", "Real-time conversation", "Call analytics and insights"] },
]

const techStack = [
  { name: "OpenAI GPT-4", category: "LLM" },
  { name: "LangChain", category: "Framework" },
  { name: "LangGraph", category: "Agents" },
  { name: "RAG", category: "Architecture" },
  { name: "MCP", category: "Protocol" },
  { name: "Agentic AI", category: "Paradigm" },
  { name: "Python", category: "Language" },
  { name: "FastAPI", category: "Backend" },
  { name: "Vector DBs", category: "Storage" },
  { name: "Embeddings", category: "ML" },
  { name: "Fine-tuning", category: "ML" },
  { name: "Prompt Engineering", category: "Design" },
]

const benefits = [
  "Reduce manual work by up to 90%",
  "24/7 intelligent customer support",
  "Faster decision-making with AI insights",
  "Scale operations without scaling headcount",
  "Unlock value from unstructured data",
  "Stay ahead with cutting-edge AI",
]

export default function AISolutionsPage() {
  const heroRef = useInView()
  const solRef = useInView()
  const techRef = useInView()
  const benefitRef = useInView()

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 via-muted/20 to-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute inset-0 neural-grid opacity-30" />
        <div ref={heroRef.ref} className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className={cn("mb-4 border border-primary/30 bg-primary/10 text-primary transition-all duration-700", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}><BrainCircuit className="mr-2 h-3.5 w-3.5 animate-pulse" />AI Division</Badge>
              <h1 className={cn("text-balance text-4xl font-bold tracking-tight text-foreground transition-all duration-700 delay-150 sm:text-5xl", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-violet-400 bg-clip-text text-transparent">AI Solutions</span>
              </h1>
              <p className={cn("mt-6 text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-300 sm:text-lg lg:max-w-xl", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                Harness the power of artificial intelligence to automate, optimize, and transform your business operations with our cutting-edge AI solutions.
              </p>
              <div className={cn("mt-8 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-500 justify-center lg:justify-start", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                <Button size="lg" asChild className="ai-glow"><Link href="/contact">Get Free AI Assessment <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </div>
            </div>

            {/* AI Brain Video */}
            <div className={cn("hidden lg:block transition-all duration-1000 delay-300", heroRef.isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0")}>
              <div className="relative mx-auto h-80 w-80 xl:h-96 xl:w-96">
                <div className="absolute inset-0 animate-pulse-soft rounded-3xl bg-gradient-to-br from-primary/20 via-violet-500/10 to-emerald-400/20 blur-2xl" />
                <div className="absolute -inset-4 animate-rotate-slow rounded-full border border-primary/10" style={{ animationDuration: "20s" }}>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                </div>
                <div className="absolute -inset-8 animate-rotate-slow rounded-full border border-violet-500/8" style={{ animationDuration: "30s", animationDirection: "reverse" }}>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
                </div>
                <div className="relative h-full w-full animate-float overflow-hidden rounded-3xl border border-primary/20 ai-glow-intense">
                  <video src="/ai-brain.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section ref={solRef.ref} className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol, i) => (
              <Card key={sol.title} className={cn("group flex flex-col border border-border/50 bg-card shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5", solRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")} style={{ transitionDelay: `${i * 100}ms` }}>
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-violet-500/20 transition-all duration-500 group-hover:from-primary group-hover:to-violet-500 group-hover:shadow-xl group-hover:shadow-primary/20">
                    <sol.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{sol.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="flex-1 text-sm leading-relaxed">{sol.description}</CardDescription>
                  <ul className="mt-6 space-y-2">
                    {sol.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="mt-6 w-full bg-transparent border-primary/30 hover:bg-primary/10 hover:border-primary" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section ref={techRef.ref} className="bg-muted/20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <div className={cn("mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700", techRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}><Code2 className="h-4 w-4" />Technology Stack</div>
              <h2 className={cn("text-3xl font-bold text-foreground transition-all duration-700", techRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>AI Technologies We Use</h2>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {techStack.map((tech, i) => (
                <div key={tech.name} className={cn("group flex items-center gap-2 rounded-xl border border-border/50 bg-card/50 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10", techRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")} style={{ transitionDelay: `${300 + i * 50}ms` }}>
                  <span className="font-medium text-foreground">{tech.name}</span>
                  <Badge variant="secondary" className="text-[10px]">{tech.category}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitRef.ref} className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className={cn("mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700", benefitRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0")}><Zap className="h-4 w-4" />Transform Your Business</div>
                <h2 className={cn("text-3xl font-bold text-foreground transition-all duration-700", benefitRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0")}>How AI Can Transform Your Business</h2>
                <p className={cn("mt-4 text-muted-foreground transition-all duration-700 delay-200", benefitRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0")}>AI is not just for tech giants. Every business can benefit from intelligent automation and data-driven insights.</p>
              </div>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={b} className={cn("group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-5 transition-all duration-500 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10", benefitRef.isInView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0")} style={{ transitionDelay: `${200 + i * 80}ms` }}>
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="font-medium text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 animated-gradient opacity-95" />
        <div className="absolute inset-0 neural-grid opacity-15" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Integrate AI?</h2>
            <p className="mt-4 text-white/80">Get a free AI readiness assessment and discover how artificial intelligence can accelerate your business.</p>
            <Button size="lg" variant="secondary" asChild className="mt-8 shadow-2xl transition-all duration-300 hover:scale-105"><Link href="/contact">Get Free AI Assessment <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
