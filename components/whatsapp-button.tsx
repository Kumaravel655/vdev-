import { WhatsAppIcon } from "@/components/brand-icons"
import { whatsappLink } from "@/lib/site"

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi VelanDev! I'm interested in your services.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 ring-1 ring-black/5 transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-6 sm:left-6"
      aria-label="Chat with VelanDev on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 motion-safe:animate-ping" style={{ animationDuration: "2.5s" }} aria-hidden />
      <WhatsAppIcon className="relative h-8 w-8" />
    </a>
  )
}
