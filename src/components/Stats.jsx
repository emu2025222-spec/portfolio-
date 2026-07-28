import { motion } from "framer-motion";
import { FaProjectDiagram, FaCode, FaUserGraduate, FaLaptopCode } from "react-icons/fa";

const stats = [
  {
    icon: <FaProjectDiagram />,
    title: "10+",
    subtitle: "Projects",
  },
  {
    icon: <FaCode />,
    title: "15+",
    subtitle: "Technologies",
  },
  {
    icon: <FaLaptopCode />,
    title: "2+",
    subtitle: "Years Learning",
  },
  {
    icon: <FaUserGraduate />,
    title: "CSE",
    subtitle: "Student",
  },
];

function Stats() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-cyan-400 transition"
          >
            <div className="text-5xl text-cyan-400 flex justify-center mb-5">
              {item.icon}
            </div>

            <h2 className="text-4xl font-bold">
              {item.title}
            </h2>

            <p className="text-gray-400 mt-2">
              {item.subtitle}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Stats;