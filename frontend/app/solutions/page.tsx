import type { Metadata } from "next";
import SolutionsSection from "@/components/sections/SolutionsSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions | N7 Banking",
  description: "Explore N7 Banking solutions: Core Banking CB7, Digital Banking, Open Banking, Loan Origination and more.",
};

export default function SolutionsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-n7-dark">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="badge-cyan inline-block mb-4">Our Solutions</span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Purpose-built for
            <br />
            <span className="text-gradient-cyan">modern financial institutions</span>
          </h1>
          <p className="text-n7-text text-lg max-w-2xl mx-auto mb-10">
            From core banking to digital channels, our modular platform gives you everything you need to build and scale a world-class bank.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Demo
          </Link>
        </div>
      </section>

      <SolutionsSection />
    </div>
  );
}
