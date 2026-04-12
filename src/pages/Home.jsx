import Hero from "../sections/Hero";
import SEOHelmet from "../components/common/SEOHelmet";
import Marquee from "../components/common/Marquee";

const Home = () => {
  return (
    <>
      <SEOHelmet title="Home | Boshunia" />
      <Hero />
      <Marquee />
    </>
  );
};

export default Home;