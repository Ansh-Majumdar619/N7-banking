import Link from "next/link";

const footerLinks = {
  Solutions: [
    { label: "Core Banking CB7", href: "/solutions/core-banking" },
    { label: "Digital Banking N7", href: "/solutions/digital-banking" },
    { label: "Open Banking", href: "/solutions/open-banking" },
    { label: "Loan Origination System", href: "/solutions/loan-origination" },
    { label: "Loan Management System", href: "/solutions/loan-management" },
    { label: "Digital Transformation", href: "/solutions/transformation" },
  ],
  "N7 Banking": [
    { label: "About Us", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Contact", href: "/contact" },
    { label: "Company", href: "/company" },
    { label: "Careers", href: "/careers" },
    { label: "Insights", href: "/insights" },
    { label: "Core Team", href: "/core-team" },
    { label: "Brand Center", href: "/brand-center" },
  ],
  "Our Socials": [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
  ],
};

const offices = [
  {
    city: "London",
    lines: [
      "Linktia Infosystems Ltd – CB7,",
      "26 Main Road Sundridge,TN14 6EP,",
      "England, United Kingdom.",
    ],
  },
  {
    city: "Dubai",
    lines: [
      "Linktia Infosystems Ltd –",
      "CB7,Jumeirah Business, Center 5",
      "Cluster W, Jumeirah Lakes Towers,",
      "Dubai, United Arab Emirates",
    ],
  },
  {
    city: "London",
    lines: [
      "Linktia Infosystems Ltd –",
      "CB7,Nirmal, Anand Nagar,",
      "Suncity Road, Pune,",
      "Maharashtra, 411041, India",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050A10] pt-24 pb-12 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
          {/* Left Column: Giant Logo */}
          <div className="lg:w-1/3 flex items-start">
            <div
              className="text-[180px] lg:text-[260px] font-medium leading-[0.8] tracking-tighter"
              style={{
                background: "linear-gradient(135deg, #00E5FF 0%, #0052FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              N7
            </div>
          </div>

          {/* Right Column: Information Grids */}
          <div className="lg:w-2/3 flex flex-col gap-16">
            {/* Top Row: Office Addresses */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {offices.map((office, i) => (
                <div key={i}>
                  <h4 className="text-white text-[14px] font-medium mb-5 tracking-wide">
                    {office.city}
                  </h4>
                  <div className="space-y-1 pr-4">
                    {office.lines.map((line, j) => (
                      <p
                        key={j}
                        className="text-[13px] text-gray-400 leading-[1.6]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: Footer Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {Object.entries(footerLinks).map(([section, links]) => (
                <div key={section}>
                  <h4 className="text-white text-[14px] font-medium mb-5 tracking-wide">
                    {section}
                  </h4>
                  <ul className="space-y-3.5">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between w-full sm:max-w-[180px]"
                        >
                          <span className="text-[13px] text-gray-400 group-hover:text-white transition-colors">
                            {link.label}
                          </span>
                          <span className="text-[#00A3FF] text-[15px] leading-none transform transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Copyright Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-[11px] text-gray-500 leading-relaxed max-w-4xl">
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
            Commercial Brand] — [Registered under the Companies Act 2006 in
            England and Wales | Number of Incorporation 13100992]
          </p>
        </div>
      </div>
    </footer>
  );
}
