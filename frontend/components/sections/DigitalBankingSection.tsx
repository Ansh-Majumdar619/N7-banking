"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const phoneFeatures = [
  {
    title: "Fully compliant with regulatory requirement",
    desc: "The governance of risk management with regulations is achieved by our risk-management framework that is fully integrated to work with digital bank's operational risk protocols and procedures.",
    points: [
      "Pre-Integrated Security System",
      "Fully Compliant With Regulatory Requirement",
      "Digitally Connected Core",
    ],
    screen: "compliance",
  },
  {
    title: "No legacy IT systems",
    desc: "Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
    points: [
      "Adaptive & Intelligent API monetisation",
      "Ambient User Experience",
      "Cloud-native with lower TCO",
    ],
    screen: "transaction",
  },
  {
    title: "No traditional branches",
    desc: "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing tasks and optimising operations costs for a seamless launch/new experiences.",
    points: [
      "Branchless & Paperless Banking",
      "Digital Transformation Capability",
      "Optimised, Adaptable and Scalable",
    ],
    screen: "profile",
  },
];

function PhoneScreen({ type }: { type: string }) {
  const BottomNav = () => (
    <div className="absolute bottom-0 w-full bg-[#E9F4F9] border-t border-gray-100 px-6 py-3 flex justify-between items-center rounded-b-[1.5rem] z-30">
      <div className="flex flex-col items-center gap-1 opacity-100">
        <div className="w-4 h-4 rounded bg-gray-300"></div>
        <span className="text-[6px] text-gray-500 font-medium">Home</span>
      </div>
      <div className="flex flex-col items-center gap-1 opacity-40">
        <div className="w-4 h-4 rounded bg-gray-300"></div>
        <span className="text-[6px] text-gray-500 font-medium">Card</span>
      </div>
      <div className="flex flex-col items-center gap-1 opacity-40">
        <div className="w-4 h-4 rounded bg-gray-300"></div>
        <span className="text-[6px] text-gray-500 font-medium">
          Transaction
        </span>
      </div>
      <div className="flex flex-col items-center gap-1 opacity-40">
        <div className="w-4 h-4 rounded bg-gray-300"></div>
        <span className="text-[6px] text-gray-500 font-medium">Profile</span>
      </div>
    </div>
  );

  return (
    <div className="relative border-[6px] border-[#1A1A1A] rounded-[2rem] w-full max-w-[220px] h-[450px] bg-white shadow-2xl mx-auto overflow-hidden">
      {/* iPhone Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1A1A1A] rounded-b-xl z-20"></div>

      <div className="h-full overflow-hidden relative pt-6 pb-16 bg-white">
        {type === "compliance" && (
          <div className="px-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                    alt="Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-900 leading-tight">
                    Toni Kross
                  </p>
                  <p className="text-[8px] text-gray-500">Good Morning</p>
                </div>
              </div>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            <div className="mb-6">
              <p className="text-[20px] font-bold text-[#0F172A] tracking-tight">
                $42,295.00 USD
              </p>

              <div className="flex justify-between mt-5 px-2">
                <div className="flex flex-col items-center gap-1.5 cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-gray-100 bg-white flex items-center justify-center shadow-sm">
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-[8px] font-medium text-gray-600">
                    Fund Transfer
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5 cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-gray-100 bg-white flex items-center justify-center shadow-sm">
                    <span className="font-bold text-gray-700 text-sm">$</span>
                  </div>
                  <span className="text-[8px] font-medium text-gray-600">
                    Add Money
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5 cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-gray-100 bg-white flex items-center justify-center shadow-sm">
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-[8px] font-medium text-gray-600">
                    More
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-gray-900 mb-3">
                Recent activity
              </p>
              <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
                <button className="text-[8px] font-medium px-3 py-1.5 rounded-full bg-[#1E293B] text-white whitespace-nowrap">
                  This Day
                </button>
                <button className="text-[8px] font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 whitespace-nowrap">
                  This Week
                </button>
                <button className="text-[8px] font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 whitespace-nowrap">
                  This Month
                </button>
              </div>

              <div className="space-y-3">
                {[
                  {
                    name: "To Jin",
                    sub: "Work",
                    amt: "-$59",
                    color: "bg-[#8B5CF6]",
                  },
                  {
                    name: "From Google",
                    sub: "Salary",
                    amt: "+$859",
                    color: "bg-gray-100",
                  },
                  {
                    name: "To David",
                    sub: "Work",
                    amt: "-$499",
                    color: "bg-[#8B5CF6]",
                  },
                  {
                    name: "From Google",
                    sub: "Bonus",
                    amt: "+$859",
                    color: "bg-gray-100",
                  },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] ${tx.color} ${tx.color === "bg-gray-100" ? "text-gray-500" : "text-white"}`}
                      >
                        {tx.amt.startsWith("+") ? "↓" : "↑"}
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-gray-900">
                          {tx.name}{" "}
                          <span className="font-normal text-gray-500">
                            · {tx.sub}
                          </span>
                        </p>
                        <p className="text-[7px] text-gray-400">12 Jun 2022</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-900">
                      {tx.amt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {type === "transaction" && (
          <div className="px-4">
            <p className="text-[8px] text-gray-500 mb-0.5">March 2022</p>
            <p className="text-[20px] font-bold text-[#0F172A] tracking-tight mb-5">
              $8,295.00 USD
            </p>

            <div className="flex items-end gap-1.5 h-20 mb-2">
              {[40, 50, 90, 45, 60, 55].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 2 ? "#1E293B" : "#F1F5F9",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-1.5 mb-5">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m, i) => (
                <span
                  key={m}
                  className={`flex-1 text-center text-[7px] ${i === 2 ? "font-bold text-gray-900" : "text-gray-400"}`}
                >
                  {m}
                </span>
              ))}
            </div>

            <div className="flex gap-6 mb-6">
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1E293B]"></div>
                  <p className="text-[8px] text-gray-500">Income</p>
                </div>
                <p className="text-[12px] font-bold text-gray-900">$453.00</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                  <p className="text-[8px] text-gray-500">Spend</p>
                </div>
                <p className="text-[12px] font-bold text-gray-900">$453.00</p>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-gray-900 mb-3">
                Recent activity
              </p>
              <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
                <button className="text-[8px] font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 whitespace-nowrap">
                  This Day
                </button>
                <button className="text-[8px] font-medium px-3 py-1.5 rounded-full bg-[#1E293B] text-white whitespace-nowrap">
                  This Week
                </button>
                <button className="text-[8px] font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 whitespace-nowrap">
                  This Month
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#8B5CF6] flex items-center justify-center text-[10px] text-white">
                      ↑
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-gray-900">
                        To Jin{" "}
                        <span className="font-normal text-gray-500">
                          · Work
                        </span>
                      </p>
                      <p className="text-[7px] text-gray-400">12 Jun 2022</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-900">
                    -$59
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-500">
                      ↓
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-gray-900">
                        From Google{" "}
                        <span className="font-normal text-gray-500">
                          · Salary
                        </span>
                      </p>
                      <p className="text-[7px] text-gray-400">10 Jun 2022</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-900">
                    +$859
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "profile" && (
          <div className="px-4 py-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 mb-3 overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                alt="Avatar"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[14px] font-bold text-gray-900 mb-0.5">
              Toni Kross
            </p>
            <p className="text-[8px] text-gray-500 mb-8">
              Good Morning Accounts
            </p>

            <div className="w-full space-y-1">
              {[
                {
                  icon: (
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  ),
                  label: "Profile setting",
                },
                {
                  icon: (
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  ),
                  label: "Setting",
                },
                {
                  icon: (
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  ),
                  label: "Support",
                },
                {
                  icon: (
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  ),
                  label: "Sign out",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-medium text-gray-700">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">›</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
}

export default function DigitalBankingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".db-animate").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
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
      className="bg-[#F4F8FB] relative overflow-hidden font-sans"
      ref={sectionRef}
    >
      {/* 1. Background "N7" Watermark Over Hero */}
      <div className="absolute top-[5%] left-[5%] lg:left-[15%] pointer-events-none select-none z-0 overflow-hidden w-full h-[1200px] flex justify-center">
        <span
          className="text-[400px] lg:text-[700px] font-bold text-transparent"
          style={{
            lineHeight: 0.9,
            WebkitTextStroke: "1.5px #C2D6E8",
            letterSpacing: "-0.04em",
          }}
        >
          N7
        </span>
      </div>

      {/* 2. Background Abstract Circular Arcs (Left Side) */}
      <div className="absolute top-[25%] -left-[15%] lg:-left-[10%] w-[600px] h-[1000px] pointer-events-none z-0">
        <svg viewBox="0 0 800 1200" className="w-full h-full opacity-70">
          <path
            d="M -200 100 A 700 700 0 0 1 -200 1100"
            fill="none"
            stroke="#BDD4E7"
            strokeWidth="1.5"
          />
          <path
            d="M -200 300 A 500 500 0 0 1 -200 900"
            fill="none"
            stroke="#BDD4E7"
            strokeWidth="1.5"
          />
          <path
            d="M -200 450 A 300 300 0 0 1 -200 750"
            fill="none"
            stroke="#BDD4E7"
            strokeWidth="1.5"
          />
          <path
            d="M -200 600 Q 200 600 300 300"
            fill="none"
            stroke="#BDD4E7"
            strokeWidth="1.5"
          />
          <path
            d="M -200 600 Q 200 600 300 900"
            fill="none"
            stroke="#BDD4E7"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Scrolling header */}
      <div className="bg-white border-t-2 border-[#FF4D00] border-b border-gray-200 py-3 overflow-hidden whitespace-nowrap relative z-10">
        <div className="inline-flex items-center animate-marquee">
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="text-[15px] font-bold text-[#0052FF] mx-6 tracking-wide">
                  N7
                </span>
                <svg
                  className="w-5 h-5 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v20M2 12h20M4.929 4.929l14.142 14.142M4.929 19.071L19.071 4.929"
                  />
                </svg>
                <span className="text-[15px] font-bold text-gray-900 mx-6 tracking-wide">
                  Say 👋 to the new way of banking
                </span>
                <svg
                  className="w-5 h-5 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v20M2 12h20M4.929 4.929l14.142 14.142M4.929 19.071L19.071 4.929"
                  />
                </svg>
                <span className="text-[15px] font-bold text-[#00A3FF] mx-6 tracking-wide">
                  CB7
                </span>
                <svg
                  className="w-5 h-5 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v20M2 12h20M4.929 4.929l14.142 14.142M4.929 19.071L19.071 4.929"
                  />
                </svg>
              </div>
            ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 pt-20 pb-24">
        {/* Row 1: Hero (Left), Phone 1 (Center), Feature 1 (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16 lg:mb-10">
          <div
            className="db-animate"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <h2 className="text-[32px] lg:text-[40px] font-medium text-gray-900 leading-[1.1] tracking-tight mb-4">
              Digital banking
              <br />
              out-of-the-box
            </h2>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-8 pr-4">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#0052FF] hover:bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-8 py-3.5 rounded transition-colors"
            >
              REQUEST DEMO
            </Link>
            <br />
            <Link
              href="/solutions/digital-banking"
              className="group inline-flex items-center gap-1.5 text-[10px] font-bold text-[#0052FF] hover:text-blue-700 transition-colors uppercase tracking-widest mt-6"
            >
              <span className="border-b border-[#0052FF] group-hover:border-blue-700 pb-0.5">
                LEARN MORE
              </span>
              <span className="text-lg leading-none transform transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
          <div
            className="db-animate flex justify-center py-6 lg:py-0"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.6s ease",
            }}
          >
            <PhoneScreen type={phoneFeatures[0].screen} />
          </div>
          <div
            className="db-animate flex flex-col justify-center"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <h3 className="text-[13px] font-bold text-gray-900 mb-2">
              {phoneFeatures[0].title}
            </h3>
            <p className="text-[11px] text-gray-500 leading-[1.7] mb-5">
              {phoneFeatures[0].desc}
            </p>
            <div className="space-y-3">
              {phoneFeatures[0].points.map((point, j) => (
                <div key={j} className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#0052FF] flex-shrink-0 flex items-center justify-center text-white">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-[11px] font-medium text-gray-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Empty (Left), Feature 2 (Center), Phone 2 (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16 lg:mb-10">
          <div className="hidden lg:block"></div>
          <div
            className="db-animate flex flex-col justify-center order-2 lg:order-1"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <h3 className="text-[13px] font-bold text-gray-900 mb-2">
              {phoneFeatures[1].title}
            </h3>
            <p className="text-[11px] text-gray-500 leading-[1.7] mb-5">
              {phoneFeatures[1].desc}
            </p>
            <div className="space-y-3">
              {phoneFeatures[1].points.map((point, j) => (
                <div key={j} className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#0052FF] flex-shrink-0 flex items-center justify-center text-white">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-[11px] font-medium text-gray-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="db-animate flex justify-center py-6 lg:py-0 order-1 lg:order-2"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.6s ease",
            }}
          >
            <PhoneScreen type={phoneFeatures[1].screen} />
          </div>
        </div>

        {/* Row 3: Empty (Left), Phone 3 (Center), Feature 3 (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-20 lg:mb-24">
          <div className="hidden lg:block"></div>
          <div
            className="db-animate flex justify-center py-6 lg:py-0"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.6s ease",
            }}
          >
            <PhoneScreen type={phoneFeatures[2].screen} />
          </div>
          <div
            className="db-animate flex flex-col justify-center"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <h3 className="text-[13px] font-bold text-gray-900 mb-2">
              {phoneFeatures[2].title}
            </h3>
            <p className="text-[11px] text-gray-500 leading-[1.7] mb-5">
              {phoneFeatures[2].desc}
            </p>
            <div className="space-y-3">
              {phoneFeatures[2].points.map((point, j) => (
                <div key={j} className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#0052FF] flex-shrink-0 flex items-center justify-center text-white">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-[11px] font-medium text-gray-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Block 4: Bottom CTA Card --- */}
        <div
          className="db-animate relative rounded-[24px] overflow-hidden bg-[#050A10] p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-2xl mx-auto"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          {/* Internal Faint Watermark Fix (Now Faint Blue per Screenshot) */}
          <div className="absolute inset-0 flex items-center justify-end -right-[10%] pointer-events-none select-none overflow-hidden">
            <span
              className="text-[250px] font-bold text-transparent"
              style={{ WebkitTextStroke: "1px rgba(30, 111, 255, 0.2)" }}
            >
              N7
            </span>
          </div>

          <div className="relative z-10 max-w-[400px]">
            <h3 className="text-[26px] lg:text-[32px] font-medium text-white mb-4 tracking-tight leading-[1.1]">
              Take the full advantage of
              <br />
              going paper-less now.
            </h3>
            <p className="text-[10px] text-gray-400 leading-relaxed pr-4">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures, simplify banking operations
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="border border-gray-600 hover:border-white text-gray-300 hover:text-white transition-colors text-[9px] font-bold tracking-widest px-8 py-3 rounded uppercase"
            >
              CONTACT US
            </Link>
            <Link
              href="/contact"
              className="bg-[#0052FF] hover:bg-blue-600 text-white text-[9px] font-bold tracking-widest px-8 py-3 rounded transition-colors uppercase"
            >
              REQUEST DEMO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
