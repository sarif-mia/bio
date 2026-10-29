import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import useActiveSection from './hooks/useActiveSection';
import useTheme from './hooks/useTheme';
import { navItems } from './data/portfolio';

const SECTION_IDS = ['hero', ...navItems.map((item) => item.id)];

function App() {
  const activeSection = useActiveSection(SECTION_IDS);
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
