import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
 {
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/share/1BCYEaFJih/",
    },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/md-al-rakeb-rasel-boshunia",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/Rakibboshunia",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-36 px-6 bg-[#0D0D0D] relative overflow-hidden">

      {/* 🔥 Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#C9A96E]/10 blur-[160px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-[#C9A96E] font-serif text-4xl mb-6">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 mb-10 max-w-md">
            Have a project in mind? I’d love to hear about it. Let’s create something impactful and meaningful together.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-5 text-gray-400">

            <div className="flex items-center gap-3 hover:text-[#C9A96E] transition">
              <FaEnvelope />
              <span>fireaiboshunia.info@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 hover:text-[#C9A96E] transition">
              <FaPhoneAlt />
              <span>+8801779296092</span>
            </div>

          </div>

          {/* Social */}
          <div className="flex gap-4 mt-8">
            {socials.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border hover:border-white rounded-full border-[#C9A96E] text-[#C9A96E] transition-all hover:bg-[#C9A96E] hover:text-black"
              >
                {item.icon}
              </a>
            ))}
          </div>

        </motion.div>

        {/* RIGHT SIDE (FORM) */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111]/70 backdrop-blur-xl border border-[#1a1a1a] p-8 rounded-2xl"
        >

          <div className="flex flex-col gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white focus:border-[#C9A96E] outline-none transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white focus:border-[#C9A96E] outline-none transition"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white focus:border-[#C9A96E] outline-none transition"
            ></textarea>

            {/* Button */}
            <button className="mt-4 px-6 py-3 rounded-lg bg-[#C9A96E] text-black font-medium hover:opacity-90 transition">
              Send Message
            </button>

          </div>

        </motion.form>

      </div>
    </section>
  );
};

export default Contact;