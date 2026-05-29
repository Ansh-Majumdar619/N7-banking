"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const solutions = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-400"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          strokeDasharray="4 4"
        />
        <path d="M7.5 12A4.5 4.5 0 1 0 12 7.5" />
        <path d="M16.5 12A4.5 4.5 0 1 0 12 16.5" />
      </svg>
    ),
    title: "Core Banking CB7",
    desc: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    href: "/solutions/core-banking",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-400"
      >
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.5 8.5L15.5 15.5" />
        <path d="M15.5 8.5L8.5 15.5" />
      </svg>
    ),
    title: "Digital Banking N7",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    href: "/solutions/digital-banking",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-400"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05" />
        <path d="M12 22.08V12" />
      </svg>
    ),
    title: "Open Banking",
    desc: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    href: "/solutions/open-banking",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-400"
      >
        <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" />
      </svg>
    ),
    title: "Loan Origination System",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    href: "/solutions/loan-origination",
    tag: "NBFC",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-400"
      >
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
    title: "Loan Management System",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    href: "/solutions/loan-management",
    tag: "NBFC",
  },
];

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".sol-animate");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
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
      className="py-24 bg-[#0A0F1C] relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column (Sticky Title & CTA) */}
          <div className="lg:w-1/3 flex flex-col items-start relative">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-[32px] lg:text-[40px] leading-[1.2] font-medium text-white mb-10 tracking-tight">
                All of our solutions are
                <br />
                tailor-made to your needs
              </h2>

              <Link
                href="/contact"
                className="inline-flex border border-gray-600 hover:border-white text-gray-300 hover:text-white transition-colors text-[10px] font-medium tracking-widest px-8 py-3 rounded-full"
              >
                REQUEST DEMO
              </Link>
            </div>
          </div>

          {/* Right Column (Solutions Grid) */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {solutions.map((sol, i) => (
              <div
                key={sol.title}
                className="sol-animate flex flex-col"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: "all 0.7s ease",
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-white">{sol.icon}</div>
                  {sol.tag && (
                    <span className="text-[10px] text-gray-500 font-mono tracking-widest mt-1">
                      {sol.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-[19px] font-medium text-white mb-4 tracking-tight">
                  {sol.title}
                </h3>

                <p className="text-[13px] text-gray-400 leading-[1.7] mb-6 pr-4">
                  {sol.desc}
                </p>

                <div className="mt-auto">
                  <Link
                    href={sol.href}
                    className="group inline-flex items-center gap-1.5 text-[10px] font-medium text-[#00A3FF] hover:text-blue-400 transition-colors tracking-widest uppercase"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
