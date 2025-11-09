"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-20 max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.2em] text-teal-400">
            For Partners
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Bring Presence Economy to your organization.
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl">
            Deploy live human presence into your workflows — for QA, inspections,
            customer experience, governance, and more — using the smartphones
            people already have.
          </p>
        </div>

        <div className="inline-flex flex-wrap gap-4">
          <Button
            asChild
            className="rounded-2xl px-6 py-3 text-base bg-teal-500 hover:bg-teal-600"
          >
            <a
              href="https://calendly.com/dgupt/presence-economy-demo"
              target="_blank"
              rel="noreferrer"
            >
              Book a Live Demo
            </a>
          </Button>

          <Button
            variant="outline"
            className="rounded-2xl px-6 py-3 text-base border-gray-600 text-gray-200 hover:bg-gray-900"
          >
            <a href="mailto:partnerships@360world.com">
              Contact Partnerships
            </a>
          </Button>
        </div>
      </section>

      {/* Value props */}
      <section className="px-6 pb-24 max-w-5xl mx-auto space-y-12">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-lg font-semibold mb-2">Remote QA & Inspections</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Guide on-site staff or gig workers step-by-step through critical
                checks — without flying experts around the world.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-lg font-semibold mb-2">Customer & Citizen Experience</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Let customers or citizens “be there” in real time — touring properties,
                facilities, or services through a trusted presence provider.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-lg font-semibold mb-2">Smart Governance & Oversight</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Give decision-makers live visibility into the field — projects,
                services, and public spaces — with full privacy controls.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How it works */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-3">How It Works</h2>
              <ol className="text-gray-400 text-sm leading-relaxed list-decimal pl-5 space-y-1">
                <li>We identify high-value use cases with your team.</li>
                <li>We onboard your staff or curated presence providers.</li>
                <li>You trigger live sessions from your existing workflows.</li>
                <li>Your experts direct each session in real time.</li>
                <li>We handle privacy, routing, and payouts in the background.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-3">Why Partners Choose 360 World</h2>
              <ul className="text-gray-400 text-sm leading-relaxed list-disc pl-5 space-y-1">
                <li>Deploy quickly using smartphones and the Xeniq app.</li>
                <li>Privacy-by-design: all humans blurred, no recordings.</li>
                <li>Flexible models: pilots, enterprise plans, and APIs.</li>
                <li>Support across infrastructure, real estate, insurance, public sector, and more.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Pilot examples */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-3">Sample Pilots</h2>
              <ul className="text-gray-400 text-sm leading-relaxed list-disc pl-5 space-y-1">
                <li>Remote runway quality control for an airport project.</li>
                <li>District-level governance visibility across multiple sites.</li>
                <li>Property walkthroughs and maintenance verification for landlords and operators.</li>
                <li>Medical tourism facility walkthroughs for international patients.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-3">Integration Options</h2>
              <ul className="text-gray-400 text-sm leading-relaxed list-disc pl-5 space-y-1">
                <li>Standalone Xeniq web and mobile apps.</li>
                <li>Deep links from your existing tools and CRMs.</li>
                <li>APIs and webhooks for workflow automation.</li>
              </ul>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                Our goal is to make presence feel like just another service in your stack —
                as simple as sending a message or starting a video call.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="pt-6 border-t border-gray-800 mt-4 text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Let&apos;s design your first Presence Economy pilot.
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
            Whether you&apos;re an enterprise, government, or operator, we&apos;ll
            co-create a pilot that delivers measurable impact in weeks, not years.
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
                Book a Live Demo
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl px-6 py-3 text-base border-gray-600 text-gray-200 hover:bg-gray-900"
            >
              <a href="mailto:partnerships@360world.com">
                Contact Partnerships
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
