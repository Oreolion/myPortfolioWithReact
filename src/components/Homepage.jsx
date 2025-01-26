import "animate.css";
import { TypeAnimation } from "react-type-animation";
import picture from "../assets/images/remyr-removebg-preview.png";
import { useState } from "react";

const Homepage = () => {
  const [textColor, setTextColor] = useState("");
  return (
    <>
      <section id="home" className="homepage">
        <div className="content">
          <h5>Hello World...</h5>
          <h1>
            I AM <br />
            <div
              style={{
                backgroundColor: textColor,
              }}
            >
              <TypeAnimation
                sequence={[
                  "",
                  1000,
                  () => setTextColor("rgb(77, 109, 24)"),

                  "REMY ADEDEJI (RA)",
                  2000,
                ]}
                className="typed__format"
                speed={10}
                repeat={2}
              />
            </div>
          </h1>
          <h3 className="">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "I am a Full-Stack developer",

                1000,
                "I am an AI Powered Apps developer",

                1000,
                "I am a NextJs developer",

                1000,
                "I am a Nuxt developer",

                1000,
                "I am a React developer",

                1000,
                "I am a Vue developer",
                1000,
                "I am a Javascript developer",
                500,
              ]}
              speed={30}
              style={{ fontSize: "1.5rem" }}
              repeat={Infinity}
            />
          </h3>
          <p className="homepage__text">
            I&apos;m a Full-Stack Engineer 👨🏼‍💻, a JavaScript Lover❤️ and AI
            Enthusiast who love to build AI Powered Apps, I am passionate about
            crafting digital solutions with a strong emphasis on design,
            usability and accessibility. I enjoy creating apps and web
            experiences that involve meaningful interaction with the user.
          </p>
          <a href="#about" className="btn">
            {" "}
            About Me{" "}
          </a>
        </div>
        <div className="image-container">
          <img src={picture} alt="my-pic" />
        </div>
      </section>
    </>
  );
};

export default Homepage;
