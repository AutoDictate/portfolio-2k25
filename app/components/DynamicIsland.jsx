"use client";

import { useEffect, useId, useRef, useState } from "react";

const sections = [
  ["Home", "top"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "work"],
  ["Certifications", "certifications"],
  ["Learning", "learning"],
  ["Contact", "contact"],
];

function SectionIcon({ id }) {
  const paths = {
    top: "M3 10.25 10 4l7 6.25M5.25 9v7h9.5V9M8 16v-4.25h4V16",
    about: "M10 10.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 17c.45-2.58 2.6-4.15 6-4.15s5.55 1.57 6 4.15",
    experience: "M4 7.5h12v9H4zM7 7.5V5h6v2.5M4 11h12M8 11v1.5h4V11",
    skills: "m4 5 2-2 2 2-2 2-2-2Zm6 0h6M4 10l2-2 2 2-2 2-2-2Zm6 0h6M4 15l2-2 2 2-2 2-2-2Zm6 0h6",
    work: "M4 4.5h12v12H4zM7 8h6M7 11h6M7 14h3",
    certifications: "M10 3.5l1.7 3.45 3.8.55-2.75 2.68.65 3.78L10 12.17l-3.4 1.79.65-3.78L4.5 7.5l3.8-.55L10 3.5ZM7 14.5v3l3-1.5 3 1.5v-3",
    learning: "M3.5 6.5c2.2-1.15 4.35-1.15 6.5 0v10c-2.15-1.15-4.3-1.15-6.5 0v-10Zm13 0c-2.2-1.15-4.35-1.15-6.5 0v10c2.15-1.15 4.3-1.15 6.5 0v-10Z",
    contact: "M3.5 5.5h13v9h-13zM4 6l6 5 6-5M7 17h6",
  };

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="dynamic-island-section-icon" fill="none">
      <path d={paths[id]} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AppearanceIcon({ isDarkMode }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="dynamic-island-appearance-icon" fill="none">
      {isDarkMode ? (
        <path d="M15.9 12.4A6.7 6.7 0 0 1 7.6 4.1a6.8 6.8 0 1 0 8.3 8.3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <><circle cx="10" cy="10" r="3.1" stroke="currentColor" strokeWidth="1.5" /><path d="M10 2.5v1.7M10 15.8v1.7M17.5 10h-1.7M4.2 10H2.5m12.8-5.3-1.2 1.2M5.9 14.1l-1.2 1.2m10.6 0-1.2-1.2M5.9 5.9 4.7 4.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>
      )}
    </svg>
  );
}

export default function DynamicIsland({ isDarkMode, setIsDarkMode }) {
  const [activeSection, setActiveSection] = useState("top");
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const panelId = useId();
  const activeLabel = sections.find(([, id]) => id === activeSection)?.[0] ?? "Home";

  useEffect(() => {
    let frame = 0;

    const findActiveSection = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        return sections[sections.length - 1][1];
      }

      const readingLine = window.innerHeight * 0.36;
      return [...sections].reverse().find(([, id]) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= readingLine;
      })?.[1] ?? "top";
    };

    const syncActiveSection = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const next = findActiveSection();
        setActiveSection((current) => current === next ? current : next);
      });
    };

    window.addEventListener("scroll", syncActiveSection, { passive: true });
    window.addEventListener("resize", syncActiveSection, { passive: true });
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      setActiveSection(findActiveSection());
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", syncActiveSection);
      window.removeEventListener("resize", syncActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    const closeOnOutsidePress = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePress);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className={`dynamic-island${isOpen ? " is-open" : ""}`}>
      <button
        ref={triggerRef}
        type="button"
        className="dynamic-island-pill"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close portfolio navigation" : `Open portfolio navigation. Current section: ${activeLabel}`}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="dynamic-island-indicator" aria-hidden="true">
          <span />
        </span>
        <span className="dynamic-island-current" aria-live="polite" aria-atomic="true">
          <span className="dynamic-island-caption">PORTFOLIO · NOW IN</span>
          <span key={activeSection} className="dynamic-island-label">
            <SectionIcon id={activeSection} />
            {activeLabel}
          </span>
        </span>
        <svg viewBox="0 0 20 20" aria-hidden="true" className="dynamic-island-chevron" fill="none">
          <path d="m5.5 7.5 4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        id={panelId}
        className="dynamic-island-panel"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <nav aria-label="Portfolio sections" className="dynamic-island-panel-surface">
          <div className="dynamic-island-panel-heading">
            <div>
              <span className="dynamic-island-panel-overline">QUICK NAVIGATION</span>
              <h2>Explore</h2>
            </div>
            <span className="dynamic-island-live-status"><span /> {activeLabel}</span>
          </div>

          <ul className="dynamic-island-links">
            {sections.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "is-active" : ""}
                  aria-current={activeSection === id ? "location" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  <SectionIcon id={id} />
                  <span>{label}</span>
                  {activeSection === id && <span className="dynamic-island-link-active" aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ul>

          <div className="dynamic-island-panel-footer">
            <button
              type="button"
              className="dynamic-island-theme"
              onClick={() => setIsDarkMode((previous) => !previous)}
              aria-label={isDarkMode ? "Switch to light appearance" : "Switch to dark appearance"}
              aria-pressed={isDarkMode}
            >
              <AppearanceIcon isDarkMode={isDarkMode} />
              <span>{isDarkMode ? "Dark appearance" : "Light appearance"}</span>
              <span className={`dynamic-island-switch${isDarkMode ? " is-on" : ""}`} aria-hidden="true"><span /></span>
            </button>
            <a href="#contact" className="dynamic-island-contact" onClick={() => setIsOpen(false)}>
              Say hello <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
