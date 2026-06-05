"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "916369472659"
  const message = encodeURIComponent("Hi VelanDev! I'm interested in your services.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <div className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30" style={{ animationDuration: "2s" }} />
      <MessageCircle className="relative h-7 w-7" fill="white" />
    </a>
  )
}
