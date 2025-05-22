import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

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
          toggleActions: "restart none none reset",
        }
      }
    );
  }, []);

const experiences = [
    {
        period: "2020 - 2021",
        title: "Front-End Development",
        description: "Focused on mastering HTML, CSS, and JavaScript. Built several static websites and learned responsive design principles while working on personal and freelance projects."
    },
    {
        period: "2021 - 2022",
        title: "Front-End Development",
        description: "Advanced my skills by learning React and modern JavaScript frameworks. Collaborated with clients to deliver interactive web applications and improved UI/UX design abilities."
    },
    {
        period: "2022 - 2023",
        title: "Front-End Development",
        description: "Worked on larger scale projects using React and Redux. Integrated APIs, optimized performance, and contributed to open-source projects to further enhance my expertise."
    },
    {
        period: "2024 - 2025",
        title: "Full-Stack Development",
        description: "Transitioned to full-stack development by learning Node.js, Express, and MongoDB. Built end-to-end applications, managed databases, and deployed projects to the cloud."
    },
    {
        period: "2025",
        title: "Full-Stack Blockchain Development, AI powered Apps",
        description: "Explored blockchain technologies and smart contract development. Started building AI-powered applications, integrating machine learning APIs, and leveraging decentralized platforms."
    }
];

  return (
    <section className="experiences" id="experience">
      <h1 className="text-center" ref={ref}>
        <span className="text-primary">MY</span> EXPERIENCES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="border-l-4 border-primary pl-6">
              <h5 className="text-primary font-semibold mb-3">{exp.period}</h5>
              <h2 className="text-2xl font-bold mb-4">{exp.title}</h2>
              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;