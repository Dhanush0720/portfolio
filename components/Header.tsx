"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  activeTheme: "dark" | "light";
  activeSection: string;
}

export default function Header({ activeTheme, activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Expertise", id: "expertise" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const isDark = activeTheme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? "bg-black/85 border-b border-white/10 backdrop-blur-md py-4"
            : "bg-white/90 border-b border-gray-200 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo — "Dhanush." with red dot like "Sushmita." */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className={`text-xl font-black tracking-tight transition-colors duration-500 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Dhanush
          <span className="text-[#ff2a2a]">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === link.id
                  ? isDark ? "text-white font-semibold" : "text-gray-900 font-semibold"
                  : isDark
                  ? "text-white/70 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Empty spacer to keep nav centered */}
        <div className="hidden md:block w-24" />
      </div>
    </header>
  );
}
