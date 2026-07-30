import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

function LoginModal({ onClose }) {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-xl px-4">

      {/* Glow */}

      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-[170px] animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-blue-600/20 blur-[170px] animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: .85 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: .85 }}
        transition={{ duration: .4 }}
        className="relative overflow-hidden w-full max-w-md rounded-3xl bg-slate-900/90 border border-cyan-400/20 shadow-[0_0_50px_rgba(34,211,238,.25)] backdrop-blur-2xl"
      >

        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-50 text-white hover:text-cyan-400 duration-300"
        >
          <FaTimes size={22} />
        </button>

        <AnimatePresence mode="wait">{!isSignup ? (

<motion.div
key="login"
initial={{ x: 350, opacity: 0, scale: .95 }}
animate={{ x: 0, opacity: 1, scale: 1 }}
exit={{ x: -350, opacity: 0, scale: .95 }}
transition={{
duration: .45,
ease: "easeInOut",
}}
className="p-10"
>

<h2 className="text-4xl font-bold text-center">
Welcome
<span className="text-cyan-400"> Back</span>
</h2>

<p className="text-center text-slate-300 mt-2">
Login to your account
</p>

<div className="space-y-5 mt-8">

<div className="relative">

<FaEnvelope className="absolute left-4 top-4 text-cyan-400" />

<input
type="email"
placeholder="Email Address"
className="w-full py-4 pl-12 pr-4 rounded-xl bg-white/10 border border-slate-700 outline-none focus:border-cyan-400 transition"
/>

</div>

<div className="relative">

<FaLock className="absolute left-4 top-4 text-cyan-400" />

<input
type="password"
placeholder="Password"
className="w-full py-4 pl-12 pr-4 rounded-xl bg-white/10 border border-slate-700 outline-none focus:border-cyan-400 transition"
/>

</div>

<button
className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 font-semibold shadow-[0_0_25px_#06b6d4]"
>
Login
</button>

<p className="text-center text-slate-300">

Don't have an account?

<button
onClick={() => setIsSignup(true)}
className="ml-2 text-cyan-400 font-semibold hover:underline"
>
Sign Up
</button>

</p>

</div>

</motion.div>

) : (<motion.div
  key="signup"
  initial={{ x: -350, opacity: 0, scale: .95 }}
  animate={{ x: 0, opacity: 1, scale: 1 }}
  exit={{ x: 350, opacity: 0, scale: .95 }}
  transition={{
    duration: .45,
    ease: "easeInOut",
  }}
  className="p-10"
>

  <h2 className="text-4xl font-bold text-center">
    Create
    <span className="text-cyan-400"> Account</span>
  </h2>

  <p className="text-center text-slate-300 mt-2">
    Create your new account
  </p>

  <div className="space-y-5 mt-8">

    <div className="relative">

      <FaUser className="absolute left-4 top-4 text-cyan-400" />

      <input
        type="text"
        placeholder="Full Name"
        className="w-full py-4 pl-12 pr-4 rounded-xl bg-white/10 border border-slate-700 outline-none focus:border-cyan-400 transition"
      />

    </div>

    <div className="relative">

      <FaEnvelope className="absolute left-4 top-4 text-cyan-400" />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full py-4 pl-12 pr-4 rounded-xl bg-white/10 border border-slate-700 outline-none focus:border-cyan-400 transition"
      />

    </div>

    <div className="relative">

      <FaLock className="absolute left-4 top-4 text-cyan-400" />

      <input
        type="password"
        placeholder="Password"
        className="w-full py-4 pl-12 pr-4 rounded-xl bg-white/10 border border-slate-700 outline-none focus:border-cyan-400 transition"
      />

    </div>

    <button
      className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 font-semibold shadow-[0_0_25px_#06b6d4]"
    >
      Create Account
    </button>

    <p className="text-center text-slate-300">

      Already have an account?

      <button
        onClick={() => setIsSignup(false)}
        className="ml-2 text-cyan-400 font-semibold hover:underline"
      >
        Login
      </button>

    </p>

  </div>

</motion.div>
        )}

        </AnimatePresence>

      </motion.div>

    </div>
  );
}

export default LoginModal;