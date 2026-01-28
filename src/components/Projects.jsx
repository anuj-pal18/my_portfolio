import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Kawach",
    description:
      "A high-security document-sharing ecosystem featuring encrypted QR codes and automated Cloudinary storage.",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary", "QR Code"],
    github: "https://github.com/iamvtyagi/kawach.git",
    live: "https://kawach-git-main-sujal862s-projects.vercel.app/",
  },
  {
    title: "QuizPlayLearn",
    description:

      "An AI-driven educational platform designed for interactive learning with robust MERN-based authentication.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/iamvtyagi/quiz_client",
    live: "https://kawach-git-main-sujal862s-projects.vercel.app/",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 underline decoration-cyan-500/30">PROJECTS</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-900/40 border border-white/5 rounded-3xl p-1 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Card Inner */}
              <div className="relative bg-[#0b1120] rounded-[calc(1.5rem-1px)] p-8 h-full flex flex-col">
                
                {/* Header: Icon & Links */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400 group-hover:scale-110 transition-transform">
                    <FaCode size={24} />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                      title="View Code"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-all"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Footer */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-[10px] font-mono tracking-widest uppercase bg-gray-800/50 text-cyan-300 border border-cyan-500/20 rounded-md backdrop-blur-sm group-hover:bg-cyan-500/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Scan-line Decoration */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;