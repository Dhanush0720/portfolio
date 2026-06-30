"use client";

interface Project {
  title: string;
  category: string;
  desc: string;
  tech: string[];
  link: string;
  date: string;
}

const featuredProjects: Project[] = [
  {
    title: "Expense Tracker & EMI Calculator",
    category: "Full-Stack Web App • Finance",
    desc: "An AI-powered web application to track, manage, and categorize user finances across 10 distinct categories. Integrates interactive graphs and a dynamic EMI planner to support personal financial analysis.",
    tech: ["Python", "HTML5", "CSS3", "JavaScript", "GitHub"],
    link: "https://github.com/dhanush0720",
    date: "Mar 2025",
  },
  {
    title: "Predictive Analytics Model Evaluator",
    category: "Data Science • Machine Learning",
    desc: "A comparative evaluation framework testing multiple ML classifiers (Decision Trees, Logistic Regression) on real-world datasets. Automatically scales features, handles nulls, and plots comparative precision curves.",
    tech: ["Python", "scikit-learn", "pandas", "NumPy", "Jupyter"],
    link: "https://github.com/dhanush0720",
    date: "Dec 2025",
  },
];

const secondaryProjects = [
  {
    title: "Relational SQL Inventory System",
    desc: "Database layer and query pipeline to organize inventory items, manage transactions, and query logs across multiple branches.",
    tech: ["SQL", "Python", "Database Design"],
    link: "https://github.com/dhanush0720",
  },
  {
    title: "Algorithmic Decision Classifier",
    desc: "Custom scratch implementation of Decision Tree boundaries to test information gain and entropy splits against scikit-learn standard libraries.",
    tech: ["Python", "NumPy", "Algorithms"],
    link: "https://github.com/dhanush0720",
  },
  {
    title: "Terminal Developer Portfolio v1",
    desc: "An interactive, terminal-inspired responsive developer portfolio interface built using Next.js, customized CSS grid units, and responsive hydration components.",
    tech: ["Next.js", "React", "CSS Grid"],
    link: "https://github.com/dhanush0720",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      data-theme="light"
      className="py-24 px-6 md:px-12 bg-white text-gray-900 theme-transition border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="mb-16">
          <span className="font-mono text-xs text-[var(--color-accent)] font-semibold uppercase tracking-widest block mb-2">
            04 . Selected Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col border border-gray-100 bg-gray-50/50 hover:bg-gray-50 hover:border-gray-200 rounded-2xl p-8 transition-all duration-300 shadow-sm"
            >
              {/* Category & Date */}
              <div className="flex items-center justify-between mb-4 text-xs font-mono text-gray-400 font-semibold">
                <span>{project.category}</span>
                <span>{project.date}</span>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {project.desc}
              </p>

              {/* Tags and Source Link */}
              <div className="flex flex-col gap-6 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] bg-white border border-gray-200 rounded px-2.5 py-1 text-gray-600 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-gray-800 hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  Source Code
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary: System Logs / Other Repos */}
        <div className="border-t border-gray-150 pt-16">
          <h3 className="font-display text-xl font-bold text-gray-900 mb-8">
            System Logs &amp; Other Repositories
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project, idx) => (
              <div
                key={idx}
                className="border border-gray-100 bg-gray-50/20 hover:bg-gray-50 p-6 rounded-xl flex flex-col justify-between hover:border-gray-200 hover:shadow-sm transition-all duration-300"
              >
                <div>
                  <h4 className="font-display text-base font-bold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="font-body text-gray-500 text-xs leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] bg-white border border-gray-150 rounded px-2 py-0.5 text-gray-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[10px] font-semibold text-gray-700 hover:text-[var(--color-accent)]"
                  >
                    View →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
