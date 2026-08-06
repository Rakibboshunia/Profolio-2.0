
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SEOHelmet from "../components/common/SEOHelmet";
import cvFile from "../assets/MD. AL RAKEB RASEL BOSHUNIA.pdf";
import MagneticButton from "../components/common/MagneticButton";
import SpotlightCard from "../components/common/SpotlightCard";

const CodeTerminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
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
                  ? activeLine === i
                    ? "text-[#C9A96E]"
                    : "text-gray-600"
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
                activeLine === i && i < visibleLines
                  ? "bg-white/5"
                  : ""
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



const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startAnimation = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
  };

  return (
    <motion.span onViewportEnter={startAnimation}>
      {count}{suffix}
    </motion.span>
  );
};

const About = () => {
  const stats = [
    { label: "Projects", value: 20, suffix: "+" },
    { label: "Clients", value: 12, suffix: "+" },
    { label: "Rating", value: 5, suffix: "★" },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-16 px-6 relative overflow-hidden transition-colors duration-300"
    >
      <SEOHelmet title="About | Boshunia" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs md:text-sm uppercase mb-4 block font-bold">
            • About Me
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tighter leading-[1.1]">
            Who Am <span className="italic text-gray-500">I?</span> <br /> What Do I <span className="text-[#C9A96E]">Do?</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* 🖼 Image Section - 5 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            <CodeTerminal />

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -20 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="absolute -top-6 -left-6 md:-left-8 bg-white dark:bg-[#111] text-[#080808] dark:text-white w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center border-4 border-gray-100 dark:border-[#080808] shadow-xl z-20"
            >
              <span className="text-3xl md:text-4xl font-serif font-bold text-[#C9A96E]">1.5+</span>
              <span className="text-[8px] md:text-[10px] tracking-[0.2em] font-bold uppercase mt-1 text-center leading-tight">Years<br/>Experience</span>
            </motion.div>

            {/* Floating Info */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 right-0 md:-right-6 glass-card p-6 md:p-8 rounded-3xl border-white/10 shadow-2xl max-w-[220px] md:max-w-[260px] backdrop-blur-xl"
            >
              <p className="text-[10px] tracking-[0.3em] font-bold text-[#C9A96E] uppercase mb-3">Focus</p>
              <p className="text-xs md:text-sm leading-relaxed font-medium text-gray-800 dark:text-gray-200">Delivering pixel-perfect, highly interactive frontend applications.</p>
            </motion.div>
          </motion.div>

          {/* 🧠 Text Section - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight font-serif tracking-tight text-gray-900 dark:text-white">
              I Build Fast, Modern <span className="text-[#C9A96E] italic">Websites</span> & Web Apps.
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg mb-8 max-w-xl">
              I'm a Software Developer passionate about building modern, scalable, and high-performance web applications. My primary expertise includes React.js, Next.js, TypeScript, JavaScript, Node.js, Express.js, and MongoDB.
              <br /><br />
              In addition to modern JavaScript development, I also specialize in WordPress and Shopify development, building custom business websites, eCommerce stores, landing pages, and CMS-based solutions tailored to business needs.
            </p>

            {/* 📊 Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {stats.map((stat, i) => (
                <SpotlightCard key={i} className="glass-card p-10 rounded-3xl text-center border-white/5">
                  <div className="text-[#C9A96E] text-4xl font-serif mb-2">
                    <Counter end={stat.value} duration={3} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] tracking-[0.4em] uppercase font-bold text-gray-400">{stat.label}</div>
                </SpotlightCard>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <MagneticButton>
                <a
                  href={cvFile}
                  download="MD_AL_RAKEB_RASEL_BOSHUNIA_CV.pdf"
                  className="px-10 py-5 bg-[#C9A96E] text-black font-bold rounded-full hover:shadow-[0_20px_40px_rgba(201,169,110,0.3)] transition-all tracking-wider"
                >
                  DOWNLOAD RESUME
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="mailto:official.alrakib@gmail.com"
                  className="group px-10 py-5 border-2 border-[#C9A96E] text-[#C9A96E] font-bold rounded-full hover:bg-[#C9A96E] hover:text-black transition-all tracking-wider flex items-center gap-3 shadow-[0_0_20px_rgba(201,169,110,0.15)] hover:shadow-[0_0_35px_rgba(201,169,110,0.35)]"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  HIRE ME
                </a>
              </MagneticButton>

              <div className="flex gap-3">
                {[1, 2, 3].map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="w-1 h-1 rounded-full bg-[#C9A96E]"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
