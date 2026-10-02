'use client'

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Credentials from "./components/Credentials";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Learning from "./components/Learning";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  },[]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  return (
    <>
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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
