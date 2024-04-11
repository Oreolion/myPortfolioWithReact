import "animate.css";
import picture from '../assets/images/remyr-removebg-preview.png'


const Homepage = () => {
  return (
    <>
      <section id="home" className="homepage">
        <div className="content">
          <h5>Hello World...</h5>
          <h1>
            I AM{" "}
            <span className="
             ">
              REMY ADEDEJI
            </span>
          </h1>
          <h3 className="">I am a front-End developer</h3>
          <p>
            I&apos;m a Front-End Engineer 👨🏼‍💻 and a JavaScript Lover ❤️, I am
            passionate about crafting digital solutions with a strong emphasis
            on design, usability and accessibility. I enjoy creating apps and
            web experiences that involve meaningful interaction with the user.
          </p>
          <a href="#about" className="btn">
            {" "}
            About Me{" "}
          </a>
        </div>
        <div className="image-container">
          <img src={picture} alt="/" />
        </div>
      </section>
    </>
  );
};

export default Homepage;
