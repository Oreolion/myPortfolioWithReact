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
import "../src/index.css"
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor1Style({ top: e.pageY, left: e.pageX, active: false });
      setCursor2Style({ top: e.pageY, left: e.pageX, active: false });
    };

    const handleMouseEnter = () => {
      setCursor1Style((prev) => ({ ...prev, active: true }));
      setCursor2Style((prev) => ({ ...prev, active: true }));
    };

    const handleMouseLeave = () => {
      setCursor1Style((prev) => ({ ...prev, active: false }));
      setCursor2Style((prev) => ({ ...prev, active: false }));
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
    <div className="flex min-h-screen bg-background">
      <Header 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen || mobileMenuOpen ? 'md:ml-64' : 'ml-0'}`}>
        <div className="relative">
          <div style={cursor1Style} className="cursor-1" />
          <div style={cursor2Style} className="cursor-2" />

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
      </main>
    </div>
  );
}

export default App;