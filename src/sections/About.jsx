import { motion } from "framer-motion";
import mypic from "../assets/boshunia.jpeg";
import SEOHelmet from "../components/common/SEOHelmet";
import cvFile from "../assets/MD. AL RAKEB RASEL BOSHUNIA .pdf";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-[#f8f9fa] dark:bg-[#0D0D0D] relative overflow-hidden transition-colors duration-300"
    >
      <SEOHelmet title="About | Boshunia" />
      {/* 🔥 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-[#C9A96E]/10 blur-[120px] rounded-full top-20 left-10"></div>

      {/* Title */}
      <h2 className="text-center text-[#C9A96E] font-serif mb-24 tracking-[0.2em] text-lg relative z-10">
        • About Me •
      </h2>

      <div className="grid md:grid-cols-2 gap-24 items-center max-w-6xl mx-auto relative z-10">
        
        {/* 🖼 Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group w-fit mx-auto"
        >
          <img
            src={mypic}
            className="w-80 rounded-xl grayscale group-hover:grayscale-0 transition duration-500"
          />

          <div className="absolute -bottom-6 -left-6 w-80 h-80 border border-gray-700 group-hover:border-[#C9A96E] transition duration-500"></div>

          <div className="absolute inset-0 bg-[#C9A96E]/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

          <div className="absolute -top-6 -right-6 bg-white dark:bg-[#111] border border-[#C9A96E] px-4 py-2 text-xs text-[#C9A96E] rounded-full shadow-lg">
            2+ Years Experience
          </div>
        </motion.div>

        {/* 🧠 Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h3 className="text-2xl md:text-3xl text-[#C9A96E] mb-6 leading-snug">
            Helping brands grow with modern digital solutions
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
            I am a passionate Frontend Developer with experience in building 
            interactive, user-friendly, and scalable web applications. I focus on 
            creating clean UI, high performance, and responsive designs that deliver 
            seamless user experiences.
            
            <br /><br />
            
            Alongside frontend development, I am currently learning backend 
            technologies like Node.js and Express to expand my full-stack capabilities.
            
            <br /><br />
            
            I have developed multiple real-world and personal projects including 
            responsive portfolios and web applications that showcase both creativity 
            and technical skills.
            
            <br /><br />
            
            As a Computer Science student, I continuously improve my skills by 
            learning modern tools and contributing to real-world projects. My goal 
            is to build impactful digital products that create value for users 
            and businesses.
          </p>

          {/* 📊 Stats */}
          <div className="flex gap-10 mt-10 justify-center md:justify-start">
            <div>
              <h4 className="text-[#C9A96E] text-2xl font-semibold">20+</h4>
              <p className="text-gray-700 dark:text-gray-500 text-sm">Projects</p>
            </div>

            <div>
              <h4 className="text-[#C9A96E] text-2xl font-semibold">12+</h4>
              <p className="text-gray-700 dark:text-gray-500 text-sm">Clients</p>
            </div>

            <div>
              <h4 className="text-[#C9A96E] text-2xl font-semibold">5★</h4>
              <p className="text-gray-700 dark:text-gray-500 text-sm">Rating</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href={cvFile}
            target="_blank"
            download="Rakib_Boshunia_CV.pdf"
            className="inline-block mt-10 px-6 py-3 border border-[#C9A96E] text-[#C9A96E] rounded-2xl hover:bg-[#C9A96E] hover:text-black transition duration-300"
          >
            Download CV
          </a>

          {/* Dots */}
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <span className="w-2 h-2 border border-[#C9A96E] rounded-full animate-pulse"></span>
            <span className="w-2 h-2 border border-gray-400 dark:border-gray-600 rounded-full"></span>
            <span className="w-2 h-2 border border-gray-400 dark:border-gray-600 rounded-full"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;