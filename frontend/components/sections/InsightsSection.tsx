"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

// Reusable SVG pattern for the featured cards
const XPatternGraphic = () => (
  <div className="grid grid-cols-2 gap-6 p-10">
    {[1, 2, 3, 4].map((i) => (
      <svg
        key={i}
        width="56"
        height="56"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#00A3FF]"
      >
        <path
          d="M 8 8 L 24 18 L 40 8 L 30 24 L 40 40 L 24 30 L 8 40 L 18 24 Z"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinejoin="round"
        />
      </svg>
    ))}
  </div>
);

export default function InsightsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".ins-animate").forEach((el, i) => {
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
      className="py-24 bg-[#050A10] relative overflow-hidden font-sans"
      ref={sectionRef}
    >
      {/* Background Radial Glows */}
      <div className="absolute top-[10%] left-0 w-[600px] h-[600px] bg-[#0052FF] opacity-[0.06] blur-[120px] pointer-events-none rounded-full transform -translate-x-1/2"></div>
      <div className="absolute bottom-[5%] left-0 w-[800px] h-[800px] bg-[#0052FF] opacity-[0.05] blur-[150px] pointer-events-none rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        {/* --- Block 1: Fintech Insights Split Layout --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-32">
          {/* Left Column: Title & Button */}
          <div
            className="ins-animate lg:w-[35%] flex flex-col items-start"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <h2 className="text-[26px] lg:text-[32px] font-medium text-white leading-[1.2] tracking-tight mb-8">
              Get yourself up-to-speed on
              <br />
              all the things happening in
              <br />
              fintech
            </h2>
            <Link
              href="/insights"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white transition-colors text-[9px] font-bold tracking-widest px-8 py-3 rounded-md uppercase"
            >
              INSIGHTS
            </Link>
          </div>

          {/* Right Column: Grid of Cards */}
          <div className="lg:w-[65%] flex flex-col gap-5">
            {/* Featured Full-Width Card */}
            <div
              className="ins-animate flex flex-col sm:flex-row bg-[#0A111A] border border-white/5 rounded-[20px] overflow-hidden"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              <div className="sm:w-1/2 bg-[#09152B] flex items-center justify-center min-h-[220px]">
                <XPatternGraphic />
              </div>
              <div className="sm:w-1/2 p-8 flex flex-col justify-center">
                <p className="text-[9px] text-[#00A3FF] font-bold tracking-widest uppercase mb-3">
                  GETTING STARTED
                </p>
                <h3 className="text-lg font-medium text-white leading-tight mb-4">
                  How to transition from a<br />
                  traditional to a digital
                  <br />
                  bank
                </h3>
                <p className="text-[9px] font-medium text-gray-500 mb-8 tracking-wide">
                  David Grohl <span className="mx-2">17/08/24</span>
                </p>
                <button className="w-full border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-gray-300 transition-colors text-[9px] font-bold tracking-widest py-3 rounded-full uppercase">
                  READ MORE
                </button>
              </div>
            </div>

            {/* Two Smaller Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="ins-animate flex flex-col bg-[#0A111A] border border-white/5 rounded-[20px] p-8"
                  style={{
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: "all 0.6s ease",
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <p className="text-[9px] text-[#00A3FF] font-bold tracking-widest uppercase mb-3">
                    GETTING STARTED
                  </p>
                  <h3 className="text-lg font-medium text-white leading-tight mb-4 flex-1">
                    How to transition
                    <br />
                    from a traditional to a<br />
                    digital bank
                  </h3>
                  <p className="text-[9px] font-medium text-gray-500 mb-8 tracking-wide">
                    David Grohl <span className="mx-2">17/08/24</span>
                  </p>
                  <button className="w-full border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-gray-300 transition-colors text-[9px] font-bold tracking-widest py-3 rounded-full uppercase mt-auto">
                    READ MORE
                  </button>
                </div>
              ))}
            </div>

            {/* Read All Link */}
            <div
              className="ins-animate flex justify-end mt-2 pr-2"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              <Link
                href="/insights"
                className="group flex items-center gap-1.5 text-[9px] font-bold text-[#00A3FF] hover:text-blue-400 transition-colors uppercase tracking-widest"
              >
                READ ALL INSIGHTS
                <span className="text-sm leading-none transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* --- Block 2: Our Case Studies Carousel --- */}
        <div className="mb-32 max-w-4xl mx-auto">
          <h2
            className="ins-animate text-[28px] lg:text-[32px] font-medium text-center text-white mb-14 tracking-tight"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            Our Case Studies
          </h2>

          <div
            className="ins-animate relative"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            {/* Background Layer 2 (Furthest) */}
            <div className="absolute top-8 -left-8 -right-8 bottom-[-32px] bg-[#080D15] border border-white/[0.03] rounded-2xl z-0"></div>

            {/* Background Layer 1 (Middle) */}
            <div className="absolute top-4 -left-4 -right-4 bottom-[-16px] bg-[#090F19] border border-white/[0.04] rounded-2xl z-10"></div>

            {/* Main Active Card */}
            <div className="relative z-20 flex flex-col sm:flex-row bg-[#0A111A] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
              <div className="sm:w-1/2 bg-[#09152B] flex items-center justify-center min-h-[280px]">
                <XPatternGraphic />
              </div>
              <div className="sm:w-1/2 p-10 flex flex-col justify-center">
                <p className="text-[9px] text-[#00A3FF] font-bold tracking-widest uppercase mb-3">
                  GETTING STARTED
                </p>
                <h3 className="text-[24px] font-medium text-white leading-[1.2] mb-6 tracking-tight">
                  How we help brand
                  <br />
                  reach out to more
                  <br />
                  people
                </h3>

                <div className="flex items-center gap-2 mb-8">
                  <div className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
                    </svg>
                  </div>
                  <span className="text-[12px] font-medium text-gray-300">
                    Zoomerr
                  </span>
                </div>

                <button className="w-full border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-gray-300 transition-colors text-[9px] font-bold tracking-widest py-3 rounded-full uppercase">
                  READ MORE
                </button>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center mt-16 relative z-20 px-2">
              <div className="flex-1"></div>

              <div className="flex-1 flex items-center justify-center gap-6">
                <button className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:border-gray-400 transition-colors">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <div className="flex gap-2">
                  <div className="w-6 h-1.5 bg-[#00A3FF] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                </div>

                <button className="w-8 h-8 rounded-full border border-[#00A3FF] flex items-center justify-center text-[#00A3FF] hover:bg-[#00A3FF] hover:text-white transition-colors">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 flex justify-end">
                <Link
                  href="/insights/case-studies"
                  className="group flex items-center gap-1.5 text-[9px] font-bold text-[#00A3FF] hover:text-blue-400 transition-colors uppercase tracking-widest"
                >
                  VIEW ALL
                  <span className="text-sm leading-none transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --- Block 3: Bottom CTA directly on background (No Card) --- */}
        <div
          className="ins-animate flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mx-auto max-w-[1000px] pt-10"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <div className="max-w-[420px]">
            <h3 className="text-[28px] lg:text-[36px] font-medium text-white mb-4 tracking-tight leading-[1.1]">
              Take the full advantage of
              <br />
              going paper-less now.
            </h3>
            <p className="text-[11px] text-gray-400 leading-relaxed pr-4">
              CB7 helps your financial institution improve the client
              experience,
              <br />
              automate and optimize procedures, simplify banking operations
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white transition-colors text-[9px] font-bold tracking-widest px-8 py-3.5 rounded-md uppercase"
            >
              CONTACT US
            </Link>
            <Link
              href="/contact"
              className="bg-[#0052FF] hover:bg-blue-600 text-white text-[9px] font-bold tracking-widest px-8 py-3.5 rounded-md transition-colors uppercase"
            >
              REQUEST DEMO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
