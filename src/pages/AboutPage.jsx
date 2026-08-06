import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SEOHelmet from "../components/common/SEOHelmet";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, LayoutTemplate, Zap, ShieldCheck } from "lucide-react";

const CodeTerminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [activeLine, setActiveLine] = useState(0);
  const intervalRef = useRef(null);

  const codeLines = [
    [
      { text: "const ", cls: "text-blue-400 font-bold" },
      { text: "developer", cls: "text-white" },
      { text: " = {", cls: "text-gray-400" },
    ],
    [
      { text: "  name", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "'Md. Al Rakeb Rasel Boshunia'", cls: "text-[#9ecbff]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  role", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "'Full Stack Developer'", cls: "text-[#9ecbff]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  location", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "'Bangladesh 🇧🇩'", cls: "text-[#9ecbff]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "  skills", cls: "text-[#79b8ff]" },
      { text: ": [", cls: "text-gray-400" },
      { text: "'React'", cls: "text-[#f97583]" },
      { text: ", ", cls: "text-gray-400" },
      { text: "'Next.js'", cls: "text-[#f97583]" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "           ", cls: "" },
      { text: "'Node.js'", cls: "text-[#f97583]" },
      { text: ", ", cls: "text-gray-400" },
      { text: "'MongoDB'", cls: "text-[#f97583]" },
      { text: "],", cls: "text-gray-400" },
    ],
    [
      { text: "  open", cls: "text-[#79b8ff]" },
      { text: ": ", cls: "text-gray-400" },
      { text: "true", cls: "text-[#79b8ff] font-bold" },
      { text: ",", cls: "text-gray-400" },
    ],
    [
      { text: "};", cls: "text-gray-400" },
    ],
    [],
    [
      { text: "developer", cls: "text-white" },
      { text: ".", cls: "text-gray-400" },
      { text: "buildSomethingGreat", cls: "text-[#b392f0]" },
      { text: "();", cls: "text-gray-400" },
    ],
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < codeLines.length) {
          setActiveLine(prev);
          return prev + 1;
        } else {
          clearInterval(intervalRef.current);
          return prev;
        }
      });
    }, 220);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="relative w-full aspect-[4/5] rounded-[2rem] bg-[#0d1117] border border-white/10 shadow-2xl overflow-hidden flex flex-col font-mono text-xs md:text-sm group hover:border-[#C9A96E]/40 transition-all duration-700">
      {/* Mac window header */}
      <div className="flex items-center gap-2 px-5 py-3 bg-[#161b22] border-b border-white/5 shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_#ff5f57aa]"></div>
        <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_#febc2eaa]"></div>
        <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_6px_#28c840aa]"></div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-[10px] text-gray-500 tracking-widest">developer.js</span>
          <span className="text-[9px] bg-[#C9A96E]/20 text-[#C9A96E] px-2 py-0.5 rounded-full font-sans tracking-wider">JS</span>
        </div>
      </div>
      {/* Editor body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Line numbers gutter */}
        <div className="flex flex-col py-5 px-3 bg-[#0d1117] border-r border-white/5 shrink-0 select-none">
          {codeLines.map((_, i) => (
            <div
              key={i}
              className={`leading-6 text-right text-[11px] transition-colors duration-200 ${
                i < visibleLines
                  ? activeLine === i ? "text-[#C9A96E]" : "text-gray-600"
                  : "text-transparent"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        {/* Code content */}
        <div className="flex flex-col py-5 px-4 flex-1 overflow-hidden relative">
          {codeLines.map((tokens, i) => (
            <div
              key={i}
              className={`leading-6 flex flex-wrap items-center rounded transition-all duration-300 ${
                activeLine === i && i < visibleLines ? "bg-white/5" : ""
              }`}
            >
              {i < visibleLines &&
                tokens.map((t, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    className={t.cls}
                  >
                    {t.text}
                  </motion.span>
                ))}
              {i === visibleLines && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.7 }}
                  className="inline-block w-[7px] h-[14px] bg-[#C9A96E] ml-0.5 rounded-sm"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Bottom status bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#C9A96E]/90 text-[#0d1117] text-[10px] font-sans font-bold tracking-wider shrink-0">
        <span>⚡ JavaScript</span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0d1117] animate-pulse"></span>
          Open to Hire
        </span>
        <span>UTF-8</span>
      </div>
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-[80px] pointer-events-none rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>
      <div className="absolute bottom-8 left-0 w-48 h-48 bg-[#C9A96E]/10 blur-[80px] pointer-events-none rounded-full group-hover:bg-[#C9A96E]/15 transition-all duration-700"></div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-24 pb-20 px-6 min-h-screen bg-[#f8f9fa] dark:bg-[#080808] relative overflow-hidden transition-colors duration-300">
      <SEOHelmet title="About Me | Boshunia" />
      
      {/* Background Glows */}
      <div className="absolute w-[600px] h-[600px] bg-[#C9A96E]/10 blur-[150px] rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-900/5 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HERO SECTION */}
        <div className="text-center mb-16 md:mb-24 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs uppercase mb-6 block font-bold">
              • My Story
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif tracking-tighter leading-none text-gray-900 dark:text-white mb-6">
              Who I <span className="text-[#C9A96E] italic">Am.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              From creative design to complex frontend architecture, here is the A-Z of my journey, philosophy, and dedication to the craft.
            </p>
          </motion.div>
        </div>

        {/* MAIN BIOGRAPHY GRID */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Image & Quick Facts */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 relative"
          >
            <CodeTerminal />

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -20 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="absolute -top-6 -left-4 md:-left-6 bg-white dark:bg-[#111] text-[#080808] dark:text-white w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center border-4 border-gray-100 dark:border-[#080808] shadow-xl z-20"
            >
              <span className="text-3xl md:text-4xl font-serif font-bold text-[#C9A96E]">1.5+</span>
              <span className="text-[8px] md:text-[10px] tracking-[0.2em] font-bold uppercase mt-1 text-center leading-tight">Years<br/>Experience</span>
            </motion.div>

            <div className="bg-white/50 dark:bg-[#111]/50 backdrop-blur-xl border border-gray-200 dark:border-white/5 p-8 rounded-3xl shadow-sm">
              <h4 className="text-[#C9A96E] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Core Tenets</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Code2 className="text-[#C9A96E]" size={18} />
                  <span className="font-medium text-sm">Clean, Scalable Architecture</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <LayoutTemplate className="text-[#C9A96E]" size={18} />
                  <span className="font-medium text-sm">Pixel-Perfect UI/UX</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Zap className="text-[#C9A96E]" size={18} />
                  <span className="font-medium text-sm">High-Performance Rendering</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <ShieldCheck className="text-[#C9A96E]" size={18} />
                  <span className="font-medium text-sm">Enterprise-Grade Security</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: The Story */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 prose prose-lg dark:prose-invert max-w-none"
          >
            <div className="bg-white dark:bg-[#111] p-10 md:p-14 rounded-[3rem] shadow-sm border border-gray-200 dark:border-white/5">
              
              <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-6">How I Got Started</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg font-light">
                My journey into the world of digital engineering didn't begin with just writing lines of code; it started with a profound fascination for design and user experience. During my early years as a Print-on-Demand designer, I learned how visual aesthetics directly influence human emotion and conversion. I realized that a beautiful design is only as powerful as the infrastructure supporting it.
              </p>

              <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-6 mt-12">How I Became a Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg font-light">
                Driven by the desire to bring my designs to life, I transitioned into software engineering. Pursuing a B.Sc in Computer Science provided me with the foundational knowledge of data structures, algorithms, and system design. But it was my hands-on experience with modern JavaScript frameworks that truly unlocked my potential. 
                <br/><br/>
                I mastered <strong>React, Next.js, and Redux</strong> to build lightning-fast, scalable frontend architectures. By bridging the gap between high-end design and robust backend logic (Node.js, Express, MongoDB), I evolved from a designer into a Full-Stack Frontend Architect.
              </p>

              <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-6 mt-12">How I Approach My Work</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg font-light">
                I believe that enterprise software shouldn't feel heavy or clunky. The modern user demands applications that are as beautiful as they are functional. My philosophy is built on three pillars:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                  <h4 className="text-[#C9A96E] font-bold text-sm tracking-widest uppercase mb-3">1. Precision</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Every pixel, every animation, and every state transition is carefully calculated to provide a flawless experience.</p>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                  <h4 className="text-[#C9A96E] font-bold text-sm tracking-widest uppercase mb-3">2. Performance</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Aesthetics mean nothing if the application takes too long to load. I prioritize sub-second rendering and optimal bundle sizes.</p>
                </div>
              </div>

              <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-6 mt-12">Where I Am Today</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 text-lg font-light">
                Today, as a Frontend Developer at Fire AI - Betopia Group, I am responsible for architecting SaaS platforms, interactive e-commerce sites, and highly secure corporate portals. I am continuously exploring the bleeding edge of web technologies, including AI integrations and advanced WebGL rendering, to push the boundaries of what is possible in a browser.
              </p>

              <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-200 dark:border-white/10">
                <Link to="/skills" className="group flex items-center gap-3 px-8 py-4 bg-[#C9A96E] text-black font-bold text-sm tracking-widest uppercase rounded-full hover:scale-105 transition-transform">
                  View Technical Skills
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/projects" className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold text-sm tracking-widest uppercase rounded-full hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors">
                  See My Work
                </Link>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
