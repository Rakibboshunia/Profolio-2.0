import img1 from "../assets/E-com.jpg";
import img2 from "../assets/landing page.webp";
import img3 from "../assets/dashboard.webp";

export const projectsData = [
  {
    id: 1,
    title: "OREBI E-Commerce",
    category: "E-Commerce",
    badgeLabel: "E-COMMERCE",
    description:
      "A premium e-commerce platform featuring complex filtering, cart management, and a high-performance architecture.",
    tags: ["#React", "#TailwindCSS", "#Redux"],
    image: img1,
    githubLink: "https://github.com/Rakibboshunia",
    liveLink: "#",
    overview:
      "OREBI is a fully functional front-end e-commerce concept built for performance and premium aesthetics. It prioritizes user experience through intuitive filtering and robust cart state management.",
    challenges:
      "One of the major challenges was ensuring that category nesting and complex attribute filtering didn't affect the scroll performance and that state was managed smoothly without redundant re-renders.",
    solution:
      "Implemented Redux logic to centralize cart logic and utilized memoized selectors to securely and rapidly slice state variables, guaranteeing an ultra-responsive UI.",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    title: "Gericht Fine Dining",
    category: "Landing Page",
    badgeLabel: "LANDING PAGE",
    description:
      "A visually stunning immersive web experience for high-end dining, focusing on elegant typography and smooth animations.",
    tags: ["#React", "#CSS3", "#FramerMotion"],
    image: img2,
    githubLink: "https://github.com/Rakibboshunia",
    liveLink: "#",
    overview:
      "Designed specifically for luxury clientele, the Gericht Fine Dining app relies heavily on visual storytelling, micro-animations, and striking high-contrast imagery to deliver a digital experience akin to fine dining.",
    challenges:
      "Managing excessive high-res imagery while keeping the website lightweight and guaranteeing fluid scrolling performance on mobile environments without stuttering.",
    solution:
      "Utilized Framer Motion for scroll-linked animations and lazy-loaded image assets. CSS variables were employed rigorously to ensure immediate theme adaptability.",
    technologies: ["React", "CSS3", "Framer Motion", "Vite"],
  },
  {
    id: 3,
    title: "UNIAO Agency",
    category: "Landing Page",
    badgeLabel: "LANDING PAGE",
    description:
      "A bold, modern agency portfolio designed to showcase high-impact services and creative excellence.",
    tags: ["#React", "#FramerMotion", "#Tailwind"],
    image: img3,
    githubLink: "https://github.com/Rakibboshunia",
    liveLink: "#",
    overview:
      "The UNIAO Agency platform is developed to act as an authoritative digital footprint for an agency. Its bold typography and unorthodox grids echo the creative nature of the services offered.",
    challenges:
      "Translating chaotic and highly customized Figma designs into mathematically robust, responsive grids that wouldn't break on odd aspect ratios.",
    solution:
      "Created dynamic layout components using modern CSS Grid and Tailwind flex utilities to ensure mathematical precision without losing the creative edge. Nested animations provide additional flair.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Context API"],
  },
];
