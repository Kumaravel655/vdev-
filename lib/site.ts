/** Business facts used by metadata, structured data, sitemap and WhatsApp links. Change them here only. */
export const site = {
  name: "VelanDev",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.velandev.in").replace(/\/$/, ""),
  domain: "www.velandev.in",
  email: "info@velandev.in",
  phone: "+919042655224",
  phoneDisplay: "+91 90426 55224",
  gstin: "33KLGPK3560J1ZV",
  whatsapp: "919042655224",
  address: {
    streetAddress: "No 7, 1st Floor, Sathyabama Research Park, Rajiv Gandhi Salai (OMR), Sholinganallur",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "603103",
    addressCountry: "IN",
  },
  foundingDate: "2024-05",
} as const

/** Postal address as it is printed: three lines. */
export const addressLines = [
  "No 7, 1st Floor, Sathyabama Research Park",
  "Sholinganallur, Rajiv Gandhi Salai (OMR)",
  `${site.address.addressLocality}, ${site.address.addressRegion} ${site.address.postalCode}`,
] as const

/** wa.me link with a prefilled message, so every plan button starts a tagged WhatsApp conversation. */
export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
