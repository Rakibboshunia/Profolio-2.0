import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] relative overflow-hidden pt-36 pb-12 px-6 border-t border-white/5">

      {/* 🔥 Layered Glow */}
      <div className="absolute w-[700px] h-[700px] bg-[#C9A96E]/10 blur-[180px] rounded-full top-[-200px] left-1/2 -translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">

        {/* ✨ Brand */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#C9A96E] font-serif text-2xl tracking-[0.5em]"
        >
          BOSHUNIA
        </motion.h1>

        {/* 🧠 Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mt-8 text-sm leading-relaxed max-w-lg mx-auto"
        >
          Crafting refined digital experiences with a balance of aesthetics,
          performance, and thoughtful interaction design.
        </motion.p>

        {/* ✨ Premium Divider */}
        <div className="relative my-14">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent"></div>

          {/* Center Dot */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#C9A96E] rounded-full"></div>
        </div>

        {/* 🧾 Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm"
        >

          <p>
            © All Rights Reserved 2026 -{" "}
            <span className="text-[#C9A96E]">
              MD AL RAKEB RASEL BOSHUNIA
            </span>
          </p>

          {/* Minimal Secondary Text */}
          <p className="text-gray-400 text-xs tracking-wide">
            Designed & Developed with precision
          </p>

        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;