"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-theme="dark"
      className="py-12 px-6 md:px-12 bg-black text-gray-500 border-t border-gray-950 font-mono text-xs theme-transition"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left Side: Creative/Production Statement */}
        <div className="flex flex-col gap-1 items-start text-left">
          <span className="text-gray-400 font-bold uppercase tracking-wider">
            AI Engineering &amp; Modern Web Architecture
          </span>
          <span className="text-gray-600">
            Python · scikit-learn · React · Next.js · TypeScript
          </span>
        </div>

        {/* Right Side: Copyright & Status */}
        <div className="flex flex-col md:items-end gap-1 text-left md:text-right">
          <span className="text-gray-450 font-semibold">
            Status: Worldwide Available · Open to Opportunities
          </span>
          <span className="text-gray-600">
            &copy; {currentYear} Dhanush Sudarshanam. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
