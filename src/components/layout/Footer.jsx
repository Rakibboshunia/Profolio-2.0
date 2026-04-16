import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills-experience" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "FAQ & Contact", id: "contact" },
];

const Footer = () => {

  // 🔥 Scroll Function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#f8f9fa] dark:bg-[#0D0D0D] relative overflow-hidden pt-12 pb-6 px-6 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">

      {/* 🔥 Glow */}
      <div className="absolute w-[700px] h-[700px] bg-[#C9A96E]/10 blur-[180px] rounded-full top-[-200px] left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ✨ TOP BRAND */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#C9A96E] font-serif text-2xl tracking-[0.5em]"
          >
            BOSHUNIA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 mt-8 text-sm max-w-lg mx-auto"
          >
            Crafting refined digital experiences with a balance of aesthetics,
            performance, and thoughtful interaction design.
          </motion.p>
        </div>

        {/* 🧾 MIDDLE GRID */}
        <div className="grid md:grid-cols-3 gap-10 text-sm mb-12 text-center md:text-left">

          {/* 🔗 Quick Links (SCROLL VERSION) */}
          <div>
            <h3 className="text-[#C9A96E] mb-4 font-medium">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-[#C9A96E] transition"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 🧰 Services */}
          <div>
            <h3 className="text-[#C9A96E] mb-4 font-medium">Services</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>Branding</li>
              <li>App Design</li>
            </ul>
          </div>

          {/* 📞 Contact */}
          <div>
            <h3 className="text-[#C9A96E] mb-4 font-medium">Contact</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Bangladesh</li>
              <li>+8801779296092</li>
              <li>fireaiboshunia.info@gmail.com</li>
            </ul>
          </div>

        </div>

        {/* ✨ Divider */}
        <div className="relative my-10">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#C9A96E] rounded-full"></div>
        </div>

        {/* 🧾 BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 dark:text-gray-500 text-sm"
        >

          <p>
            © All Rights Reserved 2026 -{" "}
            <span className="text-[#C9A96E]">BOSHUNIA</span>
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-xs tracking-wide">
            Designed & Developed with precision
          </p>

        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;