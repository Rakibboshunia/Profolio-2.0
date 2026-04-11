import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

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
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/80 dark:bg-[#111]/60 backdrop-blur-2xl border border-gray-200 dark:border-[#1a1a1a] rounded-3xl p-16 shadow-2xl dark:shadow-[0_0_80px_rgba(0,0,0,0.8)]"
          >

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl border border-[#C9A96E]/20"></div>

            <FaQuoteLeft className="text-[#C9A96E] text-4xl mx-auto mb-10" />

            <p className="text-gray-700 dark:text-gray-300 text-xl max-w-2xl mx-auto">
              “{data[index].text}”
            </p>

            <div className="w-24 h-[1px] bg-[#C9A96E] mx-auto my-12"></div>

            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center gap-4"
            >
              <img
                src={data[index].image}
                className="w-20 h-20 rounded-full border border-[#C9A96E] shadow-lg"
              />
              <h4 className="text-gray-900 dark:text-white">{data[index].name}</h4>
              <span className="text-gray-600 dark:text-gray-500 text-sm">
                {data[index].role}
              </span>
            </motion.div>

          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center gap-8 mt-14">
          <button
            onClick={() => setIndex(index - 1 < 0 ? data.length - 1 : index - 1)}
            className="hover:scale-150 transition border border-[#C9A96E] text-[#C9A96E] px-4 py-2 rounded-md"
          >
            ←
          </button>
          <button
            onClick={() => setIndex((index + 1) % data.length)}
            className="hover:scale-150 transition border border-[#C9A96E] text-[#C9A96E] px-4 py-2 rounded-md"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;