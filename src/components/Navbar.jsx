import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-2xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl opacity-30 group-hover:opacity-70 transition duration-500"></div>

            <img
              src={logo}
              alt="Logo"
              className="relative w-12 h-12 rounded-full border-2 border-cyan-400 object-cover group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
            />

          </div>

          <div>

            <h1 className="text-xl font-bold text-white leading-none">
              MD.
              <span className="text-cyan-400">
                Sajedul
              </span>
            </h1>

            <p className="text-xs text-gray-400 tracking-widest uppercase">
              Full Stack Developer
            </p>

          </div>
        </a>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">

          {links.map((item) => (

            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 font-medium transition duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>

          ))}

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white hover:text-cyan-400 transition"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/20">

          {links.map((item) => (

            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 transition"
            >
              {item}
            </a>

          ))}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;