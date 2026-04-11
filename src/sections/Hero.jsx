import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mypic from "../assets/boshunia.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#f8f9fa] dark:bg-[#0D0D0D] px-6 overflow-hidden transition-colors duration-300">

      {/* 🔥 Ambient Glow Layers */}
      <div className="absolute w-[700px] h-[700px] bg-[#C9A96E]/10 blur-[160px] rounded-full top-[-200px] left-1/2 -translate-x-1/2"></div>
      <div className="absolute w-[300px] h-[300px] bg-[#C9A96E]/10 blur-[120px] rounded-full bottom-10 right-10"></div>

      {/* ✨ Noise Layer */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Tag */}
          <span className="text-xs tracking-[0.4em] text-[#C9A96E] uppercase">
            Digital Product Designer
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 dark:text-white leading-[1.1] mt-6">
            I build clean & <br />
            <span className="bg-gradient-to-r from-[#C9A96E] via-white to-[#C9A96E] text-transparent bg-clip-text">
              premium interfaces
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mt-8 max-w-lg leading-relaxed text-lg">
            Focused on crafting modern, high-performance web experiences with
            strong design systems, smooth interactions, and scalable architecture.
          </p>

          {/* CTA */}
          <div className="mt-12 flex gap-5">

            <Link to="/contact" className="px-8 py-3 flex items-center justify-center rounded-md bg-[#C9A96E] text-black font-medium tracking-wide hover:opacity-90 transition">
              Start Project
            </Link>

            <Link to="/projects" className="px-8 py-3 flex items-center justify-center rounded-md border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-black transition">
              View Work
            </Link>

          </div>

          {/* Trust Strip */}
          <div className="flex gap-10 mt-14 text-sm text-gray-500">
            <span>Trusted by startups</span>
            <span>•</span>
            <span>Remote worldwide</span>
          </div>

        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >

          <div className="relative">

            {/* Image */}
            <img
              src={mypic}
              className="w-[360px] md:w-[400px] rounded-3xl object-cover"
            />

            {/* Soft Glass Overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gray-200/20 dark:bg-white/5 border border-gray-300 dark:border-white/10"></div>

            {/* Accent Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#C9A96E]/30 rounded-3xl"></div>

          </div>

        </motion.div>

      </div>

      {/* ⬇ Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500">
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-[2px] h-12 bg-gray-300 dark:bg-gray-700 mt-2 relative overflow-hidden">
          <span className="absolute top-0 w-full h-3 bg-[#C9A96E] animate-bounce"></span>
        </div>
      </div>

    </section>
  );
};

export default Hero;