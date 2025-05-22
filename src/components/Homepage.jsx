import "animate.css";
import { TypeAnimation } from "react-type-animation";
import picture from "../assets/images/remyr-removebg-preview.png";
import { useState } from "react";

const Homepage = () => {
  const [textColor, setTextColor] = useState("");
  
  return (
    <section id="home" className="flex min-h-screen items-center justify-between px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
        <div className="w-full md:w-1/2 animate__animated animate__fadeInLeft">
          {/* <h5 className="text-xl text-primary mb-4">Hello World...</h5> */}
          <h1 className="text-5xl font-bold mb-6">
            I AM <br />
            <div
              className="inline-block"
              style={{
                // backgroundColor: textColor,
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
                className="typed__format text-4xl md:text-5xl font-bold text-primary"
                speed={10}
                repeat={2}
              />
            </div>
          </h1>
          <h3 className="text-2xl md:text-3xl mb-6">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "I am a Full-Stack & Blockchain developer",
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
              className="text-gray-700"
              repeat={Infinity}
            />
          </h3>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl">
            I&apos;m a Full-Stack Engineer 👨🏼‍💻, Blockchain and AI
            Enthusiast❤️, i love to build AI Powered Apps, Blockchain integrated Apps. I am passionate about
            crafting digital solutions with a strong emphasis on functionality, design,
            usability and accessibility.
          </p>
          <a href="#about" className="btn inline-flex items-center gap-2 text-lg">
            About Me
            <span className="animate-bounce">→</span>
          </a>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center animate__animated animate__fadeInRight">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30"></div>
            <img 
              src={picture} 
              alt="my-pic" 
              className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;