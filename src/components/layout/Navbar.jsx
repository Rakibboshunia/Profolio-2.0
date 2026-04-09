import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHome,
  FaUser,
  FaServicestack,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", id: "home", icon: <FaHome /> },
  { name: "About", id: "about", icon: <FaUser /> },
  { name: "Services", id: "services", icon: <FaServicestack /> },
  { name: "Projects", id: "projects", icon: <FaProjectDiagram /> },
  { name: "Contact", id: "contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // 🔥 Smooth Scroll with offset
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* 🔝 Navbar */}

      <header className="fixed w-full top-0 left-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-7">
          {/* Logo */}
          <h1 className="text-[#C9A96E] font-serif text-md tracking-[0.3em] cursor-pointer">
            BOSHUNIA.
          </h1>

          {/* 🔗 Desktop Menu WITH ICON */}
          <div className="hidden md:flex gap-8 text-white text-sm">
            {navLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(link.id)}
                className="group flex items-center gap-2 hover:text-[#C9A96E] transition"
              >
                {/* Icon */}
                <span className="text-xs text-[#C9A96E] group-hover:scale-110 transition">
                  {link.icon}
                </span>

                {/* Text */}
                <span className="relative">
                  {link.name}

                  {/* Underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#C9A96E] group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden w-11 h-11 flex items-center justify-center border border-[#C9A96E]/30 rounded-md hover:border-[#C9A96E] transition"
          >
            <Menu size={20} className="text-[#C9A96E]" />
          </button>
        </div>
      </header>

      {/* 📱 Premium Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="fixed top-0 right-0 h-full w-80 bg-[#0D0D0D]/90 backdrop-blur-2xl z-50 px-8 py-8 flex flex-col border-l border-white/5"
            >
              {/* Top */}
              <div className="flex justify-between items-center mb-16">
                <h1 className="text-[#C9A96E] font-serif tracking-[0.3em] text-sm">
                  BOSHUNIA.
                </h1>

                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 flex items-center justify-center border border-white text-white rounded-full hover:border-[#C9A96E] hover:text-[#C9A96E] transition"
                >
                  <X size={18} />
                </button>
              </div>

              {/* 🔗 Links WITH ICON */}
              <div className="flex flex-col gap-8">
                {[
                  { name: "Home", id: "home", icon: <FaHome /> },
                  { name: "About", id: "about", icon: <FaUser /> },
                  {
                    name: "Services",
                    id: "services",
                    icon: <FaServicestack />,
                  },
                  {
                    name: "Projects",
                    id: "projects",
                    icon: <FaProjectDiagram />,
                  },
                  { name: "Contact", id: "contact", icon: <FaEnvelope /> },
                ].map((link, i) => (
                  <motion.button
                    key={i}
                    onClick={() => scrollToSection(link.id)}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="group flex items-center gap-4 text-left"
                  >
                    {/* Icon */}
                    <span className="text-[#C9A96E] text-lg group-hover:scale-110 transition">
                      {link.icon}
                    </span>

                    {/* Text */}
                    <div>
                      <span className="text-lg text-gray-300 group-hover:text-[#C9A96E] transition">
                        {link.name}
                      </span>

                      {/* Underline */}
                      <span className="block w-0 h-[1px] bg-[#C9A96E] mt-1 group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-auto pt-10">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent mb-6"></div>

                <p className="text-gray-500 text-xs tracking-wide text-center">
                  Designed with precision
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
