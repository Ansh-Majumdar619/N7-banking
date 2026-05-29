"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll(".hero-animate");
    els?.forEach((el, i) => {
      setTimeout(
        () => {
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "translateY(0)";
        },
        100 + i * 150,
      );
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0F1C] pt-24 pb-16"
    >
      {/* Background glow effect */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="mt-10 lg:mt-0">
            <h1
              className="hero-animate text-5xl sm:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-6 tracking-tight"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.7s ease",
              }}
            >
              The new foundation
              <br />
              of modern banking
            </h1>

            <p
              className="hero-animate text-gray-400 text-base sm:text-lg leading-relaxed max-w-md mb-10"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.7s ease",
              }}
            >
              We drive innovation and growth, provide seamless customer
              experience and operational excellence
            </p>

            <div
              className="hero-animate flex flex-wrap gap-4"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.7s ease",
              }}
            >
              <Link
                href="/contact"
                className="bg-[#0052FF] hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
              >
                REQUEST DEMO
              </Link>
              <Link
                href="/contact"
                className="border border-gray-600 hover:border-gray-400 text-white font-medium px-8 py-3 rounded-lg transition-colors"
              >
                CONTACT US
              </Link>
            </div>

            {/* Trusted By Logos */}
            <div
              className="hero-animate mt-20"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.7s ease",
              }}
            >
              <p className="text-sm text-gray-500 mb-5">Trusted By:</p>
              <div className="flex flex-wrap items-center gap-8 opacity-70">
                <span className="flex items-center gap-2 text-sm text-white font-semibold">
                  <span className="w-4 h-4 border border-white rounded-full flex items-center justify-center text-[8px]">
                    S
                  </span>{" "}
                  SHELLS
                </span>
                <span className="flex items-center gap-2 text-sm text-white font-semibold">
                  <span className="w-0 h-0 border-l-[6px] border-l-transparent border-t-[10px] border-t-white border-r-[6px] border-r-transparent"></span>{" "}
                  SmartFinder
                </span>
                <span className="flex items-center gap-1 text-sm text-white font-semibold">
                  <span className="w-4 h-4 bg-gray-400 rounded-full"></span>{" "}
                  Zoomerr
                </span>
                <span className="flex items-center gap-2 text-sm text-white font-semibold">
                  <span className="flex space-x-0.5">
                    <span className="w-1 h-3 bg-white -skew-x-12"></span>
                    <span className="w-1 h-4 bg-white -skew-x-12"></span>
                    <span className="w-1 h-3 bg-white -skew-x-12"></span>
                  </span>{" "}
                  ArtVenue
                </span>
                <span className="flex items-center gap-1 text-sm text-white font-semibold">
                  <span className="w-3 h-3 bg-white rounded-sm"></span>{" "}
                  kontrastr
                </span>
                <span className="flex items-center gap-1 text-sm text-white font-semibold tracking-wider">
                  <span className="flex items-end space-x-[1px] mr-1">
                    <span className="w-0.5 h-1 bg-white"></span>
                    <span className="w-0.5 h-2 bg-white"></span>
                    <span className="w-0.5 h-3 bg-white"></span>
                    <span className="w-0.5 h-2 bg-white"></span>
                  </span>{" "}
                  WAVESMARATHON
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Main Image and Floating Glass Cards */}
          <div
            className="hero-animate relative w-full lg:h-[500px] flex items-center justify-center mt-12 lg:mt-0"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.7s ease",
            }}
          >
            {/* Main Center Image */}
            <div className="relative w-[90%] max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.jpg"
                alt="Woman using smartphone and laptop"
                fill
                className="object-cover"
              />
            </div>

            {/* Top Right Overlay: Balance Card (Pure HTML/Tailwind) */}
            <div className="absolute top-[5%] lg:top-[-5%] right-[-5%] lg:right-[-10%] w-[280px] rounded-[24px] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.2)] z-20 bg-white/70 backdrop-blur-xl border border-white/50 hidden sm:block">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                      alt="Toni Kross"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#1A1C24] leading-tight">
                      Toni Kross
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Good Morning
                    </p>
                  </div>
                </div>
                <button className="w-7 h-7 rounded-lg border border-gray-300/50 flex items-center justify-center text-gray-600 bg-white/30">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-5 mb-4">
                <p className="text-[12px] text-gray-500 mb-1">Total balance</p>
                <h3 className="text-[22px] font-bold text-[#0A1C40] tracking-tight">
                  $42,295.00 USD
                </h3>
              </div>

              <div className="w-full h-[1px] bg-gray-300/50 mb-4"></div>

              <div className="flex justify-between items-center px-1">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm text-[#1A1C24] transition-transform hover:scale-105">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-semibold text-gray-600">
                    Fund Transfer
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm text-[#1A1C24] transition-transform hover:scale-105">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 8v8m-2-4h4" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-semibold text-gray-600">
                    Add Money
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm text-[#1A1C24] transition-transform hover:scale-105">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="4" y="4" width="6" height="6" rx="1" />
                      <rect x="14" y="4" width="6" height="6" rx="1" />
                      <rect x="4" y="14" width="6" height="6" rx="1" />
                      <rect x="14" y="14" width="6" height="6" rx="1" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-semibold text-gray-600">
                    More
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Left Overlay: Recent Activity (Pure HTML/Tailwind) */}
            <div className="absolute bottom-[5%] left-[-10%] lg:left-[-12%] w-[340px] rounded-[24px] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.2)] z-20 bg-white/70 backdrop-blur-xl border border-white/50 hidden sm:block">
              <h4 className="text-[16px] font-bold text-[#1A1C24] mb-4">
                Recent activity
              </h4>

              <div className="flex gap-2 mb-5">
                <button className="text-[10px] font-medium px-3 py-1.5 rounded-full bg-white text-gray-700 shadow-sm whitespace-nowrap">
                  This Day
                </button>
                <button className="text-[10px] font-medium px-4 py-1.5 rounded-full bg-[#0A1C40] text-white shadow-sm whitespace-nowrap">
                  This Week
                </button>
                <button className="text-[10px] font-medium px-3 py-1.5 rounded-full bg-white text-gray-700 shadow-sm whitespace-nowrap">
                  This Month
                </button>
                <button className="text-[10px] font-medium px-3 py-1.5 rounded-full bg-white text-gray-700 shadow-sm whitespace-nowrap">
                  6 Month
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-[14px] bg-[#8B7CFF] flex items-center justify-center text-white shadow-sm">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-[#1A1C24]">
                      To Jin{" "}
                      <span className="font-normal text-gray-500">· Work</span>
                    </h5>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      12 jun 2022
                    </p>
                  </div>
                </div>
                <span className="text-[15px] font-bold text-[#1A1C24]">
                  -$59
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}