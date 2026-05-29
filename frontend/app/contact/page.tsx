"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    requestType: "demo",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  return (
    <div className="pt-16">
      <section className="relative py-28 overflow-hidden bg-n7-dark">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <span className="badge-cyan inline-block mb-4">Get In Touch</span>
              <h1
                className="text-4xl sm:text-5xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let&apos;s build the
                <br />
                <span className="text-gradient-cyan">future of banking</span>
              </h1>
              <p className="text-n7-text text-base leading-relaxed mb-12">
                Whether you want a product demo, have a question, or are ready to start your digital banking transformation, our team is here to help.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "📧", label: "Email", value: "hello@n7banking.com" },
                  { icon: "📞", label: "Phone", value: "+44 20 1234 5678" },
                  { icon: "🌍", label: "Offices", value: "London · Dubai · India" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: "rgba(0, 229, 255, 0.1)", border: "1px solid rgba(0, 229, 255, 0.2)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-n7-text font-mono">{item.label}</p>
                      <p className="text-sm font-semibold text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="card-dark rounded-2xl p-8">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-n7-text">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2
                    className="text-xl font-bold text-white mb-6"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Request a Demo
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-n7-text mb-1.5 font-mono">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full bg-n7-dark border border-n7-border rounded-lg px-4 py-3 text-sm text-white placeholder-n7-muted focus:outline-none focus:border-n7-cyan/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-n7-text mb-1.5 font-mono">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@bank.com"
                        className="w-full bg-n7-dark border border-n7-border rounded-lg px-4 py-3 text-sm text-white placeholder-n7-muted focus:outline-none focus:border-n7-cyan/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-n7-text mb-1.5 font-mono">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Bank Ltd."
                        className="w-full bg-n7-dark border border-n7-border rounded-lg px-4 py-3 text-sm text-white placeholder-n7-muted focus:outline-none focus:border-n7-cyan/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-n7-text mb-1.5 font-mono">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8901"
                        className="w-full bg-n7-dark border border-n7-border rounded-lg px-4 py-3 text-sm text-white placeholder-n7-muted focus:outline-none focus:border-n7-cyan/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-n7-text mb-1.5 font-mono">I&apos;m interested in</label>
                    <select
                      name="requestType"
                      value={form.requestType}
                      onChange={handleChange}
                      className="w-full bg-n7-dark border border-n7-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-n7-cyan/50 transition-colors"
                    >
                      <option value="demo">Product Demo</option>
                      <option value="core-banking">Core Banking CB7</option>
                      <option value="digital-banking">Digital Banking N7</option>
                      <option value="open-banking">Open Banking</option>
                      <option value="loan-origination">Loan Origination System</option>
                      <option value="loan-management">Loan Management System</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-n7-text mb-1.5 font-mono">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your project and what you're looking to achieve..."
                      className="w-full bg-n7-dark border border-n7-border rounded-lg px-4 py-3 text-sm text-white placeholder-n7-muted focus:outline-none focus:border-n7-cyan/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full btn-primary py-4 text-sm relative overflow-hidden"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
