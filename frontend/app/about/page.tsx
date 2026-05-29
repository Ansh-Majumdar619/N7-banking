import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | N7 Banking",
  description: "N7 Banking — built on innovation, purpose, and a deep understanding of modern financial services.",
};

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Banking Clients" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "3", label: "Global Offices" },
];

const values = [
  {
    icon: "🎯",
    title: "Client-Centered",
    desc: "Every product we build starts with the customer in mind — their pain points, their needs, their aspirations.",
  },
  {
    icon: "🔒",
    title: "Security First",
    desc: "Banking-grade security is non-negotiable. We build compliance and security into every layer of our platform.",
  },
  {
    icon: "⚡",
    title: "Innovation-Driven",
    desc: "We constantly push the boundaries of what's possible in fintech, leveraging AI, ML, and modern API architectures.",
  },
  {
    icon: "🌍",
    title: "Global Perspective",
    desc: "With offices in London, Dubai, and India, we understand diverse regulatory and market environments.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-n7-dark">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="badge-cyan inline-block mb-4">About N7</span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We build the infrastructure
              <br />
              <span className="text-gradient-cyan">banks run on</span>
            </h1>
            <p className="text-n7-text text-lg leading-relaxed max-w-xl">
              N7 Banking is a global financial technology company delivering cloud-native banking platforms to financial institutions worldwide. We believe modern banking should be fast, secure, and human.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-n7-darker border-y border-n7-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-4xl font-bold text-n7-cyan mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-n7-text">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-n7-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-cyan inline-block mb-4">Our Mission</span>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Democratizing access to
                <span className="text-gradient-cyan"> world-class banking infrastructure</span>
              </h2>
              <p className="text-n7-text text-base leading-relaxed mb-6">
                We drive innovation and growth, provide seamless customer experience and operational excellence. Our platform enables financial institutions of all sizes to compete in the digital economy.
              </p>
              <p className="text-n7-text text-base leading-relaxed mb-8">
                From community banks to large financial institutions, N7 provides the technology foundation that powers next-generation financial services.
              </p>
              <Link href="/contact" className="btn-primary">
                Work With Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value.title} className="card-dark rounded-2xl p-6">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3
                    className="text-sm font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-xs text-n7-text leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team / Company */}
      <section className="py-24 bg-n7-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-cyan inline-block mb-4">Our Company</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A global team with
            <span className="text-gradient-cyan"> local expertise</span>
          </h2>
          <p className="text-n7-text text-base max-w-2xl mx-auto mb-12">
            Lincley Infrasystems Ltd operates across London, Dubai, and India, bringing together experts in banking technology, regulatory compliance, and product design.
          </p>

          {/* Office cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: "London", role: "Headquarters", flag: "🇬🇧" },
              { city: "Dubai", role: "MENA Operations", flag: "🇦🇪" },
              { city: "India", role: "Engineering Hub", flag: "🇮🇳" },
            ].map((office) => (
              <div key={office.city} className="card-dark rounded-2xl p-8">
                <div className="text-4xl mb-4">{office.flag}</div>
                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {office.city}
                </h3>
                <p className="text-sm text-n7-cyan">{office.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
