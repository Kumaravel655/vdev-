import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Understand how VelanDev uses cookies and similar technologies on this website.",
}

export default function CookiePolicyPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Cookie Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: April 7, 2026
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">What Are Cookies</h2>
            <p className="mt-2 leading-relaxed">
              Cookies are small text files stored on your device that help improve browsing
              experience, remember preferences, and support site analytics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">How We Use Cookies</h2>
            <p className="mt-2 leading-relaxed">
              Essential cookies keep the site working, for example keeping staff signed in to
              the admin area. Optional cookies, such as analytics, are only set if you choose
              &quot;Accept all&quot;. We do not use cookies to sell personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Managing Cookies</h2>
            <p className="mt-2 leading-relaxed">
              When you first visit, we ask whether to allow optional cookies. You can change
              your choice at any time with &quot;Cookie settings&quot; at the bottom of every page,
              or block cookies in your browser settings. Blocking essential cookies may stop
              parts of the site from working.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-2 leading-relaxed">
              For questions regarding this Cookie Policy, contact info@velandev.in.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}