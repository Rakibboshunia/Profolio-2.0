import { motion } from "framer-motion";

const Marquee = () => {
  const marqueeText = [
    
    "UI/UX DESIGN",
    "FRONTEND DEVELOPER",
    "REACT JS EXPERT",
    "NEXT JS EXPERT",
    "MERN STACK",
    "WEB PERFORMANCE",
    "CREATIVE DEVELOPMENT",
    
  ];

  return (
    <div className="bg-[#C9A96E] py-4 overflow-hidden flex whitespace-nowrap items-center w-full relative z-20 border-y border-[#B0925B]">
      <motion.div
        className="flex gap-10 min-w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Adjust this to make it faster/slower
        }}
      >
        {marqueeText.map((text, index) => (
          <div key={index} className="flex items-center gap-10">
            <h2 className="text-black font-semibold text-xl tracking-[0.2em] uppercase">
              {text}
            </h2>
            <span className="text-black/50 text-2xl">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
