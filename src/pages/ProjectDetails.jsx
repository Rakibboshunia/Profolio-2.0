import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SEOHelmet from "../components/common/SEOHelmet";
import { projectsData } from "../data/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === parseInt(id));

  // Scroll to top when opening the details
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#f8f9fa] dark:bg-[#0D0D0D]">
        <h1 className="text-4xl font-serif text-[#C9A96E]">Project Not Found</h1>
        <Link to="/projects" className="mt-8 text-gray-600 dark:text-gray-400 hover:text-[#C9A96E] dark:hover:text-[#C9A96E] transition">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#f8f9fa] dark:bg-[#0D0D0D] relative overflow-hidden min-h-screen pb-32 transition-colors duration-300">
      <SEOHelmet title={`${project.title} | Boshunia`} />
      
      {/* Glow Effects */}
      <div className="absolute w-[600px] h-[600px] bg-[#C9A96E]/5 blur-[150px] rounded-full top-[-100px] left-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mt-12 mb-10"
        >
          <Link to="/projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#C9A96E] dark:text-gray-400 dark:hover:text-[#C9A96E] transition group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-end mb-16"
        >
          <div>
            <span className="text-[#C9A96E] text-xs font-semibold tracking-widest uppercase mb-4 block">
              {project.badgeLabel}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 dark:text-white leading-tight mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-[#C9A96E]/80 text-sm font-medium bg-[#C9A96E]/10 px-3 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex gap-4 md:justify-end">
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-white hover:border-[#C9A96E] hover:text-[#C9A96E] dark:hover:border-[#C9A96E] dark:hover:text-[#C9A96E] transition"
            >
              <FaGithub size={18} /> View Code
            </a>
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#C9A96E] text-black font-medium rounded-md hover:bg-opacity-90 transition"
            >
              Live Project <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

        {/* Large Feature Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-80 md:h-[550px] rounded-3xl overflow-hidden shadow-2xl mb-24 border border-gray-200 dark:border-white/5"
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Case Study Content */}
        <div className="grid md:grid-cols-12 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 space-y-16"
          >
            <div>
              <h3 className="text-2xl font-serif text-[#C9A96E] mb-6">Overview</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{project.overview}</p>
            </div>
            
            <div className="pl-6 border-l-2 border-[#C9A96E]">
              <h3 className="text-2xl font-serif text-[#C9A96E] mb-4">The Challenge</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">{project.challenges}</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-[#C9A96E] mb-6">The Solution</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{project.solution}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <div className="bg-white dark:bg-[#111] p-8 rounded-2xl border border-gray-200 dark:border-white/5 sticky top-32">
              <h4 className="text-xl font-serif text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-white/10 pb-4">Project Info</h4>
              <ul className="space-y-6">
                <li>
                  <span className="block text-sm text-gray-500 mb-1">Role</span>
                  <span className="font-medium text-gray-800 dark:text-gray-300">Frontend Developer</span>
                </li>
                <li>
                  <span className="block text-sm text-gray-500 mb-1">Category</span>
                  <span className="font-medium text-gray-800 dark:text-gray-300">{project.category}</span>
                </li>
                <li>
                  <span className="block text-sm text-gray-500 mb-1">Tags</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;
