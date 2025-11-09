// app/investors/page.tsx

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-20 max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.2em] text-teal-400">
            For Investors
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            The Presence Economy™ <span className="text-teal-400">by 360 World</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl">
            Erasing distance so anyone can be there without being there. We are
            building a new category where presence itself becomes a digital asset.
          </p>
        </div>

        <motion.div
          className="inline-flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Button
            asChild
            className="rounded-2xl px-6 py-3 text-base bg-teal-500 hover:bg-teal-600"
          >
            <a
              href="https://calendly.com/dgupt/presence-economy-demo"
              target="_blank"
              rel="noreferrer"
            >
              Schedule a Founder Call
            </a>
          </Button>

          <Button
            variant="outline"
            className="rounded-2xl px-6 py-3 text-base border-gray-600 text-gray-200 hover:bg-gray-900"
          >
            {/* TODO: update href when deck is ready */}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Download Investor Deck (coming soon)
            </a>
          </Button>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="px-6 pb-24 max-w-5xl mx-auto space-y-12">
        {/* Vision & Problem */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-3">Vision</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Distance limits what we can see, do, and decide. 360 World removes
                that limit by monetizing <span className="text-teal-400">presence itself</span> — turning every smartphone into a
                gateway for remote collaboration, inspection, and exploration.
                We call it the <span className="font-medium">Presence Economy</span>: a world where presence is
                currency and anyone with a smartphone can earn by sharing their
                presence safely and privately.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-3">Problem</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Infrastructure QA, real estate, insurance, medical tourism, and
                government operations still rely on expensive, slow physical
                presence. Experts must travel, inspections get delayed, and
                billions of people remain under-employed despite having powerful
                smartphones in their pockets.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Solution & Tech */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-3">Solution: Presence as a Service</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our platform, <span className="font-medium">Xeniq</span>, connects consumers who need to see or act
                remotely with providers who share their live presence. The
                consumer directs the session: walk forward, turn left, zoom in,
                focus here. The provider simply follows. Every minute of guided,
                trusted presence becomes a billable micro-transaction.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                Privacy is built in: no identity exchange, no recordings, and all
                humans blurred from head to toe. It&apos;s visibility without
                surveillance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-3">Technology</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Xeniq is built with <span className="font-medium">Go (gRPC microservices)</span>,{" "}
                <span className="font-medium">Google Cloud Spanner</span> for
                global consistency, and <span className="font-medium">Flutter</span> apps
                for cross-platform reach. AI-based privacy filters blur humans
                automatically, while integrations like <span className="font-medium">
                Stripe Connect
                </span>{" "}
                power payouts to providers at scale.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Market & Model */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-3">Market Opportunity</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Presence Economy sits at the intersection of remote services,
                infrastructure QA, property management, insurance inspection,
                gig work, and smart governance. These categories together
                represent a <span className="font-medium">multi-hundred-billion-dollar</span> addressable
                market, growing as remote work and digital operations become
                default.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-3">Business Model</h2>
              <ul className="text-gray-400 text-sm leading-relaxed list-disc pl-5 space-y-1">
                <li><span className="font-medium">B2B / B2G SaaS:</span> platform fees + metered presence minutes.</li>
                <li><span className="font-medium">Marketplace Commission:</span> consumers hire providers, 360 World takes a cut.</li>
                <li><span className="font-medium">Integrations & APIs:</span> presence embedded inside partner apps and workflows.</li>
              </ul>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                The result is a high-margin, software-driven presence network that
                scales with smartphone adoption, not headcount.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Traction & Edge */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-3">Early Traction</h2>
              <ul className="text-gray-400 text-sm leading-relaxed list-disc pl-5 space-y-1">
                <li>Pilot with a top Indian infrastructure company for remote runway QA.</li>
                <li>Engagements with large Indian states across multiple public-sector use cases.</li>
                <li>Real estate & property management pilots for remote maintenance and inspections.</li>
                <li>Early partnership in medical tourism to virtualize pre-travel patient journeys.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-3">Competitive Edge</h2>
              <ul className="text-gray-400 text-sm leading-relaxed list-disc pl-5 space-y-1">
                <li><span className="font-medium">Privacy-by-design presence</span> — not avatars, not deepfakes, but real humans with automatic blurring.</li>
                <li><span className="font-medium">Smartphone-first</span> — no special hardware needed, just the devices people already own.</li>
                <li><span className="font-medium">Task-focused UX</span> — you see what you need to act, not the person holding the phone.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Round & Team */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-3">Current Round</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                We are opening a SAFE round with a{" "}
                <span className="font-medium">$50M valuation cap</span> and a{" "}
                <span className="font-medium">50% discount</span> for early
                investors. Capital will be used to:
              </p>
              <ul className="text-gray-400 text-sm leading-relaxed list-disc pl-5 mt-2 space-y-1">
                <li>Scale enterprise and government pilots in India and beyond.</li>
                <li>Expand engineering and AI privacy capabilities.</li>
                <li>Strengthen compliance, security, and trust frameworks.</li>
                <li>Launch a global affiliate and presence provider program.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-3">Leadership</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="font-medium">Dinanath Gupt</span>, Founder &amp; CEO — a 16-year veteran of Google and
                inventor of the Presence Economy concept, supported by a global
                team across product, engineering, and go-to-market.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                We&apos;re building not just a product, but a new economic layer:
                a way for billions of people to earn by sharing their presence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="pt-6 border-t border-gray-800 mt-4 text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Join the Presence Economy.
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
            If you&apos;re excited about a world where presence becomes a new
            digital primitive — like messaging or payments — we&apos;d love to talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="rounded-2xl px-6 py-3 text-base bg-teal-500 hover:bg-teal-600"
            >
              <a
                href="https://calendly.com/dgupt/presence-economy-demo"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a Founder Call
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl px-6 py-3 text-base border-gray-600 text-gray-200 hover:bg-gray-900"
            >
              <a href="mailto:founder@360world.com">Contact via Email</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
