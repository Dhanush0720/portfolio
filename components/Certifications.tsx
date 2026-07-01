"use client";

import { useRef, useState, useEffect } from "react";

interface Certification {
  name: string;
  org: string;
  year: string;
  cat: string;
  pdfPath?: string;
}

const certificationsList: Certification[] = [
  {
    name: "ServiceNow Certified System Administrator (CSA)",
    org: "ServiceNow",
    year: "2025",
    cat: "Cloud • ITSM",
    pdfPath: "/certificates/ServiceNow Certified System Administrator (CSA).pdf",
  },
  {
    name: "Google & AICTE ML Virtual Internship",
    org: "Google for Developers",
    year: "Dec 2025",
    cat: "AI • ML",
    pdfPath: "/certificates/Dhanush Sudarshanam google AIML virtual internship (1).pdf",
  },
  {
    name: "Oracle Certified Foundations Associate",
    org: "Oracle University",
    year: "Jul 2025",
    cat: "Java • DB",
    pdfPath: "/certificates/oracle certificate.pdf",
  },
  {
    name: "Python Essentials 1",
    org: "Cisco Networking Academy",
    year: "2025",
    cat: "Python",
    pdfPath: "/certificates/Python_Essentials_1_certificate_sudarshanamdhanush-gmail-com_4191b94f-0c5c-41b6-826b-75e0b37062d3.pdf",
  },
  {
    name: "Python Essentials 2",
    org: "Cisco Networking Academy",
    year: "2025",
    cat: "Python",
    pdfPath: "/certificates/Python_Essentials_2_certificate_sudarshanamdhanush-gmail-com_2b9a32c7-18b4-4a54-93f7-808051a558e6.pdf",
  },
  {
    name: "Generative AI (GenAI) for Everyone",
    org: "Coursera",
    year: "Dec 2025",
    cat: "AI • GenAI",
    pdfPath: "/certificates/GenAI for Everyone.pdf",
  },


  {
    name: "Artificial Intelligence Fundamentals",
    org: "IBM",
    year: "2025",
    cat: "AI • ML",
    pdfPath: "/certificates/ibm.pdf",
  },
  {
    name: "5-Day Generative AI Agents Intensive",
    org: "Kaggle & Google",
    year: "2025",
    cat: "AI • GenAI",
    pdfPath: "/certificates/5-Day AI Agents Intensive Course with Google (1).png",
  },
  {
    name: "Fundamentals of AI and Machine Learning",
    org: "Infosys Springboard",
    year: "Jun 2025",
    cat: "AI • ML",
    pdfPath: "/certificates/Fundamentals of AI & ML_ Introduction to Artificial Intelligence (1).pdf",
  },
  {
    name: "AI for Beginners",
    org: "HP LIFE",
    year: "Jun 2025",
    cat: "AI • ML",
    pdfPath: "/certificates/HP AI for Beginners.pdf",
  },
  {
    name: "C Programming Basics",
    org: "Simplilearn",
    year: "2025",
    cat: "Core CS",
    pdfPath: "/certificates/C Programming Basics Kick start your programming career.pdf",
  },
];

// Triple the list for seamless infinite loop
const infiniteList = [
  ...certificationsList,
  ...certificationsList,
  ...certificationsList,
];

export default function Certifications() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hovering = useRef(false);
  const [inView, setInView] = useState(false);
  const offsetRef = useRef(0);

  // Detect when section enters viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(section);
    return () => obs.unobserve(section);
  }, []);

  // RAF autoscroll — writes directly to DOM, no React state, no Framer Motion
  useEffect(() => {
    let raf: number;
    let last = performance.now();

    const loop = (now: number) => {
      const delta = now - last;
      if (delta >= 16) {
        const track = trackRef.current;
        if (track && inView && !hovering.current) {
          // One set = 1/3 of total (we tripled the list)
          const oneSetWidth = track.scrollWidth / 3;
          offsetRef.current -= 0.75;
          if (Math.abs(offsetRef.current) >= oneSetWidth) {
            offsetRef.current += oneSetWidth;
          }
          track.style.transform = `translateX(${offsetRef.current}px)`;
        }
        last = now;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  // Arrow navigation with smooth cubic ease
  const navigate = (dir: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const STEP = 314; // card 290px + gap 24px
    const oneSetWidth = track.scrollWidth / 3;
    let target = offsetRef.current + (dir === "prev" ? STEP : -STEP);

    if (target > 0) target -= oneSetWidth;
    if (Math.abs(target) >= oneSetWidth) target += oneSetWidth;

    const from = offsetRef.current;
    const start = performance.now();
    const dur = 480;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const run = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      offsetRef.current = from + (target - from) * ease(p);
      track.style.transform = `translateX(${offsetRef.current}px)`;
      if (p < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  };

  return (
    <section
      ref={sectionRef}
      id="certifications"
      data-theme="light"
      className="py-24 bg-white text-gray-900 theme-transition border-b border-gray-100 overflow-hidden relative bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-14 flex justify-between items-end relative w-full z-20 flex-shrink-0">
          <div className="relative max-w-xl">
            <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-bold text-gray-600 mb-4 shadow-sm bg-white">
              System Badges
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-gray-900 tracking-tight relative inline-block">
              Professional Credentials
              <svg
                className="absolute -bottom-2 left-0 w-36 h-2 text-[#ff2a2a]/40"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,10 100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </h2>
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-3 mb-1">
            <button
              onClick={() => navigate("prev")}
              className="p-4 rounded-full border border-gray-300 text-gray-800 bg-white hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white hover:scale-105 active:scale-95 shadow-sm transition-all duration-300 flex items-center justify-center"
              aria-label="Scroll Left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => navigate("next")}
              className="p-4 rounded-full border border-gray-300 text-gray-800 bg-white hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white hover:scale-105 active:scale-95 shadow-sm transition-all duration-300 flex items-center justify-center"
              aria-label="Scroll Right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling track */}
      <div
        className="relative w-full py-8 overflow-visible cursor-grab active:cursor-grabbing"
        onMouseEnter={() => { hovering.current = true; }}
        onMouseLeave={() => { hovering.current = false; }}
      >
        <div
          ref={trackRef}
          className="flex gap-6 w-max pl-8 select-none"
          style={{ willChange: "transform" }}
        >
          {infiniteList.map((cert, idx) => {
            const displayIndex = (idx % certificationsList.length) + 1;
            const num = displayIndex < 10 ? `0${displayIndex}` : `${displayIndex}`;

            return (
              /*
               * EXACT same structure as reference site:
               * - outer: group + [perspective:1000px]
               * - inner: [transform-style:preserve-3d] + group-hover:[transform:rotateY(180deg)]
               * - front: [backface-visibility:hidden]
               * - back:  [backface-visibility:hidden] + [transform:rotateY(180deg)]
               * Using Tailwind arbitrary values so no external CSS is needed.
               */
              <div
                key={idx}
                className="group w-[265px] sm:w-[290px] h-[220px] flex-shrink-0 [perspective:1000px]"
              >
                <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* ── Front ── */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white border border-gray-200 rounded-[2rem] p-1.5 flex flex-col items-center hover:border-red-400 hover:shadow-[0_20px_45px_rgba(255,42,42,0.1)] transition-all duration-500">
                    {/* Pin dot */}
                    <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] absolute top-3 border border-gray-300 z-10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full opacity-10" />
                    </div>

                    <div className="w-full h-full rounded-[1.4rem] mt-6 p-5 flex flex-col justify-between bg-[#f4f4f4] group-hover:bg-red-50/20 transition-colors duration-700">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#ff2a2a]/90">
                            {cert.cat}
                          </span>
                          <span className="text-xs font-bold font-serif italic text-gray-400">
                            {num}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-black text-gray-900 tracking-tight mb-1 group-hover:text-[#ff2a2a] transition-colors duration-300 leading-snug line-clamp-2">
                          {cert.name}
                        </h3>
                      </div>
                      <div className="border-t border-gray-200/50 pt-3 mt-3">
                        <p className="text-gray-400 text-[9px] font-bold tracking-tight uppercase">
                          Issued System Node
                        </p>
                        <p className="text-gray-700 text-xs font-semibold truncate">
                          {cert.org}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ── Back ── */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-[2rem] p-5 flex flex-col justify-between shadow-[0_20px_45px_rgba(0,0,0,0.3)]">
                    <div className="flex justify-between items-start">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                        <svg className="w-4 h-4 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <span className="text-[10px] tracking-widest font-mono text-gray-500 font-bold uppercase">
                        Secured Node
                      </span>
                    </div>

                    <div className="my-auto text-center px-2">
                      <p className="text-[10px] text-gray-400 font-mono mb-1 uppercase tracking-wider">
                        Verification Object
                      </p>
                      <h4 className="text-xs text-white font-medium line-clamp-2 mb-4">
                        {cert.name}
                      </h4>
                      {cert.pdfPath ? (
                        <a
                          href={cert.pdfPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#ff2a2a] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-red-600 transition-colors duration-300 shadow-md shadow-red-900/30 select-none"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>View PDF Certificate</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 bg-white/10 text-gray-300 px-4 py-2 rounded-xl text-xs font-bold border border-white/10 select-none">
                          Credential Active
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono text-gray-600 uppercase tracking-wider">
                        {cert.cat}
                      </span>
                      <span className="text-[9px] font-mono text-gray-600 uppercase tracking-wider">
                        {cert.year}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
