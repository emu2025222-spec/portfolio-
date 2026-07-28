import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto rounded-full mt-5"></div>

          <p className="text-gray-400 mt-6">
            Feel free to contact me anytime.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity:0,x:-80 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.8 }}
            viewport={{ once:true }}
            className="space-y-6"
          >

            <div className="bg-slate-800 p-6 rounded-2xl flex gap-5 items-center">
              <FaEnvelope className="text-3xl text-cyan-400"/>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-400">
                  freelanceremon579@email.com
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl flex gap-5 items-center">
              <FaPhone className="text-3xl text-cyan-400"/>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-400">
                  +8801567936519
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl flex gap-5 items-center">
              <FaMapMarkerAlt className="text-3xl text-cyan-400"/>
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-gray-400">
                  Cumilla, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex gap-6 text-3xl mt-8">

              <a href="#" className="hover:text-cyan-400">
                <FaGithub/>
              </a>

              <a href="#" className="hover:text-cyan-400">
                <FaFacebook/>
              </a>

              <a href="#" className="hover:text-cyan-400">
                <FaLinkedin/>
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity:0,x:80 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.8 }}
            viewport={{ once:true }}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 rounded-xl p-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-slate-800 rounded-xl p-4 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full bg-slate-800 rounded-xl p-4 outline-none"
            ></textarea>

            <button
              className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-full font-semibold transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;