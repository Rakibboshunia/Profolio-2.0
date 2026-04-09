import { motion } from "framer-motion";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const MenuOverlay = ({ open, setOpen }) => {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >

      {/* Close */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-6 right-6 text-[#C9A96E]"
      >
        ✕
      </button>

      {/* Links */}
      <div className="flex flex-col gap-8 text-2xl text-white text-center">
        {links.map((link, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(link.id)}
            className="hover:text-[#C9A96E] transition"
          >
            {link.name}
          </button>
        ))}
      </div>

    </motion.div>
  );
};

export default MenuOverlay;