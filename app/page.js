'use client'

import { useCallback, useEffect, useSyncExternalStore } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Credentials from "./components/Credentials";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Learning from "./components/Learning";
import DynamicIsland from "./components/DynamicIsland";
import Skills from "./components/Skills";
import Work from "./components/Work";

const themeChangeEvent = "portfolio-theme-change";

function subscribeToTheme(callback) {
  window.addEventListener(themeChangeEvent, callback);
  window.addEventListener("storage", callback);

  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
  colorScheme.addEventListener("change", callback);

  return () => {
    window.removeEventListener(themeChangeEvent, callback);
    window.removeEventListener("storage", callback);
    colorScheme.removeEventListener("change", callback);
  };
}

function getThemeSnapshot() {
  const savedTheme = window.localStorage.getItem("theme");
  return savedTheme === "dark" ||
    (savedTheme !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
}

function getServerThemeSnapshot() {
  return false;
}

export default function Home() {
  const isDarkMode = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const setIsDarkMode = useCallback((nextTheme) => {
    const nextIsDark = typeof nextTheme === "function"
      ? nextTheme(getThemeSnapshot())
      : nextTheme;

    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.dispatchEvent(new Event(themeChangeEvent));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <DynamicIsland isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Experience />
      <Skills />
      <Work isDarkMode={isDarkMode} />
      <Credentials />
      <Learning />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
