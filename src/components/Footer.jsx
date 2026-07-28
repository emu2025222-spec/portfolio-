import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}
          <div>

            <h2 className="text-3xl font-bold text-white">
              MD.
              <span className="text-cyan-400">
                Sajedul Islam
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Passionate Software Engineer & BSc in Computer Science &
              Engineering Student dedicated to building beautiful,
              scalable and modern software solutions.
            </p>

          </div>

          {/* Center */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
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

              <a href="#contact" className="block hover:text-cyan-400">
                Contact
              </a>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-5 text-3xl">

              <a
                href="https://github.com/emu2025222-spec"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61591546110482"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 hover:scale-110 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">

          <p className="flex justify-center items-center gap-2 text-gray-400">

            Made with
            <FaHeart className="text-red-500" />
            by
            <span className="text-cyan-400 font-semibold">
              MD. Sajedul Islam
            </span>

          </p>

          <p className="mt-3 text-sm text-gray-500">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;