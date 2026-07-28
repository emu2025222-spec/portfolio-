import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import profile from "../assets/images/Profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-black pt-24"
    >
      <div className="max-w-7xl mx-auto w-full px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-lg font-semibold mb-3">
            👋 Hello, Welcome to my Portfolio
          </p>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            MD.
            <br />
            <span className="text-white">Sajedul Islam</span>
          </h1>

          <div className="mt-6 text-2xl font-bold text-cyan-400">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "Flutter Developer",
                2000,
                "React Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-7 text-gray-300 text-lg leading-8 max-w-xl">
            Passionate Computer Science student who enjoys building modern web
            applications, Flutter apps and scalable backend systems with React,
            Node.js and Express.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition font-semibold shadow-lg shadow-cyan-500/40"
            >
              Hire Me
            </a>

            <a
              href="/CV.pdf"
              download
              className="px-8 py-4 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition flex items-center gap-2"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          <div className="flex gap-6 mt-10 text-3xl">
            <a
              href="https://github.com/emu2025222-spec"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61591546110482"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[80px] opacity-40 animate-pulse"></div>

            <motion.img
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              src={profile}
              alt="Profile"
              className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-[6px] border-cyan-400 shadow-[0_0_70px_#06b6d4]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;