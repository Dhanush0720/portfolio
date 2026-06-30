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
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const isDarkTheme = activeTheme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? isDarkTheme
            ? "bg-black/80 border-b border-gray-900 backdrop-blur-md py-4"
            : "bg-white/80 border-b border-gray-100 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className={`font-display text-2xl font-bold tracking-tight transition-colors duration-500 ${
            isDarkTheme ? "text-white" : "text-gray-900"
          }`}
        >
          Dhanush<span className="text-[var(--color-accent)]">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`font-body text-sm font-medium transition-colors duration-300 relative py-1 ${
                activeSection === link.id
                  ? "text-[var(--color-accent)]"
                  : isDarkTheme
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-650 hover:text-gray-900"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-accent)] animate-[pulse_1.5s_infinite]"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Empty placeholder to balance layout since logo is on the left */}
        <div className="hidden md:block w-24"></div>
      </div>
    </header>
  );
}
