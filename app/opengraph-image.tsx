import { ImageResponse } from "next/og"
import { websitePlans, whatsappPlans } from "@/lib/pricing"

// Preview card shown when the site is shared on WhatsApp, LinkedIn or X.
export const alt = "VelanDev — websites and WhatsApp bots for small businesses"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// The built-in OG font has no ₹ glyph (and fetching one fails offline), so the symbol is drawn as raw SVG
// (lucide's indian-rupee paths; Satori can't render the lucide React component itself).
function Price({ amount, size: px, color, suffix = "" }: { amount: number; size: number; color: string; suffix?: string }) {
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <svg width={px * 0.8} height={px * 0.8} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12" />
        <path d="M6 8h12" />
        <path d="m6 13 8.5 8" />
        <path d="M6 13h3" />
        <path d="M9 13c6.667 0 6.667-10 0-10" />
      </svg>
      {`${amount.toLocaleString("en-IN")}${suffix}`}
    </span>
  )
}

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 60%, #1e1033 100%)", color: "white" }}>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>VelanDev</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 72, fontWeight: 800 }}>
            <span>Websites from</span>
            <Price amount={websitePlans[0].price} size={72} color="white" />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 54, fontWeight: 700, color: "#e9d5ff" }}>
            <span>WhatsApp bots from</span>
            <Price amount={whatsappPlans[0].price} size={54} color="#e9d5ff" suffix="/month" />
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, opacity: 0.85 }}>Software, websites &amp; automation · Chennai, India</div>
      </div>
    ),
    size
  )
}
