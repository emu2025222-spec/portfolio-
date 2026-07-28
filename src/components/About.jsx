import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaServer, FaDatabase } from "react-icons/fa";

function About() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Modern React, Next.js and responsive websites."
    },
    {
      icon: <FaMobileAlt />,
      title: "Flutter Apps",
      desc: "Android applications with beautiful UI."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Node.js, Express API & Authentication."
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      desc: "MongoDB, SQLite & MySQL."
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1}}
          viewport={{once:true}}
        >

          <h2 className="text-5xl font-bold text-center mb-5">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-center max-w-3xl mx-auto text-gray-400 leading-8">
            I'm a passionate Computer Science & Engineering student who loves
            creating modern websites, Flutter applications and backend systems.
            I enjoy solving real-world problems through clean, scalable software.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((item,index)=>(

            <motion.div
              key={index}
              whileHover={{
                y:-12,
                scale:1.05
              }}
              className="bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 border border-slate-700 hover:border-cyan-400 transition duration-500"
            >

              <div className="text-5xl text-cyan-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default About;