import "animate.css";

const Homepage = () => {
  return (
    <>
      <section id="home" className="homepage">
        <div className="content">
          <h5>Hi There...</h5>
          <h1>
            I AM{" "}
            <span className="animate__animated  animate__slideInRight
             animate__infinite">
              REMY OREO
            </span>
          </h1>
          <h3 className="animate__animated  animate__slideInLeft animate__infinite">I am a front-End developer</h3>
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
          <img src="/src/assets/images/remyr-removebg-preview.png" alt="/" />
        </div>
      </section>
    </>
  );
};

export default Homepage;
