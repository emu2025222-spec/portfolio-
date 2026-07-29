import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import profile from "../assets/images/Profile.png";

const backgrounds = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920",
];

function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center pt-24"
    >
      {/* Animated Background */}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgrounds[currentBg]})`,
          }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-slate-950/80"></div>

      {/* Glow */}

      <div className="absolute -top-24 -left-20 w-[450px] h-[450px] bg-cyan-500/20 blur-[170px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[180px] rounded-full animate-pulse"></div>

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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 backdrop-blur-lg"
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

            <span className="text-white drop-shadow-[0_0_30px_rgba(34,211,238,.5)]">
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
            className="mt-8 max-w-xl text-lg text-slate-200 leading-9"
          >
            Passionate Computer Science & Engineering student dedicated
            to building beautiful websites, Flutter apps and scalable
            backend systems using modern technologies.
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
              className="group px-8 py-4 rounded-full bg-cyan-500 font-semibold text-white hover:bg-cyan-400 hover:-translate-y-2 hover:scale-105 transition-all duration-500 shadow-[0_0_35px_#06b6d4]"
            >
              Contact Me
            </a>

            <a
              href="/CV.pdf"
              download
              className="group px-8 py-4 rounded-full border border-cyan-400 bg-white/10 backdrop-blur-lg flex items-center gap-3 hover:bg-cyan-400 hover:text-black hover:-translate-y-2 hover:scale-105 transition-all duration-500 shadow-lg"
            >
              <FaDownload className="group-hover:rotate-12 duration-300" />
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
              className="w-14 h-14 rounded-full bg-slate-900/70 backdrop-blur-xl border border-slate-700 flex items-center justify-center text-2xl hover:bg-cyan-500 hover:text-white hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_35px_#06b6d4]"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61591546110482"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-900/70 backdrop-blur-xl border border-slate-700 flex items-center justify-center text-2xl hover:bg-cyan-500 hover:text-white hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_35px_#06b6d4]"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-900/70 backdrop-blur-xl border border-slate-700 flex items-center justify-center text-2xl hover:bg-cyan-500 hover:text-white hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_35px_#06b6d4]"
            >
              <FaLinkedin />
            </a>

          </motion.div>

        </motion.div>

                {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
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
              scale: 1.08,
              rotate: 2,
            }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-[120px] opacity-40 animate-pulse"></div>

            {/* Rotating Ring */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-5 rounded-full border-2 border-dashed border-cyan-400/50"
            />

            {/* Ping Ring */}

            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-30 animate-ping"></div>

            <img
              src={profile}
              alt="Profile"
              className="relative w-80 h-80 lg:w-[430px] lg:h-[430px] rounded-full object-cover border-[7px] border-cyan-400 shadow-[0_0_90px_rgba(34,211,238,.8)]"
            />
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Down */}

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

          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
            }}
            className="w-2 h-2 bg-cyan-400 rounded-full mt-2"
          />

        </div>

        <p className="text-xs text-cyan-300 mt-2 text-center tracking-[5px]">
          SCROLL
        </p>
      </motion.div>

    </section>
  );
}

export default Hero;