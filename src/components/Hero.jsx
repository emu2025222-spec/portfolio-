import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaDownload,
  FaMapMarkerAlt,
} from "react-icons/fa";
import profile from "../assets/images/Profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-transparent pt-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-400 mb-6">
            👋 Welcome to my Portfolio
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <br />
            <span className="text-cyan-400">
              MD. Sajedul Islam
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-cyan-300 font-semibold mt-6 h-10">
            <TypeAnimation
              sequence={[
                "BSc in Computer Science & Engineering",
                2000,
                "Full Stack Developer",
                2000,
                "Flutter Developer",
                2000,
                "Software Engineer",
                2000,
                "React Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-gray-300 leading-8 max-w-xl">
            Passionate Software Engineer who enjoys building modern websites,
            Flutter applications, management systems and scalable backend
            solutions using the latest technologies.
          </p>

          <div className="flex items-center gap-2 mt-5 text-gray-400">
            <FaMapMarkerAlt className="text-cyan-400" />
            Cumilla, Bangladesh
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-7 py-3 rounded-full transition duration-300"
            >
              Hire Me
            </a>

            <a
              href="/CV.pdf"
              className="border border-cyan-400 hover:bg-cyan-400 hover:text-black px-7 py-3 rounded-full flex items-center gap-2 transition duration-300"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/emu2025222-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61591546110482"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 hover:scale-125 transition duration-300"
            >
              <FaLinkedin />
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[120px] opacity-40 animate-pulse"></div>

            {/* Rotating Ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-cyan-400/40 animate-spin [animation-duration:10s]"></div>

            {/* Profile */}
            <img
              src={profile}
              alt="MD. Sajedul Islam"
              className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_70px_#06b6d4]"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;