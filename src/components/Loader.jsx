import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col justify-center items-center z-[9999]">

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1 }}
        className="w-28 h-28 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"
      />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .4 }}
        className="mt-10 text-5xl font-bold"
      >
        Welcome
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-3 text-cyan-400 text-xl"
      >
        MD. Sajedul Islam Portfolio
      </motion.p>

    </div>
  );
}

export default Loader;