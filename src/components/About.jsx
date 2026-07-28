import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaDatabase,
  FaGraduationCap,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      text: "Modern websites with React, Node.js and Express.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Flutter Apps",
      text: "Beautiful Android applications with Flutter.",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      text: "SQLite, MySQL & MongoDB database design.",
    },
    {
      icon: <FaGraduationCap />,
      title: "CSE Student",
      text: "Currently studying BSc in Computer Science & Engineering.",
    },
  ];

  return (
    <section
      id="about"
      className="py-28 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto rounded-full mt-5"></div>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-8">
            I'm a passionate Computer Science & Engineering student who loves
            creating beautiful websites, Flutter applications, software
            solutions and modern user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Who am I?
            </h3>

            <p className="text-gray-300 leading-8">
              My name is <span className="text-cyan-400">MD. Sajedul Islam</span>.
              I enjoy building modern web applications, mobile apps,
              management systems and creative software solutions.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-slate-700">
                <h1 className="text-4xl font-bold text-cyan-400">10+</h1>
                <p className="text-gray-400 mt-2">Technologies</p>
              </div>

              <div className="bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-slate-700">
                <h1 className="text-4xl font-bold text-cyan-400">5+</h1>
                <p className="text-gray-400 mt-2">Projects</p>
              </div>

            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-cyan-400 text-4xl mb-5">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-400">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;