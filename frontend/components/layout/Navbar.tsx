"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "SOLUTIONS",
    href: "/solutions",
    dropdown: [
      { label: "Core Banking CB7", href: "/solutions/core-banking" },
      { label: "Digital Banking N7", href: "/solutions/digital-banking" },
      { label: "Open Banking", href: "/solutions/open-banking" },
      { label: "Loan Origination System", href: "/solutions/loan-origination" },
      { label: "Loan Management System", href: "/solutions/loan-management" },
    ],
  },
  {
    label: "RESOURCES",
    href: "/resources",
    dropdown: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
    ],
  },
  { label: "ABOUT US", href: "/about", dropdown: null },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full transition-all duration-300">
      <nav
        className={`flex items-center justify-between w-full max-w-5xl h-[52px] px-6 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#1A1C20]/95 backdrop-blur-lg border border-white/10 shadow-2xl"
            : "bg-[#1A1C20] border border-white/5 shadow-lg"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-medium text-white tracking-wide">
            N7
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 pl-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative py-4"
              onMouseEnter={() =>
                item.dropdown && setActiveDropdown(item.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-[11px] font-medium text-gray-300 hover:text-white transition-colors duration-200 tracking-widest"
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown */}
              {item.dropdown && activeDropdown === item.label && (
                <div className="absolute top-[48px] left-1/2 -translate-x-1/2 w-56 bg-[#1A1C20] border border-gray-700 rounded-xl overflow-hidden shadow-2xl z-50">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-3 text-xs text-gray-300 hover:text-white hover:bg-white/5 transition-colors border-b border-gray-700/50 last:border-0"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="border border-gray-500 hover:border-white text-gray-300 hover:text-white transition-colors text-[10px] font-medium tracking-widest px-5 py-2 rounded-full"
          >
            REQUEST DEMO
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-[70px] left-4 right-4 md:hidden bg-[#1A1C20] border border-gray-700 rounded-2xl overflow-hidden shadow-2xl z-40">
          <div className="py-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-6 py-4 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => !item.dropdown && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="bg-black/20">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-10 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-6 py-4 border-t border-gray-700">
              <Link
                href="/contact"
                className="block text-center border border-gray-500 hover:border-white text-gray-300 hover:text-white transition-colors text-[11px] font-medium tracking-widest px-5 py-3 rounded-full w-full"
                onClick={() => setMobileOpen(false)}
              >
                REQUEST DEMO
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
