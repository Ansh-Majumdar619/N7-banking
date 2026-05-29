import type { Metadata } from "next";
import InsightsSection from "@/components/sections/InsightsSection";

export const metadata: Metadata = {
  title: "Insights | N7 Banking",
  description: "Stay up-to-speed with the latest fintech trends, case studies, and thought leadership from N7 Banking.",
};

export default function InsightsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-n7-dark">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="badge-cyan inline-block mb-4">Insights</span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Knowledge for the
            <br />
            <span className="text-gradient-cyan">future of banking</span>
          </h1>
          <p className="text-n7-text text-lg max-w-2xl mx-auto">
            Articles, case studies, and whitepapers from our team of banking and fintech experts.
          </p>
        </div>
      </section>
      <InsightsSection />
    </div>
  );
}
