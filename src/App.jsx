import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <ParticlesBackground />

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <Hero />

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

        <Footer />
        <ScrollProgress />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;