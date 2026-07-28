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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black pt-24"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 blur-[150px] rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="text-cyan-400 text-lg font-semibold mb-4"
          >
            👋 Hello, Welcome to my Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-transparent bg-[length:200%] animate-pulse">
              MD.
            </span>

            <br />

            Sajedul Islam
          </motion.h1>

          <div className="text-cyan-400 text-2xl md:text-3xl font-bold mt-7">

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
            transition={{ delay: .7 }}
            className="mt-8 text-gray-300 leading-8 text-lg max-w-xl"
          >
            Passionate BSc in Computer Science & Engineering student.
            I love creating beautiful websites, Flutter apps,
            backend systems and solving real-world problems through software.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .9 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 hover:scale-110 transition-all duration-300 font-semibold shadow-[0_0_30px_#06b6d4]"
            >
              Contact Me
            </a>

            <a
              href="/CV.pdf"
              download
              className="px-8 py-4 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-110 transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload />

              Download CV
            </a>
          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 mt-10 text-3xl"
          >
            <a
              href="https://github.com/emu2025222-spec"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61591546110482"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.08,
              rotate: 2,
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-[90px] opacity-40 animate-pulse"></div>

            <img
              src={profile}
              alt="Profile"
              className="relative w-80 h-80 lg:w-[430px] lg:h-[430px] rounded-full border-[6px] border-cyan-400 object-cover shadow-[0_0_80px_#06b6d4]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;