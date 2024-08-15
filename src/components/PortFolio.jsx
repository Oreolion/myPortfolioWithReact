import { FcLink, FcSearch } from "react-icons/fc";
import { GiRapidshareArrow } from "react-icons/gi";
import "animate.css";
import { FiGithub } from "react-icons/fi";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      <section className="portfolio" id="portfolio">
        <h1 className="" ref={ref}>
          <span> MY </span> PORTFOLIO
        </h1>

        <div className="inner-portfolio">
          <div className="box">
            <img
              src="/src/assets/images/istockphoto-1759628359-612x612.webp"
              alt="/"
            />
            <div className="icon-box">
              <a
                href="https://ra-platform.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <FcLink className="i" />
              </a>
              <a
                href="https://ra-platform.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <GiRapidshareArrow className="i" />
              </a>
              <a
                href="https://ra-platform.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <FcSearch className="i" />
              </a>
            </div>
            <h6>
              PROJECT 01: AI POWERED READ ALONG(RA) BLOGGING APP WITH NEXTJS &
              TYPESCRIPT
            </h6>
          </div>
          <div className="box">
            <img
              src="/src/assets/images/istockphoto-1906630287-612x612.webp"
              alt="/"
            />

            <div className="icon-box">
              <a
                href="https://dopodcast.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FcLink className="i" />
              </a>
              <a
                href="https://dopodcast.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <GiRapidshareArrow className="i" />
              </a>
              <a
                href="https://dopodcast.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FcSearch className="i" />
              </a>
            </div>
            <h6>
              PROJECT 02: AI POWERED PODCASTING APP WITH NEXTJS & TYPESCRIPT
            </h6>
          </div>

          <div className="box">
            <img
              src="https://media.istockphoto.com/id/1225553594/photo/abstract-art-backgrounds.jpg?b=1&s=170667a&w=0&k=20&c=f38wej3oPfeFgJyfZdu0Jcz-hsjM2Qlp0jLi3GWpH7c="
              alt="/"
            />
            <div className="icon-box">
              <a
                href="https://the-read-along-blog.web.app"
                target="_blank"
                rel="noreferrer"
              >
                <FcLink className="i" />
              </a>
              <a
                href="https://the-read-along-blog.web.app "
                target="_blank"
                rel="noreferrer"
              >
                <GiRapidshareArrow className="i" />
              </a>
              <a
                href="https://the-read-along-blog.web.app "
                target="_blank"
                rel="noreferrer"
              >
                <FcSearch className="i" />
              </a>
            </div>
            <h6>PROJECT 03: THE READ ALONG(RA) BLOGGING APP WITH VUEJS</h6>
          </div>
          <div className="box">
            <img
              src="https://media.istockphoto.com/id/1206638576/photo/website-designer-creative-planning-application-developer-development-draft-sketch-drawing.jpg?b=1&s=170667a&w=0&k=20&c=oBMDUyi-m6ZW6OVArW4kNcsiUpRr7bTD5oGdiDqU708="
              alt="/"
            />

            <div className="icon-box">
              <a
                href="https://shopbyra.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <FcLink className="i" />
              </a>
              <a
                href="https://shopbyra.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <GiRapidshareArrow className="i" />
              </a>
              <a
                href="https://shopbyra.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <FcSearch className="i" />
              </a>
            </div>
            <h6>PROJECT 04: ECOMMERCE PLATFORM WITH REACTJS</h6>
          </div>

          <div className="box">
            <img
              src="https://media.istockphoto.com/id/1325763688/photo/web-design-development-design-studio-creative-process-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=y-KRAivlW6VMvZzzMqt9ngerUIIEu4gP8HLMONKNO4A="
              alt="/"
            />

            <div className="icon-box">
              <a
                href="https://mygithubprofileinfo.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FcLink className="i" />
              </a>
              <a
                href="https://mygithubprofileinfo.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <GiRapidshareArrow className="i" />
              </a>
              <a
                href="https://mygithubprofileinfo.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FcSearch className="i" />
              </a>
            </div>
            <h6>PROJECT 05: MY GITHUB PROFILE APP WITH REACTJS</h6>
          </div>

          <div className="box">
            <img
              src="https://media.istockphoto.com/id/1194380325/photo/design-tools-top-view-of-a-designer-using-graphic-tablet-and-working-with-computer-while.jpg?b=1&s=170667a&w=0&k=20&c=_RKqjnTxOBIqkwlZJliSKWSOP_Xqa1tvTEohC7nGvT0="
              alt="/"
            />

            <div className="icon-box">
              <a
                href="https://urlshortnerapp-dacce.web.app"
                target="_blank"
                rel="noreferrer"
              >
                <FcLink className="i" />
              </a>
              <a
                href="https://urlshortnerapp-dacce.web.app "
                target="_blank"
                rel="noreferrer"
              >
                <GiRapidshareArrow className="i" />
              </a>
              <a
                href="https://urlshortnerapp-dacce.web.app"
                target="_blank"
                rel="noreferrer"
              >
                <FcSearch className="i" />
              </a>
            </div>
            <h6>PROJECT 06: URL SHORTENNING APP WITH VUE.JS</h6>
          </div>

          <div className="box">
            <img
              src="https://media.istockphoto.com/id/1304064507/photo/futuristic-cube-formation-abstract-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=Royb4sIMTr9dQRWmWGxf835l8lYutL8xRQN-o219SbY="
              alt="/"
            />

            <div className="icon-box">
              <a
                href="https://investment-platform-17783.firebaseapp.com"
                target="_blank"
                rel="noreferrer"
              >
                <FcLink className="i" />
              </a>
              <a
                href="https://investment-platform-17783.firebaseapp.com"
                target="_blank"
                rel="noreferrer"
              >
                <GiRapidshareArrow className="i" />
              </a>
              <a
                href="https://investment-platform-17783.firebaseapp.com"
                target="_blank"
                rel="noreferrer"
              >
                <FcSearch className="i" />
              </a>
            </div>
            <h6>PROJECT 07: INVESTMENT PLATFORM WITH VUE</h6>
          </div>
          <div className="box">
            <img
              src="https://media.istockphoto.com/id/1069861272/photo/digital-artist-working-at-home.jpg?b=1&s=170667a&w=0&k=20&c=D5NAgQ-cGQovzCJ6DdXWVgrwS7nw8PLH6o7TtGUZ7s8="
              alt="/"
            />

            <div className="icon-box">
              <a
                href="https://appwith-vue.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FcLink className="i" />
              </a>
              <a
                href="https://appwith-vue.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <GiRapidshareArrow className="i" />
              </a>
              <a
                href="https://appwith-vue.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FcSearch className="i" />
              </a>
            </div>
            <h6>PROJECT 08: TODO APP WITH VUEJS</h6>
          </div>
        </div>
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Oreolion?tab=repositories"
        >
          &#62;&#62; You can also click here check out my github Repositories{" "}
          <FiGithub size={40} className="logo" />
        </a>
      </section>
    </>
  );
};

export default PortFolio;
