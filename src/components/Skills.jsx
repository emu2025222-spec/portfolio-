import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaFlutter,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, level: "95%" },
  { name: "Flutter", icon: <FaFlutter />, level: "90%" },
  { name: "Node.js", icon: <FaNodeJs />, level: "92%" },
  { name: "Express", icon: <SiExpress />, level: "90%" },
  { name: "MongoDB", icon: <SiMongodb />, level: "88%" },
  { name: "MySQL", icon: <SiMysql />, level: "85%" },
  { name: "JavaScript", icon: <FaJs />, level: "95%" },
  { name: "HTML5", icon: <FaHtml5 />, level: "98%" },
  { name: "CSS3", icon: <FaCss3Alt />, level: "95%" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "95%" },
  { name: "Git", icon: <FaGitAlt />, level: "90%" },
  { name: "GitHub", icon: <FaGithub />, level: "95%" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
            Technologies and tools I use to build modern websites,
            mobile applications and backend systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              className="bg-slate-800/70 backdrop-blur-xl rounded-3xl p-7 border border-slate-700 hover:border-cyan-400 transition"
            >
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="text-4xl text-cyan-400">
                    {skill.icon}
                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      {skill.name}
                    </h3>

                    <p className="text-gray-400">
                      {skill.level}
                    </p>

                  </div>

                </div>

              </div>

              <div className="w-full bg-slate-700 rounded-full h-3 mt-6">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.3 }}
                  viewport={{ once: true }}
                  className="bg-cyan-400 h-3 rounded-full"
                />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;