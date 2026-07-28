import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}

          <div>

            <div className="flex items-center gap-4">

              <img
                src={logo}
                alt="Logo"
                className="w-16 h-16 rounded-full border-2 border-cyan-400 shadow-lg shadow-cyan-500/40"
              />

              <div>

                <h2 className="text-2xl font-bold text-white">
                  MD.
                  <span className="text-cyan-400">
                    Sajedul Islam
                  </span>
                </h2>

                <p className="text-gray-400 text-sm">
                  Software Developer
                </p>

              </div>

            </div>

            <p className="mt-6 text-gray-400 leading-8">

              Passionate Full Stack Developer creating modern websites,
              Android applications and management systems with React,
              Flutter, Node.js and SQLite.

            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <div className="space-y-3">

              <a href="#home" className="block hover:text-cyan-400">
                Home
              </a>

              <a href="#about" className="block hover:text-cyan-400">
                About
              </a>

              <a href="#skills" className="block hover:text-cyan-400">
                Skills
              </a>

              <a href="#projects" className="block hover:text-cyan-400">
                Projects
              </a>

              <a href="#education" className="block hover:text-cyan-400">
                Education
              </a>

              <a href="#contact" className="block hover:text-cyan-400">
                Contact
              </a>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Connect With Me
            </h3>

            <div className="flex gap-5 text-3xl">

              <a
                href="https://github.com/emu2025222-spec"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 hover:scale-125 duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61591546110482"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 hover:scale-125 duration-300"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 hover:scale-125 duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

            <p className="mt-8 text-gray-400">

              📧 emon@example.com

            </p>

            <p className="text-gray-400">

              📱 +880 1567-936519

            </p>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">

          <p className="flex justify-center items-center gap-2 text-gray-400">

            Made with
            <FaHeart className="text-red-500 animate-pulse" />
            by

            <span className="text-cyan-400 font-bold">

              MD. Sajedul Islam

            </span>

          </p>

          <p className="mt-3 text-gray-500">

            © {new Date().getFullYear()} All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;