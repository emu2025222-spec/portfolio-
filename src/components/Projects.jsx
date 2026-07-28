import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Orbit Coaching Center",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
    description:
      "A complete coaching management system with student management, attendance, fees, exams and results.",
    tech: ["React", "Node.js", "SQLite", "Express"],
    github: "#",
    live: "#",
  },

  {
    title: "University Portal",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
    description:
      "Student portal with login, profile, attendance, notices and examination management.",
    tech: ["React", "Express", "SQLite"],
    github: "#",
    live: "#",
  },

  {
    title: "Flutter Mobile App",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900",
    description:
      "Cross-platform Flutter application with beautiful UI and Firebase integration.",
    tech: ["Flutter", "Firebase"],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
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
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto">
            Some of the projects I've built using modern technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .2 }}
              viewport={{ once: true }}
              className="bg-slate-950 rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:-translate-y-3 transition-all duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 bg-cyan-500 px-5 py-3 rounded-full hover:bg-cyan-400"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-2 border border-cyan-400 px-5 py-3 rounded-full hover:bg-cyan-400 hover:text-black"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;