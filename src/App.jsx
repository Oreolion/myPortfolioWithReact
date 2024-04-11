import { useState } from "react";
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
  const [cursor1Style, setCursor1Style] = useState({
    top: 0,
    left: 0,
    active: false,
  });
  const [cursor2Style, setCursor2Style] = useState({
    top: 0,
    left: 0,
    active: false,
  });
  const [hideButton, setHideButton] = useState(true);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setHideButton(true);
      } else {
        setHideButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor1Style({ top: e.pageY, left: e.pageX, active: false });
      setCursor2Style({ top: e.pageY, left: e.pageX, active: false });
    };

    const handleMouseEnter = () => {
      setCursor1Style({ ...cursor1Style, active: true });
      setCursor2Style({ ...cursor2Style, active: true });
    };

    const handleMouseLeave = () => {
      setCursor1Style({ ...cursor1Style, active: false });
      setCursor2Style({ ...cursor2Style, active: false });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <div className="container" data-aos="zoom-out" data-aos-duration="500">
        {/* custom cursor */}

        <div style={cursor1Style} className="cursor-1"></div>
        <div style={cursor2Style} className="cursor-2"></div>

        <Homepage />
        <About />
        <Services />
        <Experiences />
        <PortFolio />
        <Contact />
        <Footer />
      </div>
      <PiArrowFatLinesUpFill
        style={{ display: hideButton ? "none" : "block" }}
        className="up-arrow animate__animated animate__backInRight"
        onClick={scrollToTop}
      />
    </>
  );
}

export default App;
