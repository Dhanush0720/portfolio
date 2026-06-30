"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agree: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        agree: false,
      });
    }, 1500);
  };

  return (
    <section
      id="contact"
      data-theme="dark"
      className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden theme-transition border-t border-gray-900"
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* Left Column: Info & Details */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <span className="font-mono text-xs text-[var(--color-accent)] font-semibold uppercase tracking-widest block mb-2">
              06 . Connect
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Let's Build Something
            </h2>
            <p className="font-body text-gray-400 leading-relaxed mb-12 max-w-sm">
              I am open to software engineering, full-stack, and machine learning internships. 
              Drop me a line or send a direct email.
            </p>

            {/* Direct Details */}
            <div className="space-y-6 mb-12">
              <div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-1">
                  Email Me
                </span>
                <a
                  href="mailto:sudarshanamdhanush@gmail.com"
                  className="font-display text-lg font-bold hover:text-[var(--color-accent)] transition-colors duration-300"
                >
                  sudarshanamdhanush@gmail.com
                </a>
              </div>
              <div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-1">
                  Call Me
                </span>
                <a
                  href="tel:+918639420870"
                  className="font-display text-lg font-bold hover:text-[var(--color-accent)] transition-colors duration-300"
                >
                  +91 8639420870
                </a>
              </div>
              <div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-1">
                  Location
                </span>
                <span className="font-display text-lg font-bold text-white">
                  Andhra Pradesh, India
                </span>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/sudarshanamdhanush"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/dhanush0720"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            {status === "success" ? (
              <div className="text-center py-12">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-400 mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="font-display text-2xl font-bold mb-2">Message Dispatched</h3>
                <p className="font-body text-gray-400 text-sm">
                  Thanks for reaching out! I will review your message and reply as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-2">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-2">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-2">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-all duration-300 resize-none"
                  />
                </div>

                {/* Agree Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    required
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1 cursor-pointer accent-[var(--color-accent)]"
                  />
                  <label htmlFor="agree" className="font-body text-xs text-gray-400 cursor-pointer select-none leading-relaxed">
                    I consent to having this website store my submitted info so Dhanush can respond to my inquiry.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full font-body text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-[var(--color-accent)] hover:text-white py-4 rounded-lg transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  {status === "sending" ? "Transmitting..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
