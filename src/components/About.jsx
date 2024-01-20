import "animate.css";
import picture from "../assets/images/remy1-removebg-preview.png";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaReact } from "react-icons/fa6";
import { IoLogoVue } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";

const About = () => {
  return (
    <>
      <section className="about-me" id="about">
        <h1 className="animate__animated animate__fadeInTopLeft animate__infinite">
          ABOUT <span>ME</span>
        </h1>
        <div className="inner-about-me">
          <div className="row1">
            <img src={picture} alt="/" />
          </div>
          <div className="row2">
            <h2>My Name is remy oreo & i am a front-end developer</h2>
            <p>
              I&apos;m a Front-End Engineer 👨🏼‍💻 and a JavaScript Lover ❤️, I am
              passionate about crafting digital solutions with a strong emphasis
              on design, usability and accessibility. I enjoy creating apps and
              web experiences that involve meaningful interaction with the user.
            </p>
            <div className="inner-row-container">
              <div className="inner-row">
                <p>
                  <span>Age:</span> 26
                </p>
                <p>
                  <span>Gender:</span> Male
                </p>
                <p>
                  <span>Language:</span> Yoruba, English
                </p>
                <p>
                  <span>Work:</span> Front-end Developer
                </p>
              </div>
              <div className="inner-row1">
                <p>
                  <span>Freelance:</span> Available
                </p>
                <p>
                  <span>phone:</span> +2348102871625
                </p>
                <p>
                  <span>Email:</span> Remyoreo11@gmail.com
                </p>
                <p>
                  <span>Country:</span> Nigeria
                </p>
              </div>
            </div>
            <a href="#" className="btn" style={{ marginRight: 10 }}>
              Download CV
            </a>
            <a href="#contact" className="btn">
              Hire Me
            </a>
          </div>
        </div>

        <div className="skillsbox">
          <h1>
            <span> MY </span> SKILLS
          </h1>

          <div className="logos__container">
            <FaHtml5 size={30}  />
            <IoLogoCss3 size={30} />
            <IoLogoJavascript className="i" size={30} />
            <SiTypescript size={30} />
            <FaReact className="i" size={30} />
            <IoLogoVue size={30} />
            <TbDeviceMobileCode size={30} className="i"/>

          </div>
        </div>

        <div className="about-skills">
          <div className="inner-about-skills">
            <div className="progress1">
              <p>
                HTML <span>90%</span>
              </p>
              <div className="progressbar">
                <span></span>
              </div>
            </div>
            <div className="progress2">
              <p>
                CSS <span>80%</span>
              </p>
              <div className="progressbar">
                <span></span>
              </div>
            </div>
            <div className="progress3">
              <p>
                JAVASCRIPT <span>75%</span>
              </p>
              <div className="progressbar">
                <span></span>
              </div>
            </div>
            <div className="progress3">
              <p>
                TYPESCRIPT <span>75%</span>
              </p>
              <div className="progressbar">
                <span></span>
              </div>
            </div>
            <div className="progress4">
              <p>
                REACT <span>80%</span>
              </p>
              <div className="progressbar">
                <span></span>
              </div>
            </div>
            <div className="progress4">
              <p>
                VUE.JS <span>80%</span>
              </p>
              <div className="progressbar">
                <span></span>
              </div>
            </div>
            <div className="progress5">
              <p>
                RESPONSIVE DESIGN <span>90%</span>
              </p>
              <div className="progressbar">
                <span></span>
              </div>
            </div>
            <div className="progress6">
              <p>
                WEB DESIGN <span>80%</span>
              </p>
              <div className="progressbar">
                <span></span>
              </div>
            </div>
          </div>

          <div className="box-container">
            <div className="box">
              <h2>&gt;&gt;2+</h2>
              <p>Years of experience</p>
            </div>
            <div className="box">
              <h2>&gt;&gt;20+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="box">
              <h2>&gt;&gt;50+</h2>
              <p>projects completed</p>
            </div>
            <div className="box">
              <h2>&gt;&gt;5+</h2>
              <p>Awards won</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
