import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020617]">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[180px] rounded-full animate-pulse"></div>

      {/* Main */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Logo */}

        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400 blur-[70px] opacity-50 animate-pulse"></div>

          <img
            src={logo}
            alt="Logo"
            className="relative w-32 h-32 rounded-full border-4 border-cyan-400 shadow-[0_0_40px_#06b6d4]"
          />
        </motion.div>

        {/* Welcome */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .4 }}
          className="mt-10 text-5xl md:text-6xl font-black"
        >
          Welcome
        </motion.h1>

        {/* Name */}

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-3 text-2xl text-cyan-400 font-semibold"
        >
          MD. Sajedul Islam
        </motion.h2>

        {/* Loading */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-3 text-gray-400 tracking-[4px]"
        >
          LOADING PORTFOLIO...
        </motion.p>

        {/* Progress */}

        <div className="w-72 h-2 bg-slate-800 rounded-full overflow-hidden mt-10">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          />

        </div>

        {/* Loading Percent */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-4 text-cyan-300 text-sm"
        >
          Initializing Experience...
        </motion.p>

      </div>

    </div>
  );
}

export default Loader;