import { motion } from "framer-motion";
import { FaCode, FaHackerrank, FaRocket, FaTerminal } from "react-icons/fa";

const achievements = [
  {
    icon: <FaTerminal className="text-purple-400" />,
    title: "Master Coder",
    description: "Solved 500+ DSA Problems across LeetCode, CodeChef, and Codeforces",
    tag: "ELITE_DEV",
    color: "from-purple-500/20 to-transparent",
    border: "border-purple-500/50"
  },
  {
    icon: <FaHackerrank className="text-green-400" />,
    title: "Hackathon Enthusiast",
    description: "Participated in 2 Hackathons, gaining valuable experience in rapid development",
    tag: "FIELD_EXP",
    color: "from-green-500/20 to-transparent",
    border: "border-green-500/50"
  },
  {
    icon: <FaCode className="text-cyan-400" />,
    title: "Problem Solver",
    description: "Consistent practice on LeetCode with 274+ specific challenges solved",
    tag: "CORE_LOGIC",
    color: "from-cyan-500/20 to-transparent",
    border: "border-cyan-500/50"
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-black text-white tracking-widest uppercase italic">
            Mission_<span className="text-cyan-500">Milestones</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-transparent mt-2"></div>
        </div>

        {/* Back to grid-cols-3 to accommodate the new 500+ card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-tr-3xl rounded-bl-3xl border-l-4 ${achievement.border} bg-gradient-to-br ${achievement.color} backdrop-blur-sm group hover:bg-white/5 transition-all duration-500 hover:-translate-y-2`}
            >
              <div className="absolute top-4 right-6 font-mono text-[10px] text-cyan-500/50 tracking-[0.2em]">
                {achievement.tag}
              </div>
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide uppercase">
                {achievement.title}
              </h3>
              <p className="text-gray-400 font-mono text-xs leading-relaxed">
                {achievement.description}
              </p>
              
              <div className="mt-6 flex items-center space-x-2">
                <div className="h-px flex-grow bg-white/10"></div>
                <span className="text-[10px] font-mono text-cyan-500 animate-pulse">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Achievements;