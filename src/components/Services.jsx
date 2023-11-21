import { FaCode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FcMusic } from "react-icons/fc";
import { GiLargePaintBrush } from "react-icons/gi";
import "animate.css"

const Services = () => {
  return (
    <>
      <section className="service" id="service">
        <h1 className="animate__animated animate__fadeInTopLeft animate__infinite">
          <span> MY </span> SERVICES
        </h1>
        <div className="servicebox-container">
          <div className="box">
            <div className="icon-box">
              <i className="fa-solid fa-code"></i>
              <FaCode className="i"/>
            </div>
            <h3>Web design</h3>
            <p>
            I am passionate about crafting digital solutions with a strong emphasis on design
            </p>
          </div>
          <div className="box">
            <div className="icon-box">
              <IoLogoJavascript className="i"/>
            </div>
            <h3>JavaScript Developer </h3>
            <p>
             I love solving problems and Building Web and Mobile experiences with Javascript❤️
            </p>
          </div>
          <div className="box">
            <div className="icon-box">
              <TbDeviceMobileCode className="i"/>
            </div>
            <h3>Responsive design</h3>
            <p>
              I Develop mobile and screen Responsive Digital experiences including web accessibilites.
            </p>
          </div>
          <div className="box">
            <div className="icon-box">
              <FaReact className="i"/>
            </div>
            <h3>React Developer</h3>
            <p>
              So Grateful to the Creators of React from Meta, they made building cool digital experiences so delightful.
            </p>
          </div>
          <div className="box">
            <div className="icon-box">
              <FcMusic className="i"/>
            </div>
            <h3>MUSIC ART</h3>
            <p>
              When i am not building Digital Experiences or Applications, I absolutely enjoy making Music❤️
            </p>
          </div>
          <div className="box">
            <div className="icon-box">
              <GiLargePaintBrush className="i"/>
            </div>
            <h3>Web Scraper</h3>
            <p>
              Providing Leads for Marketing and Search Engine Operations
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
