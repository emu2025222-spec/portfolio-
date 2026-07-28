import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-slate-900/70 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-extrabold">
          <span className="text-white">&lt;</span>

          <span className="text-cyan-400">
            REDEM
          </span>

          <span className="text-white">/&gt;</span>
        </h1>

        <ul className="hidden md:flex gap-10 font-medium">

          <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>

          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>

          <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>

          <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>

          <li><a href="#education" className="hover:text-cyan-400 transition">Education</a></li>

          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;