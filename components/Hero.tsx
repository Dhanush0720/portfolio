"use client";

import { useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      data-theme="dark"
      className="min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 bg-black text-white relative overflow-hidden theme-transition"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-accent)]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <div className="md:col-span-7 flex flex-col items-start text-left animate-fade-in-up">
          <span className="font-mono text-sm text-[var(--color-accent)] font-semibold uppercase tracking-widest mb-4">
            Available for Internships
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Hi, I'm <span className="text-[var(--color-accent)]">Dhanush.</span>
            <br />
            AI/ML &amp; Full-Stack
            <br />
            Developer
          </h1>
          <p className="font-body text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            I'm a B.Tech AI &amp; ML student building high-performance,
            data-driven digital experiences. Shipped predictive models and modern
            web apps using Python, ML frameworks, and full-stack technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="font-body text-sm font-semibold uppercase tracking-wider bg-[var(--color-accent)] text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-[var(--color-accent)]/20"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-body text-sm font-semibold uppercase tracking-wider border border-gray-700 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right: Video Reel Player */}
        <div className="md:col-span-5 flex justify-center items-center w-full animate-fade-in-up [animation-delay:200ms]">
          <div className="relative w-full aspect-[4/5] md:aspect-[3/4] max-w-md rounded-2xl overflow-hidden border border-gray-800 bg-gray-950 group shadow-2xl shadow-black/80">
            <video
              ref={videoRef}
              src="/herovideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>

            {/* Mute/Unmute Action Floating Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-black/75 hover:bg-[var(--color-accent)] text-white px-4 py-2.5 rounded-full border border-gray-800 text-xs font-mono font-medium tracking-wider transition-all duration-300 backdrop-blur-sm active:scale-95"
            >
              {isMuted ? (
                <>
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
                      d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      clipRule="evenodd"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                    />
                  </svg>
                  Unmute Reel
                </>
              ) : (
                <>
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
                      d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75V5.25L7.75 9.5H4.5v5h3.25L12 18.75z"
                    />
                  </svg>
                  Mute Reel
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
