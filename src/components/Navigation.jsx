import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { title: "ABOUT", href: "#about", id: "about" },
    { title: "SKILLS", href: "#skills", id: "skills" },
    { title: "PROJECTS", href: "#projects", id: "projects" },
    { title: "ACHIEVEMENTS", href: "#achievements", id: "achievements" },
    { title: "CONTACT", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-3 pointer-events-none">
      <div className="container mx-auto max-w-5xl pointer-events-auto">
        <div className="relative overflow-hidden bg-black/80 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl shadow-cyan-500/10">
          
          {/* Top Progress Line (Visual Only) */}
          <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

          <div className="flex items-center justify-between px-6 py-3">
            
            {/* Left Brand: Terminal Style */}
            <div className="hidden lg:flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
              <div className="text-cyan-400 font-mono text-[10px] tracking-tighter opacity-70 uppercase">
                Node: Active <span className="text-gray-600">|</span> 0.0.1
              </div>
            </div>

            {/* Navigation List */}
            <ul className="flex items-center justify-center space-x-2 md:space-x-4 mx-auto lg:mx-0">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;

                return (
                  <motion.li key={index} className="relative">
                    <a
                      href={item.href}
                      className={`relative px-4 py-2 font-mono text-[10px] md:text-xs tracking-widest transition-all duration-500 ease-out flex items-center group ${
                        isActive ? "text-cyan-400" : "text-gray-500 hover:text-white"
                      }`}
                    >
                      {/* Text label with scale and skew effect on hover */}
                      <motion.span 
                        className="relative z-10 inline-block"
                        whileHover={{ 
                          scale: 1.2, 
                          skewX: -10,
                          color: "#fff" 
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {item.title}
                      </motion.span>

                      {/* Active Background Pill */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            layoutId="navGlow"
                            className="absolute inset-0 bg-cyan-500/10 rounded-lg border border-cyan-500/20"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </AnimatePresence>

                      {/* Animated Dot for Active State */}
                      {isActive && (
                        <motion.div 
                          layoutId="activeDot"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"
                        />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            {/* Right Status: Command Line Style */}
            <div className="hidden lg:flex items-center font-mono text-[10px] text-pink-500 space-x-2">
              <span className="opacity-50 tracking-tighter">STATUS:</span>
              <span className="text-cyan-400 tracking-widest blink uppercase">Optimized</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blink {
          animation: blink 1.5s step-end infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;