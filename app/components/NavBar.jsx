"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "work"],
  ["Certifications", "certifications"],
];

export default function NavBar({ isDarkMode, setIsDarkMode }) {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <nav aria-label="Main navigation" className={`site-nav-shell${isScroll ? " is-scrolled" : ""}`}>
      <div className="site-nav">
        <a href="#top" className="site-nav-brand" aria-label="Jayasurya A, home">
          <span className="site-nav-brand-mark" aria-hidden="true">J</span>
          <span>Jayasurya <b>A</b></span>
        </a>

        <ul className="site-nav-links">
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="site-nav-actions">
          <button
            type="button"
            className="site-nav-icon-button"
            onClick={() => setIsDarkMode((previous) => !previous)}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="h-5 w-5" />
          </button>

          <a href="#contact" className="site-nav-contact">Let’s Connect</a>

          <button
            type="button"
            className="site-nav-menu-button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`site-nav-mobile-panel${isMenuOpen ? " is-open" : ""}`}
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
        >
          <ul>
            {links.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setIsMenuOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="site-nav-mobile-contact" onClick={() => setIsMenuOpen(false)}>
            Contact me
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
