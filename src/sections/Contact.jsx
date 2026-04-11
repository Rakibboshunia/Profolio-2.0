import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    setStatus("loading");

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    // Note: Replace these placeholders with your actual EmailJS configuration keys
    const SERVICE_ID = "service_02k63si";
    const TEMPLATE_ID = "template_glfyc3r";
    const PUBLIC_KEY = "D2PdGt4D4bP2JBsFF";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus("failed");
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <section id="contact" className="py-36 px-6 bg-[#f8f9fa] dark:bg-[#0D0D0D] relative overflow-hidden transition-colors duration-300">

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

          <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-md">
            Have a project in mind? I’d love to hear about it. Let’s create something impactful and meaningful together.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-5 text-gray-600 dark:text-gray-400">

            <a href="mailto:fireaiboshunia.info@gmail.com" className="flex items-center gap-3 w-fit hover:text-[#C9A96E] transition">
              <FaEnvelope />
              <span>official.alrakib@gmail.com</span>
            </a>

            <a href="tel:+8801779296092" className="flex items-center gap-3 w-fit hover:text-[#C9A96E] transition">
              <FaPhoneAlt />
              <span>+8801779296092</span>
            </a>

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
          onSubmit={handleSubmit}
          className="bg-white/80 dark:bg-[#111]/70 backdrop-blur-xl border border-gray-200 dark:border-[#1a1a1a] p-8 rounded-2xl shadow-xl dark:shadow-none"
        >

          <div className="flex flex-col gap-6">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-gray-50 dark:bg-[#0D0D0D] border border-gray-300 dark:border-[#1a1a1a] rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-[#C9A96E] outline-none transition"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-gray-50 dark:bg-[#0D0D0D] border border-gray-300 dark:border-[#1a1a1a] rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-[#C9A96E] outline-none transition"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="bg-gray-50 dark:bg-[#0D0D0D] border border-gray-300 dark:border-[#1a1a1a] rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-[#C9A96E] outline-none transition"
            ></textarea>

            {status === "error" && (
              <p className="text-red-500 text-sm">Please fill out all fields.</p>
            )}
            {status === "loading" && (
              <p className="text-[#C9A96E] text-sm animate-pulse">Sending message...</p>
            )}
            {status === "success" && (
              <p className="text-green-500 text-sm">Message sent successfully!</p>
            )}
            {status === "failed" && (
              <p className="text-red-500 text-sm">Failed to send. Please try again later.</p>
            )}

            {/* Button */}
            <button 
              type="submit" 
              disabled={status === "loading"}
              className={`mt-4 px-6 py-3 rounded-lg bg-[#C9A96E] text-black font-medium transition ${
                status === "loading" ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

          </div>

        </motion.form>

      </div>
    </section>
  );
};

export default Contact;