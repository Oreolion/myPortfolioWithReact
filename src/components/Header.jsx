import PropTypes from "prop-types";
import { IoMdCloseCircle } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin, FiFacebook, FiGithub, FiMenu } from "react-icons/fi";
import "animate.css";

const Header = ({ sidebarOpen, setSidebarOpen, mobileMenuOpen, setMobileMenuOpen }) => {
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 bg-primary hover:bg-gray-800 text-white p-3 rounded-lg shadow-lg transition-all duration-300"
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? (
          <IoMdCloseCircle className="text-2xl" />
        ) : (
          <FiMenu className="text-2xl" />
        )}
      </button>

      {/* Sidebar Toggle */}
      <button 
        className="hidden md:block fixed top-4 left-4 z-50 bg-primary hover:bg-gray-800 text-white p-3 rounded-lg shadow-lg transition-all duration-300"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? (
          <IoMdCloseCircle className="text-2xl" />
        ) : (
          <FiMenu className="text-2xl" />
        )}
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen bg-gray-800 text-white transition-all duration-300 
        ${sidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'} 
        ${mobileMenuOpen ? 'translate-x-0' : ''} 
        md:translate-x-0 z-40`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary">RA</h2>
          </div>

          <nav className="flex-1">
            <ul className="space-y-4">
              {['home', 'about', 'service', 'experience', 'portfolio', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="block py-3 px-4 rounded-lg transition-all duration-300 hover:bg-primary hover:text-white transform hover:translate-x-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex justify-center gap-4 mt-auto">
            {[
              { icon: FaXTwitter, href: "https://twitter.com/remyOreo_" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/remy-adedeji" },
              { icon: FiGithub, href: "https://github.com/Oreolion" },
              { icon: FiFacebook, href: "#" },
              { icon: BsInstagram, href: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

Header.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
  mobileMenuOpen: PropTypes.bool.isRequired,
  setMobileMenuOpen: PropTypes.func.isRequired,
};

export default Header;