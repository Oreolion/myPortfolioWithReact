import { FcLink, FcSearch } from "react-icons/fc";
import { GiRapidshareArrow } from "react-icons/gi";
import "animate.css";
import { FiGithub } from "react-icons/fi";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const portfolioItems = [
  {
    image:
      "https://media.istockphoto.com/id/1759628359/photo/the-designer-team-is-designing-the-uxui-system-to-make-the-uxui-system-work-well-on-new.webp?b=1&s=612x612&w=0&k=20&c=BFHh_kv5O4N7r-Kz8SsSqFTzvfjIzQ5BdHMGN7x5zHE=",
    title:
      "PROJECT 01: AI POWERED READ ALONG(RA) BLOGGING APP",
    frameworks: "Next.js, TypeScript",
    link: "https://ra-readalong.xyz"
  },
  {
    image:
      "https://media.istockphoto.com/id/1906630287/photo/process-of-creating-an-interface-for-a-mobile-app-user-interface-and-experience-concept.webp?b=1&s=612x612&w=0&k=20&c=qQZlTNdRT9oICOAIfn0-XP-6o4twMrOBKY0Ema0pzTg=",
    title: "PROJECT 02: AI POWERED PODCASTING APP",
    frameworks: "Next.js, TypeScript",
    link: "https://dopodcast.vercel.app/"
  },
  {
    image:
      "https://media.istockphoto.com/id/1225553594/photo/abstract-art-backgrounds.jpg?b=1&s=170667a&w=0&k=20&c=f38wej3oPfeFgJyfZdu0Jcz-hsjM2Qlp0jLi3GWpH7c=",
    title: "PROJECT 03: AI AUTOMATION SERVICES APP",
    frameworks: "NuxtJs, TypeScript",
    link: "https://remyautomates.com"
  },
  {
    image:
      "https://media.istockphoto.com/id/1206638576/photo/website-designer-creative-planning-application-developer-development-draft-sketch-drawing.jpg?b=1&s=170667a&w=0&k=20&c=oBMDUyi-m6ZW6OVArW4kNcsiUpRr7bTD5oGdiDqU708=",
    title: "PROJECT 04: ECOMMERCE PLATFORM",
    frameworks: "React.js",
    link: "https://shopbyra.vercel.app"
  },
  {
    image:
      "https://media.istockphoto.com/id/1325763688/photo/web-design-development-design-studio-creative-process-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=y-KRAivlW6VMvZzzMqt9ngerUIIEu4gP8HLMONKNO4A=",
    title: "PROJECT 05: MY GITHUB PROFILE APP",
    frameworks: "React.js",
    link: "https://mygithubprofileinfo.netlify.app/"
  },
  {
    image:
      "https://media.istockphoto.com/id/1194380325/photo/design-tools-top-view-of-a-designer-using-graphic-tablet-and-working-with-computer-while.jpg?b=1&s=170667a&w=0&k=20&c=_RKqjnTxOBIqkwlZJliSKWSOP_Xqa1tvTEohC7nGvT0=",
    title: "PROJECT 06: URL SHORTENNING APP",
    frameworks: "Vue.js",
    link: "https://urlshortnerapp-dacce.web.app"
  },
  {
    image:
      "https://media.istockphoto.com/id/1304064507/photo/futuristic-cube-formation-abstract-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=Royb4sIMTr9dQRWmWGxf835l8lYutL8xRQN-o219SbY=",
    title: "PROJECT 07: INVESTMENT PLATFORM",
    frameworks: "Vue.js",
    link: "https://investment-platform-17783.firebaseapp.com"
  },
  {
    image:
      "https://media.istockphoto.com/id/1069861272/photo/digital-artist-working-at-home.jpg?b=1&s=170667a&w=0&k=20&c=D5NAgQ-cGQovzCJ6DdXWVgrwS7nw8PLH6o7TtGUZ7s8=",
    title: "PROJECT 08: AI POWERED APP TO DSICOVER AI PROMTS AND PROMPT TEMPLATES",
    frameworks: "Vue.js",
    link: "https://sharepromptsapp.vercel.app"
  }
];

const PortFolio = () => {

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

  return (
    <>
     <section className="portfolio px-4 py-8" id="portfolio">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="text-indigo-600">MY</span> PORTFOLIO
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] bg-white"
          >
            <div className="relative h-60 overflow-hidden transition-all duration-500 group-hover:h-32">
              <img
                src={item.image}
                alt="/"
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-300 group-hover:opacity-10"></div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/90 backdrop-blur-sm">
              <p className="text-sm font-semibold text-gray-800 mb-1">
                {item.title}
              </p>
              <p className="text-xs text-gray-600 mb-2">
                Built with: {item.frameworks}
              </p>
              <div className="flex gap-3 text-xl text-gray-700">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <FcLink />
                </a>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <GiRapidshareArrow />
                </a>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <FcSearch />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        className="flex justify-center items-center gap-2 mt-10 text-indigo-600 hover:underline"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Oreolion?tab=repositories"
      >
        &gt;&gt; You can also click here to check out more projects on my github Repositories
        <FiGithub size={24} />
      </a>
    </section>
    </>
  );
};

export default PortFolio;
