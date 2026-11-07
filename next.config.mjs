/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Billing OS was retired; send old links and search traffic to the products page (BotForge).
  async redirects() {
    return ["/billing-software", "/restaurant-billing-software"].map((source) => ({ source, destination: "/products", permanent: true }))
  },
}

export default nextConfig
