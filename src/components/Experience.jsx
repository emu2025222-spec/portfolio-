import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaAward,
} from "react-icons/fa";

const experience = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Web Development",
    description:
      "Building responsive web applications using React, Node.js, Express.js and SQLite.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Flutter App Development",
    description:
      "Creating modern Android applications with Flutter and Firebase.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "REST APIs, Authentication, Database Design and Deployment.",
  },
  {
    icon: <FaAward />,
    title: "Real Projects",
    description:
      "Orbit Coaching Center, University Portal and Personal Portfolio.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-28 bg-slate-900 text-white px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Experience &
            <span className="text-cyan-400"> Achievements</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="mt-6 text-gray-400">
            Technologies and real-world projects I've worked on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0,y:40 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{ delay:index*.15 }}
              viewport={{ once:true }}
              className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all"
            >

              <div className="text-cyan-400 text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-8">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;