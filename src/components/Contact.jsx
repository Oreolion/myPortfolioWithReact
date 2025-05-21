import { FiPhoneCall } from "react-icons/fi";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import "animate.css";
import { gsap } from "gsap";
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
          toggleActions: "restart none none reset",
        }
      }
    );
  }, []);

  return (
    <section className="contact-me bg-gray-50" id="contact">
      <h1 className="text-center mb-16" ref={ref}>
        <span className="text-primary">CONTACT</span> ME
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg transform hover:scale-105 transition-all duration-300">
            <a
              href="mailto:remyoreo11@gmail.com"
              className="inline-block text-4xl text-primary mb-4 hover:scale-110 transition-transform"
            >
              <BsFillEnvelopeAtFill />
            </a>
            <h3 className="text-xl font-semibold mb-4">My Email</h3>
            <p className="text-gray-600 mb-2">remyoreo11@gmail.com</p>
            <p className="text-gray-600">remyoreo00111@outlook.com</p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-lg transform hover:scale-105 transition-all duration-300">
            <a
              href="tel:+2348102871625"
              className="inline-block text-4xl text-primary mb-4 hover:scale-110 transition-transform"
            >
              <FiPhoneCall />
            </a>
            <h3 className="text-xl font-semibold mb-4">My WhatsApp</h3>
            <p className="text-gray-600 mb-2">+2348102871625</p>
            <p className="text-gray-600">+2540745633397</p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-lg transform hover:scale-105 transition-all duration-300">
            <a
              href="https://goo.gl/maps/1234"
              className="inline-block text-4xl text-primary mb-4 hover:scale-110 transition-transform"
            >
              <FaLocationDot />
            </a>
            <h3 className="text-xl font-semibold mb-4">My Address</h3>
            <p className="text-gray-600">p2 admiralty homes and estates, lekki Lagos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors mb-6"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors mb-6"
            ></textarea>
            <button type="submit" className="btn w-full text-center justify-center">
              Send Message
            </button>
          </form>

          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              title="map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.820380386513!2d3.5046916755434303!3d6.431916219746633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7a3664a4097%3A0xfa0d054762d72650!2sAdmiralty%20Homes%20Estate!5e0!3m2!1sen!2ske!4v1683887444041!5m2!1sen!2ske"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;