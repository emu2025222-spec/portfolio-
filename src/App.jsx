import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ParticlesBackground from "./components/ParticlesBackground";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Animated Background */}
      <ParticlesBackground />

      {/* Scroll Progress */}
      <ScrollProgress />

      <div className="relative z-10">
        {/* Navigation */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* Stats */}
        <Stats />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Projects />

        {/* Education */}
        <Education />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />

        {/* Back To Top */}
        <BackToTop />
      </div>
    </div>
  );
}

export default App;