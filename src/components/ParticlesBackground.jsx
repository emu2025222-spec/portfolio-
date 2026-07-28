import { motion } from "framer-motion";

function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

      <motion.div
        className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 200, -150, 0],
          y: [0, -150, 150, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 150, -150, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export default ParticlesBackground;