"use client";

const education = [
  {
    school: "Ramachandra College of Engineering, Eluru",
    degree: "B.Tech — Artificial Intelligence & Machine Learning",
    performance: "CGPA / Marks: 75.24%",
    years: "2023 – 2027",
  },
  {
    school: "Narayana Junior College, Vijayawada",
    degree: "Intermediate Education (AP State Board)",
    performance: "Marks: 77%",
    years: "2021 – 2023",
  },
  {
    school: "Sri Chaitanya English Medium School, Mylavaram",
    degree: "Secondary School Certificate (SSC)",
    performance: "GPA: 10.0 / 10.0 (100%)",
    years: "2020 – 2021",
  },
];

export default function About() {
  return (
    <section
      id="about"
      data-theme="light"
      className="py-24 px-6 md:px-12 bg-white text-gray-900 theme-transition border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="mb-16">
          <span className="font-mono text-xs text-[var(--color-accent)] font-semibold uppercase tracking-widest block mb-2">
            01 . Personal File
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography */}
          <div className="md:col-span-6 flex flex-col items-start pr-0 md:pr-6">
            <h3 className="font-display text-2xl font-bold mb-6 text-gray-900 leading-tight">
              Bridging Python, Data Science, and Modern Full-Stack Development
            </h3>
            <p className="font-body text-gray-600 leading-relaxed mb-6">
              Hello! I'm Dhanush Sudarshanam, a passionate B.Tech student majoring in
              Artificial Intelligence &amp; Machine Learning at Ramachandra College of Engineering. 
              My journey in coding revolves around solving complex data problems and building highly 
              interactive user-focused applications.
            </p>
            <p className="font-body text-gray-600 leading-relaxed mb-8">
              Having completed a 10-week Google-AICTE ML internship, I developed and evaluated predictive 
              models like Decision Trees and Logistic Regression using Python, scikit-learn, pandas, and NumPy. 
              Alongside my AI/ML interest, I enjoy engineering end-to-end web applications with clean, fast, and structured architectures.
            </p>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-widest border border-gray-900 bg-black text-white hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-white px-7 py-4 rounded-full transition-all duration-300"
            >
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Résumé
            </a>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="md:col-span-6 flex flex-col bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm">
            <h3 className="font-display text-xl font-bold mb-8 text-gray-900">
              Education Timeline
            </h3>

            <div className="relative border-l border-gray-200 pl-6 ml-1 space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Bullet */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white border border-gray-300 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] transition-all duration-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-transparent group-hover:bg-white"></span>
                  </span>

                  <span className="font-mono text-xs text-gray-400 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {edu.years}
                  </span>
                  <h4 className="font-display text-base font-bold text-gray-900 mt-1 mb-1">
                    {edu.school}
                  </h4>
                  <p className="font-body text-sm font-semibold text-gray-700">
                    {edu.degree}
                  </p>
                  <p className="font-mono text-xs text-gray-500 mt-1.5">
                    {edu.performance}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
