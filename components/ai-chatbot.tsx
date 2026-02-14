"use client"

import * as React from "react"
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface Message {
  id: number
  text: string
  isAi: boolean
  timestamp: Date
}

const contactDetails = {
  email: "hello@velandev.in",
  phone: "6369472659",
  location: "Sholinganallur, Chennai, Tamil Nadu, India",
  hours: "Monday - Friday: 9:00 AM - 6:00 PM IST",
}

const quickTopics = ["services", "products", "industries", "pricing", "contact", "careers"]

const getBotReply = (input: string) => {
  const normalized = input.toLowerCase()

  const keywordReplies: { keywords: string[]; reply: string }[] = [
    {
      keywords: ["hi", "hello", "hey", "good morning", "good evening"],
      reply:
        "Hello! I'm the VelanDev assistant. How can I help you today?",
    },
    {
      keywords: ["service", "services", "what do you do"],
      reply:
        "We build custom software, AI solutions, web and mobile apps, cloud platforms, and UI/UX design. Want a quick overview of a specific service?",
    },
    {
      keywords: ["product", "products"],
      reply:
        "Our products include ERP, inventory, HR platforms, and custom SaaS solutions. Tell me your industry and I can suggest options.",
    },
    {
      keywords: ["industry", "industries", "healthcare", "finance", "education", "logistics", "retail"],
      reply:
        "We serve Healthcare, Finance, Education, Logistics, Retail, Manufacturing, and more. Which industry are you in?",
    },
    {
      keywords: ["price", "pricing", "cost", "quote", "budget"],
      reply:
        "Pricing depends on scope. Share a brief requirement and I can help you start a quote. You can also contact us at hello@velandev.in.",
    },
    {
      keywords: ["contact", "email", "mail", "phone", "call", "location", "address"],
      reply:
        `You can reach us at ${contactDetails.email} or ${contactDetails.phone}. Our location is ${contactDetails.location}.`,
    },
    {
      keywords: ["hours", "timing", "open"],
      reply: `Business hours: ${contactDetails.hours}.`,
    },
    {
      keywords: ["career", "careers", "job", "hiring"],
      reply:
        "We are hiring for multiple roles. Visit the Careers page or share your role/skills and I will point you to the right opening.",
    },
    {
      keywords: ["ai", "ml", "machine learning"],
      reply:
        "Yes, we deliver AI/ML solutions like automation, intelligent analytics, and custom models. What problem are you solving?",
    },
    {
      keywords: ["website", "app", "mobile", "web"],
      reply:
        "We design and develop modern web and mobile apps using React, Next.js, and other scalable stacks. Need help scoping a build?",
    },
  ]

  const matched = keywordReplies.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  )

  if (matched) return matched.reply

  return `I can help with ${quickTopics.join(", ")}. Tell me what you need.`
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm VelanDev's AI assistant. How can I help you build your next digital product?",
      isAi: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
  const nextId = React.useRef(2)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: nextId.current++,
      text: inputValue,
      isAi: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    const replyText = getBotReply(inputValue)

    setTimeout(() => {
      const aiMessage: Message = {
        id: nextId.current++,
        text: replyText,
        isAi: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 650)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all duration-500 hover:scale-110",
          "ai-glow-intense",
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
        aria-label="Open AI Chat"
      >
        {/* Animated Rings */}
        <div className="absolute inset-0 animate-pulse-ring rounded-full bg-primary/30" />
        <div className="absolute inset-0 animate-pulse-ring rounded-full bg-primary/20" style={{ animationDelay: "0.5s" }} />
        <div className="absolute inset-0 animate-pulse-ring rounded-full bg-primary/10" style={{ animationDelay: "1s" }} />
        
        <div className="relative flex items-center justify-center">
          <Bot className="h-7 w-7" />
          <Sparkles className="absolute -right-1 -top-1 h-4 w-4 animate-bounce-soft text-cyan-300" />
        </div>
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-[600px] w-[400px] max-w-[calc(100vw-48px)] flex-col overflow-hidden rounded-3xl border border-border/50 bg-background/95 backdrop-blur-xl transition-all duration-500 chatbot-container",
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-8 scale-95 opacity-0"
        )}
      >
        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-border/50 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4">
          {/* Neural Background */}
          <div className="absolute inset-0 neural-grid opacity-30" />
          
          <div className="relative flex items-center gap-3">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary ai-glow">
                <Bot className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-green-500 animate-pulse" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">VelanDev AI</h3>
              <div className="flex items-center gap-1.5">
                <Zap className="h-3 w-3 text-primary animate-pulse" />
                <span className="text-xs text-muted-foreground">Powered by AI</span>
              </div>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="relative rounded-xl hover:bg-destructive/10 hover:text-destructive"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3 transition-all duration-500",
                  message.isAi ? "justify-start" : "justify-end",
                  "animate-fade-in"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {message.isAi && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-3 text-sm",
                    message.isAi
                      ? "chatbot-message-ai rounded-tl-none"
                      : "chatbot-message-user rounded-tr-none"
                  )}
                >
                  {message.text}
                </div>
                {!message.isAi && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <User className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 animate-fade-in">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="chatbot-message-ai flex items-center gap-1.5 rounded-2xl rounded-tl-none px-4 py-3">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "0ms" }} />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "150ms" }} />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-border/50 bg-muted/30 p-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask me anything..."
                className="w-full rounded-xl border border-border/50 bg-background px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              size="icon"
              className="h-12 w-12 shrink-0 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <p className="mt-2 text-center text-[10px] text-muted-foreground">
            Automated responses for quick help
          </p>
        </div>
      </div>
    </>
  )
}
