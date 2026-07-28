import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";

const education = [
  {
    year: "2026 - Present",
    title: "BSc in Computer Science & Engineering",
    place: "CCN University of Science & Technology",
    icon: <FaUniversity />,
  },
  {
    year: "Higher Secondary Certificate",
    title: "HSC",
    place: "Science Group",
    icon: <FaGraduationCap />,
  },
  {
    year: "Secondary School Certificate",
    title: "SSC",
    place: "Science Group",
    icon: <FaSchool />,
  },
];

function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        <div className="space-y-8">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * .2 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition"
            >

              <div className="flex gap-6 items-center">

                <div className="text-4xl text-cyan-400">
                  {item.icon}
                </div>

                <div>

                  <p className="text-cyan-400">
                    {item.year}
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {item.place}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;