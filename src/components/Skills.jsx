import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 92 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 88 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 85 },
  { name: "Flutter", level: 90 },
  { name: "SQLite", level: 88 },
  { name: "MongoDB", level: 82 },
  { name: "Git & GitHub", level: 90 },
  { name: "Python", level: 75 },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-950 text-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto rounded-full mt-5"></div>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
            These are the technologies I use to build modern websites,
            software and mobile applications.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .05 }}
              viewport={{ once: true }}
              className="bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition-all"
            >

              <div className="flex justify-between mb-3">

                <h3 className="font-semibold">
                  {skill.name}
                </h3>

                <span className="text-cyan-400">
                  {skill.level}%
                </span>

              </div>

              <div className="w-full bg-slate-700 rounded-full h-3">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
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