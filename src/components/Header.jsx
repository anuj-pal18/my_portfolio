import { motion } from "framer-motion";
import photo from "../assets/photo.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaEye,
  FaCode,
  FaRobot,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative bg-[#030303] text-white py-24 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                className="overflow-hidden whitespace-nowrap border-r-2 border-cyan-400 pr-2"
              >
                
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mt-4 tracking-tighter">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-400 to-cyan-600">
                  ANUJ PAL
                </span>
              </h1>
            </div>

            <h2 className="text-xl md:text-2xl font-mono text-gray-300 mb-8 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-pink-500">_</span> 
              MERN Stack Developer 
              <span className="hidden md:inline text-gray-600">|</span> 
              <span className="text-cyan-400">Open Source</span>
            </h2>

            {/* Code Snippet Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl font-mono text-sm mb-10 max-w-xl mx-auto lg:mx-0 shadow-2xl relative group">
                <div className="absolute -top-3 left-6 px-3 py-1 bg-black border border-white/10 rounded text-[10px] text-gray-500">
                    bash --profile
                </div>
              <p className="leading-relaxed">
                <span className="text-pink-500">const</span> <span className="text-yellow-400">mission</span> = {"{"} <br />
                &nbsp;&nbsp;focus: <span className="text-cyan-400">"Building Scalable Architectures"</span>,<br />
                &nbsp;&nbsp;passion: <span className="text-cyan-400">"Creative Problem Solving"</span><br />
                {"}"};
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {[
                { label: "View_Resume", icon: <FaEye />, link: "/anuj.pdf", color: "cyan" },
                { label: "GitHub", icon: <FaGithub />, link: "https://github.com/anuj-pal18", color: "white" },
                { label: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com...", color: "pink" }
              ].map((btn, i) => (
                <motion.a
                  key={i}
                  href={btn.link}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-xs uppercase tracking-widest border transition-all
                    ${btn.color === 'cyan' ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-black' : 
                      btn.color === 'pink' ? 'border-pink-500/50 bg-pink-500/10 text-pink-400 hover:bg-pink-500 hover:text-black' : 
                      'border-white/20 bg-white/5 text-white hover:bg-white hover:text-black'}`}
                >
                  {btn.icon} {btn.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual Profile */}
          <motion.div
            className="flex-1 relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer Rotating Circles */}
              <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute -inset-4 border border-pink-500/20 rounded-full animate-[spin_35s_linear_infinite_reverse]"></div>
              
              {/* Image Container */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <img
                  src={photo}
                  alt="Anuj Pal"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                {/* Scanning Light Effect */}
                <div className="absolute inset-0 bg-cyan-400/20 h-1/2 w-full -translate-y-full animate-[scan_4s_linear_infinite] blur-xl"></div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-2 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <FaCode className="text-cyan-400 text-2xl" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-2 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-pink-500/50 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
              >
                <FaRobot className="text-pink-400 text-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .gradient-text {
          background: linear-gradient(to right, #22d3ee, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </header>
  );
};

export default Header;