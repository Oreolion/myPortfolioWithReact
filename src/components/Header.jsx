import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { IoMdCloseCircle } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import "animate.css";

const Header = ({ menu, setMenu }) => {
  const [header] = useState(true);
  const [closeBtn, setCloseBtn] = useState(true);
  const [isToggle, setIsToggle] = useState(true);
  const myRef = useRef(null);

  const handleMenuBtn = () => {
    myRef.current.classList.toggle("active");
    setIsToggle(!isToggle);
    setCloseBtn(!closeBtn);
    setMenu(!menu);
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button 
          className="bg-primary hover:bg-gray-800 text-white p-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110"
          onClick={handleMenuBtn}
        >
          {!menu && !isToggle ? (
            <CgMenuGridO className="text-3xl" />
          ) : (
            <IoMdCloseCircle className="text-3xl" />
          )}
        </button>
      </div>

      {header && (
        <header
          className={`header ${isToggle ? "" : "active"} ${closeBtn ? "" : "collapsebtn"}`}
          ref={myRef}
        >
          <div className="header-logo">
            <h2 className="ra">RA</h2>
          </div>

          <nav className="nav-menu">
            <ul className="nav-list">
              <li>
                <a href="#home" onClick={handleMenuBtn}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={handleMenuBtn}>About</a>
              </li>
              <li>
                <a href="#service" onClick={handleMenuBtn}>Service</a>
              </li>
              <li>
                <a href="#experience" onClick={handleMenuBtn}>Experience</a>
              </li>
              <li>
                <a href="#portfolio" onClick={handleMenuBtn}>Portfolio</a>
              </li>
              <li>
                <a href="#contact" onClick={handleMenuBtn}>Contact</a>
              </li>
            </ul>
          </nav>

          <div className="header-icons">
            <a
              href="https://twitter.com/remyOreo_"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              <FaXTwitter className="logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/remy-adedeji"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              <FiLinkedin className="logo" />
            </a>
            <a
              href="https://github.com/Oreolion"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              <FiGithub className="logo" />
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              <FiFacebook className="logo" />
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              <BsInstagram className="logo" />
            </a>
          </div>
        </header>
      )}
    </>
  );
};

Header.propTypes = {
  menu: PropTypes.bool,
  setMenu: PropTypes.func,
};

export default Header;