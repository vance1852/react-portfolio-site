import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <ThemeToggle
        darkMode={darkMode}
        onToggle={() => setDarkMode(!darkMode)}
      />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
