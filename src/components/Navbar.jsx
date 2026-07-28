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
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <a href="#home" className="flex items-center gap-3">

          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400 shadow-lg shadow-cyan-500/40 hover:rotate-12 hover:scale-110 duration-300"
          />

          <div>
            <h1 className="text-xl font-bold text-white">
              MD. <span className="text-cyan-400">Sajedul</span>
            </h1>

            <p className="text-xs text-gray-400">
              Software Developer
            </p>
          </div>

        </a>

        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-400 duration-300 font-medium"
            >
              {item}
            </a>
          ))}

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 hover:bg-slate-800 hover:text-cyan-400"
            >
              {item}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
}

export default Navbar;