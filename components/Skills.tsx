"use client";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Next.js"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Python", "Java", "REST APIs", "JWT Auth", "MySQL", "MongoDB"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "scikit-learn", "Generative AI", "LLMs", "pandas", "NumPy", "Prompt Engineering", "TensorFlow"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "GitHub", "Docker", "Postman", "Linux", "CI/CD", "VS Code", "Figma"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      data-theme="light"
      className="bg-[#f5f5f5] text-gray-900 theme-transition border-b border-gray-200"
      style={{
        backgroundImage: `
          linear-gradient(to right, #80808014 1px, transparent 1px),
          linear-gradient(to bottom, #80808014 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-bold text-gray-500 mb-5 bg-white shadow-sm uppercase tracking-widest">
            Technical Stack
          </div>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Technologies I Work With
          </h2>
          <p className="text-gray-500 text-base font-medium max-w-lg" style={{ fontFamily: "Inter, sans-serif" }}>
            Full-stack expertise across modern development, AI, and cloud infrastructure.
          </p>
        </div>

        {/* 2x2 grid of skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3
                className="text-base font-black text-gray-900 mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 bg-gray-50 hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-colors duration-200 cursor-default"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
