"use client";

const projects = [
  {
    cat: "Web Application",
    title: "Devi Hardware and Plywoods",
    desc: "A full-stack personal finance application that leverages machine learning to automatically categorize expenses and provide predictive budgeting insights.",
    tech: ["React", "Node.js", "Python", "MongoDB"],
    link: "https://devi-hardware-and-plywoods.vercel.app",
    featured: false,
  },
  {
    cat: "Performance • Finance",
    title: "College Inventory System",
    desc: "High-performance inventory management platform with real-time stock tracking, mess menu management, and role-based access control for institutions.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    link: "https://invertory-system-zeta.vercel.app",
    featured: true,
  },
  {
    cat: "new • beginning • html • css",
    title: "Codenow assignment",
    desc: "First practical assignment by codenow.",
    tech: ["html", "css", "js"],
    link: "https://codenow-assignment-ashen.vercel.app",
    featured: false,
  },

];

export default function Projects() {
  return (
    <section
      id="projects"
      data-theme="light"
      className="bg-[#f5f5f5] text-gray-900 theme-transition"
      style={{
        backgroundImage: `
          linear-gradient(to right, #80808010 1px, transparent 1px),
          linear-gradient(to bottom, #80808010 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Header */}
        <div className="mb-12">
          <h2
            className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mb-4 relative inline-block"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Projects That Define
            <br />
            My Journey
            {/* Red underline */}
            <span className="absolute -bottom-3 left-0 w-64 h-1 bg-[#ff2a2a] rounded-full block" />
          </h2>
          <p className="text-gray-500 text-base font-medium max-w-lg mt-6" style={{ fontFamily: "Inter, sans-serif" }}>
            A curated portfolio of production-grade platforms, full-stack
            microservices, and AI models built for scale and speed.
          </p>
        </div>

        {/* 3-column project card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className={`relative bg-white rounded-[2rem] p-6 flex flex-col gap-4 shadow-sm transition-all duration-300 hover:shadow-lg ${proj.featured
                  ? "border-2 border-[#ff2a2a] shadow-[0_8px_32px_rgba(255,42,42,0.1)]"
                  : "border border-gray-200"
                }`}
            >
              {/* Pin dot at top */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-300 border border-gray-200 shadow-inner" />

              <div className="mt-4">
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-widest mb-2 block ${proj.featured ? "text-[#ff2a2a]" : "text-[#ff2a2a]/80"
                    }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {proj.cat}
                </span>
                <h3
                  className={`text-lg font-black mb-3 leading-tight ${proj.featured ? "text-[#ff2a2a]" : "text-gray-900"
                    }`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {proj.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {proj.desc}
                </p>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full border border-gray-200 text-xs font-semibold text-gray-600 bg-gray-50"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Source Code link */}
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm font-bold text-gray-900 hover:text-[#ff2a2a] transition-colors duration-200 mt-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                View Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
