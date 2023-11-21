import Header from "./components/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Experiences from "./components/Experiences";
import PortFolio from "./components/PortFolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { PiArrowFatLinesUpFill } from "react-icons/pi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        duration: 500,
      });
    }, 500);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

 

  return (
    <>
      <Header />
      <div className="container" data-aos="zoom-out" data-aos-duration="500">
        <Homepage />
        <About />
        <Services />
        <Experiences />
        <PortFolio />
        <Contact />
        <Footer />
      </div>
      <PiArrowFatLinesUpFill className="up-arrow" onClick={scrollToTop} />
    </>
  );
}

export default App;
