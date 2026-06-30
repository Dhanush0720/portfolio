"use client";

import { useState } from "react";

interface SkillAxis {
  label: string;
  val: number;
  desc: string;
  details: string[];
}

const radarAxes: SkillAxis[] = [
  {
    label: "Machine Learning",
    val: 90,
    desc: "Predictive modeling, data analytics, feature processing",
    details: ["scikit-learn", "pandas", "NumPy", "Decision Trees", "Logistic Regression"],
  },
  {
    label: "Frontend Dev",
    val: 75,
    desc: "Component architectures and modular interface designs",
    details: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML5/CSS3"],
  },
  {
    label: "Database Layer",
    val: 80,
    desc: "Relational database structures and document collections",
    details: ["SQL", "MongoDB", "Data Normalization", "Query Optimization"],
  },
  {
    label: "Core Langs",
    val: 70,
    desc: "Structured backend logic and object-oriented paradigms",
    details: ["Python", "Java", "C Programming"],
  },
  {
    label: "Web Core",
    val: 85,
    desc: "Semantic markup, stylesheet responsiveness, accessibility",
    details: ["HTML5", "CSS3", "DOM Manipulation", "CSS Grid/Flexbox"],
  },
  {
    label: "Git & Workflows",
    val: 85,
    desc: "Version tracking and collaborative build workflows",
    details: ["Git", "GitHub", "VS Code", "Shell Utilities", "Markdown"],
  },
];

const softSkills = ["Teamwork", "Communication", "Time Management", "Adaptability", "Problem Solving"];

export default function Skills() {
  const [hoveredAxis, setHoveredAxis] = useState<number | null>(null);

  // SVG Radar Constants
  const width = 300;
  const height = 300;
  const cx = width / 2;
  const cy = height / 2;
  const R = 100; // max radius for 100%
  const numAxes = radarAxes.length;

  // Helper: calculate coordinates for a given angle index and value percentage
  const getCoordinates = (index: number, valuePct: number) => {
    const angle = (index * 2 * Math.PI) / numAxes - Math.PI / 2; // Offset by -90deg so 1st points up
    const r = (R * valuePct) / 100;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  };

  // 1. Coordinates for the grid rings (25%, 50%, 75%, 100%)
  const gridRings = [25, 50, 75, 100].map((level) => {
    const points = [];
    for (let i = 0; i < numAxes; i++) {
      const { x, y } = getCoordinates(i, level);
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  });

  // 2. Coordinates for the active value polygon
  const activePolygonPoints = radarAxes
    .map((axis, idx) => {
      const { x, y } = getCoordinates(idx, axis.val);
      return `${x},${y}`;
    })
    .join(" ");

  // 3. Highlighted hover polygon coordinates
  const hoverPolygonPoints = radarAxes
    .map((axis, idx) => {
      const factor = hoveredAxis === idx ? 1.05 : 1; // slightly scale the hovered node
      const { x, y } = getCoordinates(idx, Math.min(100, axis.val * factor));
      return `${x},${y}`;
    })
    .join(" ");

  const activeIndex = hoveredAxis !== null ? hoveredAxis : 0;
  const activeAxis = radarAxes[activeIndex];

  return (
    <section
      id="skills"
      data-theme="light"
      className="py-24 px-6 md:px-12 bg-white text-gray-900 theme-transition border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="mb-16">
          <span className="font-mono text-xs text-[var(--color-accent)] font-semibold uppercase tracking-widest block mb-2">
            03 . Skills Inventory
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Technical Stack &amp; Metrics
          </h2>
        </div>

        {/* Dynamic Skill Section Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: SVG Radar Chart */}
          <div className="md:col-span-5 flex flex-col items-center justify-center bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm select-none relative group">
            <h3 className="font-display text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
              Interactive Skill Map
            </h3>
            <span className="font-mono text-[9px] text-gray-400 mb-6">
              (Hover vertices to inspect proficiency details)
            </span>

            <svg width={width} height={height} className="overflow-visible">
              {/* Grid concentric polygons */}
              {gridRings.map((points, levelIdx) => (
                <polygon
                  key={levelIdx}
                  points={points}
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
              ))}

              {/* Grid axis lines */}
              {radarAxes.map((_, idx) => {
                const { x, y } = getCoordinates(idx, 100);
                return (
                  <line
                    key={idx}
                    x1={cx}
                    y1={cy}
                    x2={x}
                    y2={y}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Grid ring labels (25%, 50%, 75%, 100%) */}
              {[50, 100].map((level) => {
                const { x, y } = getCoordinates(0, level);
                return (
                  <text
                    key={level}
                    x={x + 5}
                    y={y + 12}
                    fill="#9ca3af"
                    fontSize="8"
                    fontFamily="monospace"
                  >
                    {level}%
                  </text>
                );
              })}

              {/* Active data polygon */}
              <polygon
                points={hoveredAxis !== null ? hoverPolygonPoints : activePolygonPoints}
                fill="rgba(255, 42, 42, 0.12)"
                stroke="var(--color-accent)"
                strokeWidth="2"
                className="transition-all duration-305 ease-out"
              />

              {/* Interactive Nodes and Labels */}
              {radarAxes.map((axis, idx) => {
                const nodePos = getCoordinates(idx, axis.val);
                const labelPos = getCoordinates(idx, 116);
                const isHovered = hoveredAxis === idx;

                return (
                  <g
                    key={idx}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredAxis(idx)}
                    onMouseLeave={() => setHoveredAxis(null)}
                  >
                    {/* Node Dot */}
                    <circle
                      cx={nodePos.x}
                      cy={nodePos.y}
                      r={isHovered ? 6 : 4}
                      fill={isHovered ? "var(--color-accent)" : "#ffffff"}
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                      className="transition-all duration-200"
                    />

                    {/* Axis Labels */}
                    <text
                      x={labelPos.x}
                      y={labelPos.y}
                      fill={isHovered ? "var(--color-accent)" : "#374151"}
                      fontSize={isHovered ? "10" : "9"}
                      fontWeight={isHovered ? "bold" : "500"}
                      fontFamily="sans-serif"
                      textAnchor="middle"
                      alignmentBaseline="middle"
                      className="transition-all duration-200"
                    >
                      {axis.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right: Detailed Skill Inspector */}
          <div className="md:col-span-7 flex flex-col items-start justify-center h-full min-h-[340px]">
            <div className="w-full bg-gray-50 border border-gray-150 rounded-2xl p-8 hover:border-gray-250 hover:shadow-md transition-all duration-500 h-full flex flex-col justify-between">
              <div>
                {/* Header Metrics */}
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
                    Proficiency Metrics
                  </span>
                  <span className="font-mono text-2xl font-black text-gray-900">
                    {activeAxis.val}%
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-black text-gray-900 mb-2">
                  {activeAxis.label}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed mb-6">
                  {activeAxis.desc}
                </p>

                {/* Performance Progress Bar */}
                <div className="w-full bg-gray-200 h-1.5 rounded-full mb-8 overflow-hidden">
                  <div
                    className="bg-[var(--color-accent)] h-full transition-all duration-700 ease-out"
                    style={{ width: `${activeAxis.val}%` }}
                  ></div>
                </div>

                {/* Subheading */}
                <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-3">
                  Key Technologies &amp; Methods
                </span>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {activeAxis.details.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs bg-white border border-gray-200 text-gray-700 px-3.5 py-1.5 rounded-full hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover tips */}
              <div className="mt-8 font-mono text-[9px] text-gray-400 border-t border-gray-100 pt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-ping"></span>
                <span>Active node: {activeAxis.label}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="border border-gray-100 bg-gray-50/20 p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-gray-200 transition-all duration-300">
          <div className="max-w-md">
            <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
              Collaborative &amp; Professional Skills
            </h3>
            <p className="font-body text-sm text-gray-500">
              In addition to technical programming, I focus on interpersonal skills essential for agile engineering environments.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-md hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
