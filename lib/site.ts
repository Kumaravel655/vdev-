/** Business facts used by metadata, structured data, sitemap and WhatsApp links. Change them here only. */
export const site = {
  name: "VelanDev",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://velandev.in").replace(/\/$/, ""),
  email: "hello@velandev.in",
  phone: "+916369472659",
  whatsapp: "916369472659",
  address: {
    streetAddress: "Sholinganallur",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600119",
    addressCountry: "IN",
  },
  foundingDate: "2024-05",
} as const

/** wa.me link with a prefilled message, so every plan button starts a tagged WhatsApp conversation. */
export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
