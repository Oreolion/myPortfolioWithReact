import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useRef } from "react";

const Experiences = () => {


    gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          scale: 0.5,
          
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          rotation: 360,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top center",
            end: "bottom top",
            toggleActions:  "restart none none reset",
          }
        }
      );
  }, []);
  return (
    <>
      <section className="experiences" id="experience">
        <h1 className="" ref={ref}>
          <span> MY </span> EXPERIENCES
        </h1>

        <div className="inner-experience">
          <div className="experiencebox">
            <div className="content-box">
              <h5>2020 - 2021</h5>
              <h2>Front-End Development</h2>
              <p>
                Building personal projects, Freelancing, improving my skills by
                learning frameworks and new technologies and building different
                web Experiences to solve real world problems.
              </p>
            </div>
          </div>
          <div className="experiencebox">
            <div className="content-box">
              <h5>2021 - 2022</h5>
              <h2>Front-End Development</h2>
              <p>
                Building personal projects, Freelancing, improving my skills by
                learning frameworks and new technologies and building different
                web Experiences to solve real world problems.
              </p>
            </div>
          </div>
          <div className="experiencebox">
            <div className="content-box">
              <h5>2022 - 2023</h5>
              <h2>Front-End Development</h2>
              <p>
                Building personal projects, Freelancing, improving my skills by
                learning frameworks and new technologies and building different
                web Experiences to solve real world problems.
              </p>
            </div>
          </div>
          <div className="experiencebox">
            <div className="content-box">
              <h5>2024</h5>
              <h2>Full-Stack Development</h2>
              <p>
                Building personal projects, Freelancing, improving my skills by
                learning frameworks and new technologies and building different
                web Experiences to solve real world problems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experiences;
