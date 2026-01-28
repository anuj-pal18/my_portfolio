import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiC, SiMongodb, SiRedis, SiSocketdotio, SiVercel, SiRender, SiWebrtc, SiTailwindcss, SiExpress } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';

const skillCategories = [
  { title: "Engines", span: "md:col-span-2", skills: [{ name: "JS", icon: <TbBrandJavascript /> }, { name: "Java", icon: <FaJava /> }, { name: "C++", icon: <SiCplusplus /> }, { name: "C", icon: <SiC /> }] },
  { title: "Real-Time", span: "md:col-span-1", skills: [{ name: "WebRTC", icon: <SiWebrtc /> }, { name: "Socket.io", icon: <SiSocketdotio /> }] },
  { title: "Frontend", span: "md:col-span-1", skills: [{ name: "React", icon: <FaReact /> }, { name: "Tailwind", icon: <SiTailwindcss /> }] },
  { title: "Backend", span: "md:col-span-1", skills: [{ name: "Node", icon: <FaNodeJs /> }, { name: "Express", icon: <SiExpress /> }] },
  { title: "Database", span: "md:col-span-1", skills: [{ name: "Mongo", icon: <SiMongodb /> }, { name: "Redis", icon: <SiRedis /> }] },
  { title: "Ops", span: "md:col-span-3", skills: [{ name: "Git", icon: <FaGitAlt /> }, { name: "Vercel", icon: <SiVercel /> }, { name: "Render", icon: <SiRender /> }] }
];

// Spotlight Component for the futuristic glow follow
const SkillCard = ({ cat }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      className={`group relative ${cat.span} bg-slate-950/50 border border-white/10 p-8 rounded-2xl overflow-hidden transition-colors hover:border-cyan-500/50`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Interactive Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase flex items-center">
            <span className="inline-block w-4 h-[1px] bg-cyan-500 mr-2"></span>
            {cat.title}
          </h3>
          <div className="text-[10px] font-mono text-slate-600">ID: 00{Math.floor(Math.random() * 99)}</div>
        </div>
        
        <div className="flex flex-wrap gap-8">
          {cat.skills.map((skill, si) => (
            <div key={si} className="flex flex-col items-center group/skill">
              <div className="text-4xl text-slate-500 group-hover/skill:text-cyan-400 group-hover/skill:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300 transform group-hover/skill:scale-110">
                {skill.icon}
              </div>
              <span className="text-[10px] mt-3 font-mono text-slate-500 tracking-widest uppercase group-hover/skill:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Futuristic Corner Accent */}
      <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-transparent via-transparent to-cyan-500/10 rounded-br-2xl transition-opacity group-hover:opacity-50"></div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Ambient Background Noise/Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(8,20,44,1)_0%,rgba(2,6,23,1)_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="max-w-xl mb-20">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1 bg-cyan-500 mb-6 rounded-full"
          />
          <h2 className="text-5xl font-black text-white mb-4 tracking-tighter uppercase italic">
            Tech <span className="text-cyan-500 font-light not-italic">Stack</span>
          </h2>
          <p className="text-slate-500 font-mono text-sm leading-relaxed">
            &gt; Initializing hardware modules... <br />
            &gt; Core technologies optimized for high-performance deployment.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <SkillCard key={i} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;