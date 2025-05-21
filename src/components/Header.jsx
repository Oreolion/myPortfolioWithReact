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

  window.onscroll = () => {
    myRef.current.classList.remove("active");
    setMenu(false);
    setCloseBtn(false);
    setIsToggle(false);
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        {!menu && !isToggle ? (
          <CgMenuGridO className="text-4xl cursor-pointer" id="menu-bar" onClick={handleMenuBtn} />
        ) : (
          <IoMdCloseCircle className="text-4xl cursor-pointer" id="menu-bar" onClick={handleMenuBtn} />
        )}
      </div>

      {header && (
        <header
          className={
            isToggle
              ? "header active"
              : `header ${closeBtn} ? " collapsebtn " : "" `
          }
          ref={myRef}
        >
          <div className="header-logo">
            <h2 className="ra">RA</h2>
          </div>

          <nav className="nav-menu">
            <ul className="nav-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="header-icons">
            <a
              href="https://twitter.com/remyOreo_"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter className="logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/remy-adedeji"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className="logo" />
            </a>
            <a
              href="https://github.com/Oreolion"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className="logo" />
            </a>
            <a href="#">
              <FiFacebook className="logo" />
            </a>
            <a href="#">
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