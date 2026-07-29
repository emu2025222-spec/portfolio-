import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "freelanceremon579@email.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+8801567936519",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Cumilla, Bangladesh",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 mt-6">
            Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {contactInfo.map((item, index) => (

              <motion.div
                key={index}
                initial={{ x: -80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: index * .2,
                  duration: .6,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.04,
                  y: -5,
                }}
                className="flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.3)] transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500 flex justify-center items-center text-2xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400">
                    {item.value}
                  </p>
                </div>
              </motion.div>

            ))}

            {/* Social */}

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/emu2025222-spec"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 flex justify-center items-center text-2xl hover:bg-cyan-500 hover:-translate-y-2 transition-all duration-500"
              >
                <FaGithub />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 flex justify-center items-center text-2xl hover:bg-cyan-500 hover:-translate-y-2 transition-all duration-500"
              >
                <FaFacebook />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 flex justify-center items-center text-2xl hover:bg-cyan-500 hover:-translate-y-2 transition-all duration-500"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 space-y-6 hover:border-cyan-400 transition-all duration-500"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none resize-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition"
            ></textarea>

            <button
              className="w-full py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_30px_#06b6d4] transition-all duration-500 font-bold flex justify-center items-center gap-3"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;