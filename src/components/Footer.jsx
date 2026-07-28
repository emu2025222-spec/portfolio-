import { motion } from "framer-motion";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-slate-800 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black">

              <span className="text-white">
                MD.
              </span>

              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-transparent">
                Sajedul Islam
              </span>

            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Passionate Software Engineer & BSc in Computer Science &
              Engineering student dedicated to creating modern,
              scalable and beautiful software solutions.
            </p>

          </motion.div>

          {/* Links */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <div className="space-y-3">

              {[
                "home",
                "about",
                "skills",
                "projects",
                "contact",
              ].map((item) => (

                <a
                  key={item}
                  href={`#${item}`}
                  className="block capitalize hover:text-cyan-400 hover:translate-x-2 transition-all duration-300"
                >
                  {item}
                </a>

              ))}

            </div>

          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold text-white mb-6">
              Connect With Me
            </h3>

            <div className="flex gap-5 text-3xl">

              <a
                href="https://github.com/emu2025222-spec"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 hover:rotate-12 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61591546110482"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 hover:rotate-12 transition-all duration-300"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 hover:rotate-12 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

            <a
              href="#home"
              className="inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition-all duration-300"
            >
              <FaArrowUp />
              Back To Top
            </a>

          </motion.div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-14 pt-8 text-center">

          <p className="flex justify-center items-center gap-2 text-gray-400">

            Made with

            <motion.span
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
              }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>

            by

            <span className="text-cyan-400 font-semibold">
              MD. Sajedul Islam
            </span>

          </p>

          <p className="mt-4 text-gray-500 text-sm">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;