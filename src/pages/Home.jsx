import { useState, useEffect } from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Team from "../components/home/Team";
import Footer from "../components/layout/Footer";
import RiskFree from "../components/home/RiskFree";
import Header from "../components/layout/Header";

const Home = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="text-4xl bg-[#DCECF0] min-h-screen w-dvw">
      <Header visible={visible} />
      <Hero />
      <Services />
      <RiskFree />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
