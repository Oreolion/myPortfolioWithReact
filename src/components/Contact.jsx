import { FiPhoneCall } from "react-icons/fi";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import "animate.css"
import {gsap} from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {


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
      <section className="contact-me" id="contact">
        <h1 className="" ref={ref}>
          <span> CONTACT </span> ME
        </h1>

        <div className="inner-contact">
          <div className="box">
            <a
              href="mailto:remyoreo11@gmail.com"
              className="fa-solid fa-envelope"
            >
              <BsFillEnvelopeAtFill />
            </a>
            <h3>my email</h3>
            <p>remyoreo11@gmail.com</p>
            <p>remyoreo00111@outlook.com</p>
          </div>
          <div className="box">
            <a href="tellto:+2348102871625" className="fa-solid fa-phone">
              <FiPhoneCall />
            </a>
            <h3>My Whatsapp</h3>
            <p>+2348102871625</p>
            <p>+2540745633397</p>
          </div>
          <div className="box">
            <a href="https://.google.com/map">
              <FaLocationDot />
            </a>
            <h3>my address</h3>
            <p>p2 admiralty homes and estates, lekki Lagos</p>
          </div>

          <form action="submit">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="email" />
            <input type="number" placeholder="number" />
            <textarea
              name="message"
              id="message"
              placeholder="message"
              cols="30"
              rows="10"
            ></textarea>

            <button type="button" className="btn">
              Send Message
            </button>
          </form>

          <div className="map">
            <iframe
              title="map"
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.820380386513!2d3.5046916755434303!3d6.431916219746633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7a3664a4097%3A0xfa0d054762d72650!2sAdmiralty%20Homes%20Estate!5e0!3m2!1sen!2ske!4v1683887444041!5m2!1sen!2ske"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
