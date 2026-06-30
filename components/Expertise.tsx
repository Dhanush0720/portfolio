"use client";

const expertiseList = [
  {
    num: "01",
    title: "Frontend Development",
    focus: "Interactive, fluid, and responsive user interfaces",
    desc: "Building clean, accessible, and fast client-side applications that render optimally across all viewport sizes. Prioritizing layout flow, semantic HTML, and fluid user interactions.",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    num: "02",
    title: "Backend Development",
    focus: "Structured databases and secure API design",
    desc: "Writing modular server-side routines, relational schemas, and document collections. Structuring data access layers to load resources and execute server operations safely.",
    tech: ["Python", "SQL", "MongoDB", "C", "Java", "Node.js"],
  },
  {
    num: "03",
    title: "AI & Machine Learning",
    focus: "Algorithmic modeling and predictive data science",
    desc: "Pre-processing feature datasets, training classifiers or regressors, and evaluating performance. Practical experience gained during virtual internships programming predictive modules.",
    tech: ["scikit-learn", "pandas", "NumPy", "Decision Trees", "Logistic Regression"],
  },
  {
    num: "04",
    title: "Tools & Workflows",
    focus: "Modern developer environment and pipeline safety",
    desc: "Managing codebase history, merging features, and deploying builds. Keeping projects organized with standard version control systems and collaborative coding practices.",
    tech: ["Git", "GitHub", "VS Code", "Command Line", "Markdown"],
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      data-theme="light"
      className="py-24 px-6 md:px-12 bg-white text-gray-900 theme-transition border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left Column: Sticky Title */}
          <div className="md:col-span-5 md:sticky md:top-32 h-fit flex flex-col items-start text-left mb-10 md:mb-0">
            <span className="font-mono text-xs text-[var(--color-accent)] font-semibold uppercase tracking-widest block mb-2">
              02 . Capabilities
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              My Expertise
            </h2>
            <p className="font-body text-gray-500 text-lg leading-relaxed max-w-sm">
              Building modern digital solutions with code &amp; AI, bridging mathematical model logic and user-facing features.
            </p>
          </div>

          {/* Right Column: Scrollable Cards */}
          <div className="md:col-span-7 flex flex-col gap-8">
            {expertiseList.map((exp, idx) => (
              <div
                key={idx}
                className="group flex flex-col border border-gray-100 bg-gray-50/50 hover:bg-gray-50 hover:border-gray-200 rounded-2xl p-8 transition-all duration-300 shadow-sm"
              >
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                  <span className="font-mono text-xl font-bold text-gray-300 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {exp.num}
                  </span>
                  <span className="font-mono text-[10px] text-gray-400 font-semibold uppercase tracking-wider bg-white border border-gray-150 px-3 py-1 rounded-full">
                    {exp.focus}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
                  {exp.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] bg-white border border-gray-200 rounded-md px-2.5 py-1 text-gray-600 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
