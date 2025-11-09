"use client";
import { Button } from "@/components/ui/button";

const InvestorsSection = () => {
  return (
    <section className="py-16 px-6 bg-black border-t border-gray-900 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Building the Presence Economy.
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-6">
          If you&apos;re an investor looking for the next foundational layer
          after messaging and payments, explore how Presence Economy can unlock
          a new class of remote services and income opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-2xl px-6 py-3 text-base bg-teal-500 hover:bg-teal-600"
          >
            <a href="/investors">Learn More for Investors</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
