import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#030712] relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          className="bg-black/40 border border-white/10 p-10 rounded-3xl relative overflow-hidden backdrop-blur-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >

          {/* Terminal Controls */}
          <div className="flex space-x-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6 font-mono tracking-tight underline decoration-cyan-500 underline-offset-8">
            &gt; Introduction_
          </h2>
          
          <div className="space-y-6 text-gray-400 font-mono leading-relaxed text-sm md:text-base">
            <p>
              <span className="text-cyan-500 font-bold">Location:</span> Noida, India
            </p>
            <p>
              I am a third-year BTech student in Information Technology at JSS Academy of Technical Education, Noida. 
              Currently operating at the intersection of <span className="text-white">full-stack architecture</span> and <span className="text-white">real-time systems</span>.
            </p>
            <p className="border-l-2 border-white/10 pl-6 italic">
              "Passionate about programming, web development, and participating in hackathons to solve real-world problems through innovative code."
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            I am a third-year BTech student in Information Technology at JSS Academy of Technical Education, Noida. 
            Passionate about programming, web development, and learning new technologies. I enjoy building innovative 
            solutions and participating in hackathons to solve real-world problems.
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default About;