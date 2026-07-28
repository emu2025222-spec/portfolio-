import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Orbit Coaching Center",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
    description:
      "Complete coaching management system with student, attendance, fees, exams and result management.",
    tech: ["React", "Node.js", "Express", "SQLite"],
    github: "#",
    live: "#",
  },
  {
    title: "University Portal",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
    description:
      "Student portal including login, attendance, notices, profile and result management.",
    tech: ["React", "Express", "SQLite"],
    github: "#",
    live: "#",
  },
  {
    title: "Flutter Mobile App",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900",
    description:
      "Beautiful Flutter application with Firebase integration and modern UI.",
    tech: ["Flutter", "Firebase"],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="w-32 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-8 max-w-2xl mx-auto">
            A collection of my recent software development projects.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .2,
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              className="group overflow-hidden rounded-3xl border border-slate-700 bg-white/5 backdrop-blur-lg hover:border-cyan-400 hover:shadow-[0_0_35px_#06b6d4] transition-all duration-500"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/30 text-sm hover:bg-cyan-500 hover:text-white transition"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition-all duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 py-3 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
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