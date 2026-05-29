"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const features = [
  "Customer On-Boarding",
  "CRM Activities",
  "Managing deposits and withdrawals",
  "Configuring New Banking Products",
  "Transaction management",
  "Loan disbursal and Loan management",
  "Interest Calculation",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc.)",
];

export default function CoreBankingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".cb-animate").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-[#050B14] py-24 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Watermark (Figma Match) */}
      <div className="absolute top-10 -left-10 lg:left-[-5%] pointer-events-none select-none z-0 overflow-hidden w-full">
        <span
          className="text-[350px] md:text-[500px] lg:text-[700px] font-bold text-transparent"
          style={{
            lineHeight: 0.9,
            WebkitTextStroke: "1px rgba(0, 82, 255, 0.25)",
            letterSpacing: "-0.04em",
          }}
        >
          CB7
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-40">
        {/* --- Block 1: Header & Half-Laptop Dashboard (Right side breakout) --- */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
          <div className="lg:w-1/2 max-w-xl z-10 lg:pr-10">
            <h2
              className="cb-animate text-[40px] sm:text-[48px] leading-[1.1] font-medium text-white mb-6 tracking-tight"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              A complete cloud-based
              <br />
              core banking.
            </h2>
            <p
              className="cb-animate text-gray-400 text-sm leading-relaxed mb-10"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              Faster time to market with our cloud-based
              <br />
              core banking services
            </p>
            <div
              className="cb-animate flex items-center gap-8"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              <Link
                href="/contact"
                className="bg-[#0052FF] hover:bg-blue-600 text-white text-[11px] font-medium tracking-widest px-8 py-3 rounded-md transition-colors uppercase"
              >
                Request Demo
              </Link>
              <Link
                href="/solutions/core-banking"
                className="group flex items-center gap-2 text-[10px] font-medium text-[#00A3FF] hover:text-blue-400 transition-colors tracking-widest uppercase"
              >
                <span className="border-b border-[#00A3FF] group-hover:border-blue-400 pb-0.5">
                  LEARN MORE
                </span>
                <span className="text-lg leading-none transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div
            className="cb-animate relative lg:w-1/2 w-full pt-6 lg:-mr-[20vw] xl:-mr-[30vw] z-20"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <div className="bg-[#1A1C24] p-3 pb-0 rounded-t-2xl border-x-4 border-t-4 border-[#2A2D3A] shadow-2xl">
              <div className="bg-gray-100 rounded-t-lg overflow-hidden h-[320px] relative border-b border-gray-300">
                <Image
                  src="/aiml.png"
                  alt="AML Dashboard"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Bottom Lip line */}
            {/* <div className="absolute bottom-[2px] left-0 w-full h-[3px] bg-[#00A3FF] rounded-bl-full z-10" /> */}
          </div>
        </div>

        {/* --- Block 2: Dashboard Mockup & Features List --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className="cb-animate order-2 lg:order-1 relative"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            {/* Minimal Dashboard Frame */}
            <div className="bg-[#1A1C24] p-2 rounded-xl border border-[#2A2D3A] shadow-2xl">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-[360px] flex flex-col relative">
                {/* Browser/Window Header */}
                <div className="h-8 bg-white border-b border-gray-200 flex items-center px-4 z-10 relative">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                </div>

                {/* Custom Dashboard Image Container */}
                <div className="flex-1 relative w-full h-full bg-white">
                  <Image
                    src="/aiml2.png"
                    alt="System Dashboard"
                    fill
                    className="object-cover object-left-top"
                  />
                </div>
              </div>
            </div>

            {/* Laptop Base Lip */}
            <div className="h-3 mx-6 bg-[#2A2D3A] rounded-b-xl opacity-80"></div>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className="cb-animate mb-10"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              <h3 className="text-[26px] lg:text-[32px] font-medium text-white mb-6 leading-tight tracking-tight">
                Run a more efficient, flexible, and
                <br />
                digitally connected corebanking system
              </h3>
              <p className="text-sm font-semibold text-white">
                What you will get:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="cb-animate flex items-start gap-3"
                  style={{
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: "all 0.5s ease",
                    transitionDelay: `${i * 0.05}s`,
                  }}
                >
                  <div className="mt-1 flex-shrink-0 text-[#0052FF]">
                    {/* Solid blue checkmark SVG */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <p className="text-[12px] text-gray-300 leading-relaxed pr-2">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Block 3: Bottom CTA Card --- */}
        <div
          className="cb-animate relative rounded-3xl overflow-hidden bg-[#0A101A] border border-white/5 p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-2xl"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          {/* Internal Faint Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none overflow-hidden">
            <span
              className="text-[250px] font-bold text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,1)" }}
            >
              CB7
            </span>
          </div>

          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl lg:text-4xl font-medium text-white mb-4 tracking-tight leading-tight">
              Take the full advantage of
              <br />
              going paper-less now.
            </h3>
            <p className="text-[13px] text-gray-400 leading-relaxed">
              CB7 helps your financial institution improve the client
              experience, automate and optimize procedures, simplify banking
              operations
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-6">
            <Link
              href="/contact"
              className="border border-gray-600 hover:border-white text-gray-300 hover:text-white transition-colors text-[11px] font-medium tracking-widest px-8 py-3.5 rounded-md"
            >
              CONTACT US
            </Link>
            <Link
              href="/contact"
              className="bg-[#0052FF] hover:bg-blue-600 text-white text-[11px] font-medium tracking-widest px-8 py-3.5 rounded-md transition-colors"
            >
              REQUEST DEMO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
