
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEOHelmet from "../components/common/SEOHelmet";

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaWordpress, FaElementor } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript, SiPostgresql, SiPrisma, SiShopify, SiBootstrap } from "react-icons/si";

const mernSkills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "Shopify", icon: <SiShopify /> },
];

const experiences = [
  {
    role: "Frontend Developer",
    company: "Fire AI | On-Site",
    year: "October 2025 – Present",
    desc: "Developing scalable, high-performance web applications using React.js, Next.js, Node.js, and MongoDB. Focusing on modern software architecture and clean code to deliver production-ready solutions.",
  },
  {
    role: "WordPress Developer",
    company: "Fire AI | On-Site",
    year: "October 2025 - Present",
    desc: "Developing and maintaining custom WordPress sites, designing high-converting Elementor pages, and optimizing performance for business platforms and agency websites.",
  },
  {
    role: "Full Stack & CMS Developer",
    company: "Freelance | Remote",
    year: "2025 – Present",
    desc: "Building custom business websites, eCommerce stores, and SaaS platforms using MERN stack, WordPress, and Shopify tailored to business needs.",
  },
  {
    role: "MERN Stack Intern",
    company: "Ostad | Remote",
    year: "February 2024 - August 2025",
    desc: "Completed an intensive internship focusing on full-stack web development using React.js, Node.js, Express, and MongoDB. Built and deployed full-featured web applications.",
  },
  {
    role: "Python Development Intern",
    company: "Interactive Cares | Remote",
    year: "October 2025 - February 2026",
    desc: "Gained hands-on experience in backend development and scripting using Python. Contributed to real-world projects and problem-solving tasks.",
  },
  {
    role: "Graphic Designer For POD (print on demand) Store",
    company: "Freelance - Various Clients Worldwide",
    year: "2021 - 2024",
    desc: "Crafted unique designs for print-on-demand platforms, leveraging creativity and market trends to create compelling products that resonate with customers.",
  }
];

const education = [
  {
    degree: "B.Sc in Computer Science & Engineering",
    institution: "Dhaka International University",
    year: "2021 - 2025",
    desc: "Focused on software engineering, data structures, and modern web architectures.",
  }
];

const SkillsExperience = () => {
  return (
    <section id="skills-experience" className="py-20 px-6 bg-[#f8f9fa] dark:bg-[#080808] relative overflow-hidden min-h-screen transition-colors duration-300">
      <SEOHelmet title="Skills & Experience | Boshunia" />
      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#C9A96E]/10 blur-[150px] rounded-full top-[-100px] left-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#C9A96E] font-serif tracking-[0.3em] text-lg mb-4">
            • SKILLS & EXPERIENCE •
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A track record of crafting premium digital experiences and mastering modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-24">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-12 border-b border-gray-200 dark:border-white/10 pb-6 tracking-tight">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {mernSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center justify-center p-8 bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 rounded-3xl shadow-sm hover:border-[#C9A96E] transition-all duration-300 group cursor-default"
                >
                  <span className="text-5xl text-gray-300 dark:text-gray-600 group-hover:text-[#C9A96E] transition-colors duration-300 mb-4 drop-shadow-sm">
                    {skill.icon}
                  </span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium tracking-wide group-hover:text-[#C9A96E] transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Experience & Education */}
          <div className="space-y-24">
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-12 border-b border-gray-200 dark:border-white/10 pb-6 tracking-tight">Professional Experience</h3>
              <div className="flex flex-col gap-12">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-10 border-l-2 border-[#C9A96E]/20 hover:border-[#C9A96E] transition-colors duration-500"
                  >
                    <span className="absolute -left-[9px] top-0 w-4 h-4 bg-[#f8f9fa] dark:bg-[#080808] border-2 border-[#C9A96E] rounded-full"></span>
                    <div className="text-[#C9A96E] text-xs font-bold tracking-[0.2em] uppercase mb-2">{exp.year}</div>
                    <h4 className="text-2xl text-gray-900 dark:text-white font-medium mb-1 tracking-tight">{exp.role}</h4>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-4 font-medium">{exp.company}</div>
                    <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed max-w-md">{exp.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-12 border-b border-gray-200 dark:border-white/10 pb-6 tracking-tight">Academic Background</h3>
              <div className="flex flex-col gap-12">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-10 border-l-2 border-[#C9A96E]/20 hover:border-[#C9A96E] transition-colors duration-500"
                  >
                    <span className="absolute -left-[9px] top-0 w-4 h-4 bg-[#f8f9fa] dark:bg-[#080808] border-2 border-[#C9A96E] rounded-full"></span>
                    <div className="text-[#C9A96E] text-xs font-bold tracking-[0.2em] uppercase mb-2">{edu.year}</div>
                    <h4 className="text-2xl text-gray-900 dark:text-white font-medium mb-1 tracking-tight">{edu.degree}</h4>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-4 font-medium">{edu.institution}</div>
                    <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed max-w-md">{edu.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        {/* HIRE ME CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 relative rounded-[3rem] overflow-hidden bg-[#0d1117] border border-[#C9A96E]/20 p-12 md:p-16 text-center"
        >
          {/* Glow bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute w-[400px] h-[400px] bg-[#C9A96E]/10 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="relative z-10">
            <p className="text-[#C9A96E] font-serif tracking-[0.4em] text-xs uppercase mb-4 font-bold">
              • Open to Opportunities
            </p>
            <h3 className="text-4xl md:text-6xl font-serif tracking-tighter text-white mb-6 leading-tight">
              Ready to build something <br />
              <span className="text-[#C9A96E] italic">great together?</span>
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 text-base leading-relaxed">
              I'm currently open for full-time roles, freelance contracts, and exciting collaborations. Let's make it happen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:official.alrakib@gmail.com"
                className="group flex items-center gap-3 px-12 py-5 bg-[#C9A96E] text-black font-bold rounded-full hover:shadow-[0_20px_50px_rgba(201,169,110,0.4)] transition-all hover:scale-105 tracking-wider"
              >
                <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                HIRE ME NOW
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-3 px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all tracking-wider text-sm"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsExperience;
