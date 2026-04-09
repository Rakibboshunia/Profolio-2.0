import Navbar from "../components/layout/Navbar";
import MenuOverlay from "../components/layout/MenuOverlay";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Testimonial from "../sections/Testimonial";
import Contact from "../sections/Contact";
import Footer from "../components/layout/Footer";
import { useState } from "react";
import Services from "../sections/Services";
import Projects from "../sections/Projects";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar setOpen={setOpen} />
      <MenuOverlay open={open} setOpen={setOpen} />

      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;