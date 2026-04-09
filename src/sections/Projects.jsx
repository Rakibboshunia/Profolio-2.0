import { motion } from "framer-motion";

import img1 from "../assets/E-com.jpg";
import img2 from "../assets/porfolio.webp";
import img3 from "../assets/dashboard.webp";
import img4 from "../assets/mobile app.webp";
import img5 from "../assets/landing page.webp";
import img6 from "../assets/saas.webp";

const projects = [
  { title: "E-commerce Website", image: img1, category: "Web App" },
  { title: "Portfolio Design", image: img2, category: "UI Design" },
  { title: "Dashboard UI", image: img3, category: "Dashboard" },
  { title: "Mobile App UI", image: img4, category: "Mobile" },
  { title: "Landing Page", image: img5, category: "Marketing" },
  { title: "SaaS Platform", image: img6, category: "SaaS" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-36 px-6 bg-[#0D0D0D] relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#C9A96E]/10 blur-[150px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[#C9A96E] font-serif tracking-[0.3em] text-lg mb-6">
            • PROJECTS •
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of my recent work showcasing design, development,
            and problem-solving skills.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl"
            >

              {/* Image */}
              <img
                src={project.image}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">

                {/* Category */}
                <span className="text-xs tracking-widest text-[#C9A96E] mb-2">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-white text-lg font-medium">
                  {project.title}
                </h3>

                {/* Button */}
                <button className="mt-4 text-sm text-[#C9A96E] border border-[#C9A96E] px-4 py-1 rounded-md hover:bg-[#C9A96E] hover:text-black transition w-fit">
                  View Project →
                </button>

              </div>

              {/* Bottom Gradient */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent"></div>

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#C9A96E]/40 transition"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;