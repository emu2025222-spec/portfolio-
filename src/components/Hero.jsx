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
      className="relative min-h-screen overflow-hidden flex items-center bg-gradient-to-br from-[#020617] via-[#07152e] to-black pt-24"
    >
      {/* Background Effects */}

      <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[170px] animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[180px] animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/5 blur-[230px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
          >
            👋 Welcome To My Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
            className="mt-8 text-6xl lg:text-7xl font-black leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-transparent">
              MD.
            </span>

            <br />

            <span className="text-white">
              Sajedul Islam
            </span>

          </motion.h1>

          <div className="mt-7 text-2xl md:text-3xl font-bold text-cyan-300">

            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Flutter Developer",
                2000,
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .8 }}
            className="mt-8 max-w-xl text-lg text-slate-300 leading-9"
          >
            Passionate Computer Science & Engineering student dedicated to
            building beautiful websites, Flutter apps and scalable backend
            systems using modern technologies.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-5 mt-10"
          >

            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 hover:scale-110 transition-all duration-500 shadow-[0_0_35px_#06b6d4]"
            >
              Contact Me
            </a>

            <a
              href="/CV.pdf"
              download
              className="px-8 py-4 rounded-full border border-cyan-400 flex items-center gap-3 backdrop-blur-lg bg-white/5 hover:bg-cyan-400 hover:text-black hover:scale-110 transition-all duration-500"
            >
              <FaDownload />
              Download CV
            </a>

          </motion.div>
                    {/* Social Icons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-5 mt-10"
          >
            <a
              href="https://github.com/emu2025222-spec"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-2xl hover:bg-cyan-500 hover:text-white hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_30px_#06b6d4]"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61591546110482"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-2xl hover:bg-cyan-500 hover:text-white hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_30px_#06b6d4]"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-2xl hover:bg-cyan-500 hover:text-white hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_30px_#06b6d4]"
            >
              <FaLinkedin />
            </a>
          </motion.div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.06,
              rotate: 2,
            }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-[120px] opacity-40 animate-pulse"></div>

            {/* Animated Ring */}

            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-30 animate-ping"></div>

            <img
              src={profile}
              alt="Profile"
              className="relative w-80 h-80 lg:w-[430px] lg:h-[430px] rounded-full object-cover border-[7px] border-cyan-400 shadow-[0_0_90px_rgba(34,211,238,.8)] transition-all duration-700"
            />

          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 rounded-full border-2 border-cyan-400 flex justify-center">

          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>

        </div>

        <p className="text-xs text-cyan-300 mt-2 text-center tracking-widest">
          SCROLL
        </p>

      </motion.div>

    </section>
  );
}

export default Hero;