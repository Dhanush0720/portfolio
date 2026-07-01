"use client";

export default function About() {
  return (
    <section
      id="about"
      data-theme="dark"
      className="relative bg-[#cc1a1a] text-white overflow-hidden theme-transition"
    >
      {/* Sparkle decorations */}
      <div className="absolute top-12 right-20 text-[#8B0000] text-4xl pointer-events-none select-none">✦</div>
      <div className="absolute bottom-32 left-10 text-[#8B0000] text-3xl pointer-events-none select-none">✦</div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Photo in tablet frame */}
        <div className="flex justify-center items-center">
          <div
            className="relative"
            style={{
              transform: "rotate(-3deg)",
              filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.4))",
            }}
          >
            {/* Tablet/iPad frame */}
            <div className="relative bg-gray-900 rounded-[2.5rem] p-3 border-4 border-gray-800 shadow-2xl w-[280px] sm:w-[320px]">
              {/* Top bar with camera */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-800 rounded-b-xl z-10" />
              {/* Screen */}
              <div className="rounded-[2rem] overflow-hidden aspect-[3/4] bg-[#cc1a1a]">
                <img
                  src="/image.png"
                  alt="Dhanush Sudarshanam"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Home button */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-gray-700 bg-gray-800" />
            </div>
            {/* Cable hanging from top */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-1 h-16 bg-gray-800 rounded-full" />
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-8 h-3 bg-gray-800 rounded-sm -ml-3.5" />
          </div>
        </div>

        {/* Right: Text + Tech logos */}
        <div className="flex flex-col justify-center">
          <h2
            className="text-5xl md:text-6xl font-black mb-6 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hello!
          </h2>
          <p
            className="text-white text-base md:text-lg font-semibold leading-relaxed mb-8 max-w-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Hi, my name is{" "}
            <span className="font-black underline underline-offset-2">
              DHANUSH SUDARSHANAM
            </span>
            , a passionate AI/ML & full-stack developer based in Andhra Pradesh,
            dedicated to crafting clean, functional, and highly scalable web
            applications.
          </p>

          {/* Tech stack logos — using SVG text icons */}
          <div className="flex items-center gap-8 mt-2">
            {/* Python */}
            <div className="flex flex-col items-center gap-1">
              <svg viewBox="0 0 48 48" className="w-12 h-12">
                <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,24.303,5,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.677,18.226,9,19.063,9z" />
                <path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C20.719,42.641,23.822,43,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.323,28.899,39,28.063,39z" />
              </svg>
              <span className="text-white/70 text-[10px] font-mono uppercase">Python</span>
            </div>

            {/* React */}
            <div className="flex flex-col items-center gap-1">
              <svg viewBox="0 0 48 48" className="w-12 h-12">
                <path fill="#80DEEA" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z" />
                <path fill="#80DEEA" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C9.6,42.1,8.9,36.3,10.3,29c0.4-2.1,1-4.3,1.7-6.4c-2-0.7-3.9-1.5-5.5-2.5C3.9,18.2,2.5,15.9,3.1,14.1c0.6-1.9,3.1-2.9,6.4-2.9c1.3,0,2.7,0.1,4.1,0.4c0.5-1.4,1.1-2.7,1.7-3.9c1.8-3.5,4.4-5.7,6.9-5.7c2.5,0,5,2.2,6.9,5.7c0.6,1.2,1.2,2.6,1.7,4c1.3-0.3,2.7-0.4,3.9-0.4c3.3,0,5.8,1,6.4,2.9c0.6,1.9-0.7,4.3-3.5,6.1c-1.6,1-3.4,1.8-5.4,2.5c0.7,2.1,1.3,4.3,1.7,6.4c1.4,7.3,0.7,13.1-1.9,14.8c-2.5,1.6-6.9-0.1-10.8-4.3C16.8,42.3,16,43.5,15.1,44.6z" />
                <path fill="#29B6F6" d="M24 14c-12.9 0-23 4.4-23 10s10.1 10 23 10 23-4.4 23-10S36.9 14 24 14z" />
                <circle cx="24" cy="24" r="4" fill="#006064" />
              </svg>
              <span className="text-white/70 text-[10px] font-mono uppercase">React</span>
            </div>

            {/* Node.js */}
            <div className="flex flex-col items-center gap-1">
              <svg viewBox="0 0 48 48" className="w-12 h-12">
                <path fill="#388e3c" d="M23.996 3L6 13.983v20.035L23.996 45 42 34.018V13.983z" />
                <path fill="#fff" d="M23.984 7.387L10.367 15.33v15.892l2.499 1.452V17.207l11.118-6.38 11.226 6.38v15.467l2.5-1.452V15.33z" />
                <path fill="#fff" d="M23.984 25.752l-5.521-3.165v8.24l5.521 3.165 5.521-3.165v-8.24z" />
              </svg>
              <span className="text-white/70 text-[10px] font-mono uppercase">Node.js</span>
            </div>

            {/* MongoDB */}
            <div className="flex flex-col items-center gap-1">
              <svg viewBox="0 0 48 48" className="w-12 h-12">
                <path fill="#5d4037" d="M24 3C13 3 4 12 4 23c0 9.3 6.3 17.2 15 19.4V43l1.5 2 1.5-2v-0.6C31.7 40.2 38 32.3 38 23 38 12 29 3 24 3z" />
                <path fill="#4caf50" d="M24 5c-9.9 0-18 8.1-18 18 0 8.5 5.9 15.6 13.8 17.5V43l1.6 2.5L23 43V40.5C30.9 38.6 42 31.5 42 23 42 13.1 33.9 5 24 5z" />
                <path fill="#f9a825" d="M24 5v38.5l1.4 2.5 1.4-2.5V5H24z" />
              </svg>
              <span className="text-white/70 text-[10px] font-mono uppercase">MongoDB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="relative w-full overflow-hidden" style={{ height: "80px" }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full"
          style={{ height: "80px" }}
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#f5f5f5"
          />
        </svg>
      </div>
    </section>
  );
}
