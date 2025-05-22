import { FaCode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbDeviceMobileCode, TbBrandNextjs } from "react-icons/tb";
import { FcMusic } from "react-icons/fc";
import { GiLargePaintBrush } from "react-icons/gi";
import { SiNuxtdotjs } from "react-icons/si";
import "animate.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

const Services = () => {
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
        },
      }
    );
  }, []);

  const services = [
    {
      icon: TbBrandNextjs,
      title: "NextJs Developer",
      description:
        "Next.Js is a great Javascript Framework built on React.Js Library for building Full stack web applications.",
    },
    {
      icon: SiNuxtdotjs,
      title: "Nuxt Developer",
      description:
        "Nuxt.Js is a great Javascript framework built on Vue.js Library for building Full stack web applications.",
    },
    {
      icon: FaCode,
      title: "Blockchain (Solidity Developer)",
      description:
        "Building decentralized applications and smart contracts on Ethereum using Solidity and web3 technologies.",
    },
    {
      icon: FaCode,
      title: "AI Powered Apps",
      description:
        "I am passionate about crafting AI powered digital solutions with a strong emphasis on usability, accessibility and designs.",
    },
    {
      icon: FaCode,
      title: "AI Agents Developer",
      description:
        "Building agentic apps and AI agents connected to social media platforms like X (Twitter), Telegram, and more.",
    },
    {
      icon: FaReact,
      title: "React Developer",
      description:
        "So Grateful to the Creators of React from Meta, they made building cool digital experiences so delightful.",
    },
    {
      icon: IoLogoJavascript,
      title: "JavaScript Developer",
      description:
        "I love solving problems and Building Web and Mobile experiences with Javascript❤️",
    },
    {
      icon: TbDeviceMobileCode,
      title: "Responsive Design",
      description:
        "I Develop mobile and screen Responsive Digital experiences including web accessibilites.",
    },
    {
      icon: FcMusic,
      title: "Music Art",
      description:
        "When i am not building Digital Experiences or Applications, I absolutely enjoy making Music❤️",
    },
    {
      icon: GiLargePaintBrush,
      title: "SEO Expert",
      description:
        "Providing Leads for Marketing and Search Engine Optimization.",
    },
  ];

  return (
    <section className="service" id="service">
      <h1 ref={ref}>
        <span>MY</span> SERVICES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center justify-center mb-6">
              <service.icon className="text-5xl text-primary" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;