import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaServicestack,
  FaProjectDiagram,
  FaEnvelope,
  FaStar,
  FaCommentDots,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaUser /> },
  { name: "Skills", path: "/skills", icon: <FaStar /> },
  { name: "Services", path: "/services", icon: <FaServicestack /> },
  { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  { name: "FAQ & Contact", path: "/contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* 🔝 Navbar */}

      <header className="fixed w-full top-0 left-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-black/40 border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-7">
          {/* Logo */}
          <h1 className="text-[#C9A96E] font-serif text-md tracking-[0.3em] cursor-pointer w-1/4">
            BOSHUNIA.
          </h1>

          {/* 🔗 Desktop Menu WITH ICON */}
          <div className="hidden md:flex gap-8 text-gray-700 dark:text-white text-sm justify-center w-1/2">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) =>
                  `group flex items-center gap-2 transition ${
                    isActive ? "text-[#C9A96E]" : "hover:text-[#C9A96E]"
                  }`
                }
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
              </NavLink>
            ))}
          </div>

          {/* Right Side: Socials and Toggle */}
          <div className="hidden md:flex items-center gap-5 justify-end w-1/4">
            {/* Theme Toggle (Dark/Light) */}
            <button 
              onClick={toggleTheme}
              className={`w-14 h-7 rounded-full flex items-center relative transition-colors duration-300 cursor-pointer shadow-inner mr-2 ${theme === 'dark' ? 'bg-[#395A54] shadow-black/20' : 'bg-gray-300'}`}
            >
              <div 
                className={`w-[1.1rem] h-[1.1rem] rounded-full absolute flex items-center justify-center shadow-sm transition-all duration-300 ${
                  theme === 'dark' ? 'right-1 bg-[#E2F7EB]' : 'left-1 bg-white'
                }`}
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1F312E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                )}
              </div>
            </button>

            {/* Social Icons */}
            <a href="https://github.com/Rakibboshunia" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-white hover:text-[#C9A96E] dark:hover:text-[#C9A96E] text-lg transition">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </a>
            <a href="https://www.facebook.com/share/1BCYEaFJih/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-white hover:text-[#C9A96E] dark:hover:text-[#C9A96E] text-lg transition">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/md-al-rakeb-rasel-boshunia" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-white hover:text-[#C9A96E] dark:hover:text-[#C9A96E] text-lg transition">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center justify-end w-1/4">
            <button
              onClick={() => setOpen(true)}
              className="w-11 h-11 flex items-center justify-center border border-[#C9A96E]/30 rounded-md hover:border-[#C9A96E] transition"
            >
              <Menu size={20} className="text-[#C9A96E]" />
            </button>
          </div>
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
              className="fixed top-0 right-0 h-full w-80 bg-white/95 dark:bg-[#0D0D0D]/90 backdrop-blur-2xl z-50 px-8 py-8 flex flex-col border-l border-gray-200 dark:border-white/5"
            >
              {/* Top */}
              <div className="flex justify-between items-center mb-16">
                <h1 className="text-[#C9A96E] font-serif tracking-[0.3em] text-sm">
                  BOSHUNIA.
                </h1>

                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-white text-gray-700 dark:text-white rounded-full hover:border-[#C9A96E] dark:hover:border-[#C9A96E] hover:text-[#C9A96E] transition"
                >
                  <X size={18} />
                </button>
              </div>

              {/* 🔗 Links WITH ICON */}
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={handleLinkClick}
                      className={({ isActive }) =>
                        `group flex items-center gap-4 text-left ${
                          isActive ? "text-[#C9A96E]" : "text-gray-600 dark:text-gray-300"
                        }`
                      }
                    >
                      {/* Icon */}
                      <span className="text-[#C9A96E] text-lg group-hover:scale-110 transition">
                        {link.icon}
                      </span>

                      {/* Text */}
                      <div>
                        <span className="text-lg group-hover:text-[#C9A96E] transition">
                          {link.name}
                        </span>

                        {/* Underline */}
                        <span className="block w-0 h-[1px] bg-[#C9A96E] mt-1 group-hover:w-full transition-all duration-300"></span>
                      </div>
                    </NavLink>
                  </motion.div>
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
