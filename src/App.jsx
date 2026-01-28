import { useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    // Create cursor trail effect
    const cursor = document.createElement("div");
    cursor.className = "cursor-trail";
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="cyber-grid"></div>
      <div className="cyber-dots"></div>
      <div className="cyber-glow"></div>

      <Header />
      <Navigation />
      <main className="relative z-10">
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="bg-black border-t border-cyan-500/30 text-white text-center py-6 relative z-10">
        <div className="container mx-auto px-4">
          <p className="text-cyan-400 font-mono">
            &copy; 2025 <span className="text-pink-500">Anuj Pal</span>. All
            rights reserved.
          </p>
          
        </div>
      </footer>
    </div>
  );
}

export default App;
