import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import img1 from "../assets/review/pic1.jpg";
import img2 from "../assets/review/pic2.jpg";
import img3 from "../assets/review/pic3.jpg";
import img4 from "../assets/review/pic4.webp";

const data = [
  {
    name: "Michael Carter",
    role: "Founder, TechNova",
    image: img1,
    text: "Rakib transformed our idea into a stunning digital product. His attention to detail and UI skills are exceptional.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, BrightAds",
    image: img2,
    text: "Working with Rakib was seamless. He delivered a clean, modern design that boosted our conversions significantly.",
  },
  {
    name: "Daniel Kim",
    role: "Product Manager, FinEdge",
    image: img3,
    text: "Highly professional and reliable. The user experience he designed exceeded all expectations.",
  },
  {
    name: "Sophia Williams",
    role: "CEO, Creative Studio",
    image: img4,
    text: "Rakib has an incredible eye for design. His work gave our brand a premium and modern identity.",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // 🔄 Auto slide
  useEffect(() => {
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % data.length);
    }, 5000);
    return () => clearInterval(i);
  }, []);

  // 🖱️ Mouse tracking
  const handleMove = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section
      onMouseMove={handleMove}
      className="relative py-40 px-6 bg-[#f8f9fa] dark:bg-[#0D0D0D] overflow-hidden transition-colors duration-300"
    >

      {/* 🌌 Dynamic Spotlight */}
      <div
        className="pointer-events-none absolute w-[300px] h-[300px] rounded-full bg-[#C9A96E]/10 blur-[120px]"
        style={{
          top: pos.y - 150,
          left: pos.x - 150,
        }}
      ></div>

      {/* 🫧 Floating Glass Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity }}
            className="absolute w-2 h-2 bg-[#C9A96E]/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Title */}
        <h2 className="text-[#C9A96E] font-serif mb-20 tracking-[0.3em]">
          • EXPERIENCE •
        </h2>

        {/* 🎬 Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative bg-white/80 dark:bg-white/5 backdrop-blur-3xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-12 md:p-20 shadow-xl"
          >
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-[2rem] border-2 border-[#C9A96E]/20 pointer-events-none"></div>

            {/* Quote Icon */}
            <FaQuoteLeft className="text-[#C9A96E] opacity-30 text-6xl md:text-8xl absolute top-8 left-10 md:left-14 -z-10" />

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#C9A96E] text-lg" />
              ))}
            </div>

            <p className="text-gray-800 dark:text-gray-200 text-xl md:text-3xl font-serif italic leading-relaxed max-w-4xl mx-auto">
              "{data[index].text}"
            </p>

            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto my-10"></div>

            {/* Avatar & Info */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative p-1 rounded-full border border-[#C9A96E]/50">
                <img
                  src={data[index].image}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                  alt={data[index].name}
                />
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold text-lg tracking-wide">{data[index].name}</h4>
                <span className="text-[#C9A96E] text-xs uppercase tracking-widest block mt-1">
                  {data[index].role}
                </span>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mt-14">
          <button
            onClick={() => setIndex(index - 1 < 0 ? data.length - 1 : index - 1)}
            className="p-4 rounded-full border border-gray-300 dark:border-white/10 text-gray-600 dark:text-white/50 hover:border-[#C9A96E] hover:text-[#C9A96E] dark:hover:border-[#C9A96E] dark:hover:text-[#C9A96E] transition-all duration-300 hover:scale-110"
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-3">
            {data.map((_, i) => (
              <span 
                key={i} 
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${index === i ? 'bg-[#C9A96E] w-6' : 'bg-gray-300 dark:bg-white/20'}`}
              ></span>
            ))}
          </div>

          <button
            onClick={() => setIndex((index + 1) % data.length)}
            className="p-4 rounded-full border border-gray-300 dark:border-white/10 text-gray-600 dark:text-white/50 hover:border-[#C9A96E] hover:text-[#C9A96E] dark:hover:border-[#C9A96E] dark:hover:text-[#C9A96E] transition-all duration-300 hover:scale-110"
          >
            <FaChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;