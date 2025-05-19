import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { IoMdCloseCircle } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import { motion } from "framer-motion";
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
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 right-6 z-50 bg-primary text-white p-3 rounded-lg shadow-lg hover:bg-secondary transition-all duration-300 md:hidden"
        onClick={handleMenuBtn}
      >
        {!menu && !isToggle ? (
          <CgMenuGridO className="text-2xl" />
        ) : (
          <IoMdCloseCircle className="text-2xl" />
        )}
      </motion.button>

      {header && (
        <motion.header
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className={`header ${isToggle ? "active" : ""} ${
            closeBtn ? "collapsebtn" : ""
          }`}
          ref={myRef}
        >
          <div className="header-logo">
            <motion.h2
              whileHover={{ scale: 1.1 }}
              className="text-4xl font-bold bg-white text-primary px-4 py-2 rounded-tr-2xl rounded-bl-2xl"
            >
              RA
            </motion.h2>
          </div>

          <nav className="nav-menu">
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 10 }}>
                <a href="#home">Home</a>
              </motion.li>
              <motion.li whileHover={{ x: 10 }}>
                <a href="#about">About</a>
              </motion.li>
              <motion.li whileHover={{ x: 10 }}>
                <a href="#service">Service</a>
              </motion.li>
              <motion.li whileHover={{ x: 10 }}>
                <a href="#experience">Experience</a>
              </motion.li>
              <motion.li whileHover={{ x: 10 }}>
                <a href="#portfolio">Portfolio</a>
              </motion.li>
              <motion.li whileHover={{ x: 10 }}>
                <a href="#contact">Contact</a>
              </motion.li>
            </ul>
          </nav>

          <div className="header-icons flex space-x-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              href="https://twitter.com/remyOreo_"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              <FaXTwitter className="text-xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              href="https://www.linkedin.com/in/remy-adedeji"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              <FiLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              href="https://github.com/Oreolion"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              <FiGithub className="text-xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              href="#"
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              <FiFacebook className="text-xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              href="#"
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              <BsInstagram className="text-xl" />
            </motion.a>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleMenuBtn}
            className={`absolute top-1/2 -right-12 bg-white text-primary p-3 rounded-r-xl shadow-lg transition-all duration-300 hidden md:block ${
              closeBtn ? "rotate-180" : ""
            }`}
          >
            {closeBtn ? ">" : "<"}
          </motion.button>
        </motion.header>
      )}
    </>
  );
};

Header.propTypes = {
  menu: PropTypes.bool,
  setMenu: PropTypes.func,
};

export default Header;