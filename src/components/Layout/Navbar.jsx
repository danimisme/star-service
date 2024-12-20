import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/slices/DarkModeSlice";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  window.onscroll = function () {
    if (window.scrollY >= 100 && window.scrollY < 300) {
      setNavStyle("navbar-hide");
    } else if (window.scrollY >= 300) {
      setNavStyle("navbar-scrolled");
    } else {
      setNavStyle("navbar-show");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "section2", "section4", "contact"]; // Daftar ID section yang ingin dipantau

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 150 && top >= -section.clientHeight) {
            setActiveSection(sectionId); // Update state jika section terlihat di layar
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navbarToggle = document.getElementById("navbar-toggle");
    const closeNavbar = (e) => {
      if (isOpen) {
        if (
          e.target !== navbarToggle &&
          e.target !== navbarToggle.children[0]
        ) {
          setIsOpen(false);
        }
      }
    };
    window.addEventListener("click", function (e) {
      closeNavbar(e);
    });
    return () => {
      window.removeEventListener("click", function (e) {
        closeNavbar(e);
      });
    };
  }, [isOpen]);

  return (
    <nav
      className={`bg-transparent fixed top-0 left-0 w-full flex items-center z-10 transition duration-300 ${navStyle}`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4 flex place-items-center">
            <div
              className={`text-xl md:text-2xl lg:text-3xl block py-1 hover:opacity-800 text-primary font-sans dark:text-purple-500 [text-shadow:_-2px_4px_4px_rgb(0_0_0_/_30%)] dark:[text-shadow:_2px_2px_2px_rgb(163_83_219_/_40%)] font-extrabold tracking-widest flex items-center`}
            >
              {/* <span>S T</span> */}
              {/* <GrStarOutline className="inline me-1"/> */}
              <img src="./images/logo.png" className="w-10" alt="" />
              <span className="ms-2">STAR</span>
              <span className="ms-2">SERVICE</span>
            </div>
          </div>
          <div className="flex items-center px-4">
            <div
              className={` ${
                isOpen ? "block" : "hidden"
              }  absolute my-3 py-3 lg:py-0 bg-white dark:bg-slate-700 dark:shadow-slate-950 lg:dark:bg-transparent shadow-md rounded-lg max-w-[250px] w-full right-4 top-full overflow-hidden lg:block lg:relative lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none `}
            >
              <ul className="block lg:flex items-center ">
                <li className="group  flex">
                  <a
                    href="#"
                    className={`nav-link text-base text-dark dark:text-white py-2 mx-8 group-hover:text-primary ${
                      activeSection === "home" ? "active" : ""
                    }
                    }`}
                  >
                    Home
                  </a>
                </li>
                <li className="group  flex">
                  <a
                    href="#section2"
                    className={`nav-link text-base text-dark dark:text-white py-2 mx-8 group-hover:text-primary ${
                      activeSection === "section2" ? "active" : ""
                    }
                    }`}
                  >
                    Our Service
                  </a>
                </li>
                <li className="group  flex">
                  <a
                    href="#section4"
                    className={`nav-link text-base text-dark dark:text-white py-2 mx-8 group-hover:text-primary ${
                      activeSection === "section4" ? "active" : ""
                    }
                    }`}
                  >
                    About US
                  </a>
                </li>
                <li className="group  flex">
                  <a
                    href="#contact"
                    className={`nav-link text-base text-dark dark:text-white py-2 mx-8 group-hover:text-primary ${
                      activeSection === "contact" ? "active" : ""
                    }
                    }`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="relative h-12 w-12 mb-0 lg:mb-2 mt-1 lg:mt-0 ">
              <button
                className={`${!darkMode ? `translate-y-10 opacity-0` : "translate-y-0 opacity-100"} toggle-button text-white hover:bg-slate-950`}
                onClick={() => dispatch(toggleDarkMode())}
              >
                <CiLight />
              </button>
              <button
                className={`${darkMode ? `-translate-y-10 opacity-0` : "translate-y-0 opacity-100"} toggle-button hover:bg-slate-200`}
                onClick={() => dispatch(toggleDarkMode())}
              >
                <CiDark />
              </button>
            </div>

            <button
              id="navbar-toggle"
              name="navbar-toggle"
              type="button"
              className={`block  lg:hidden ${isOpen ? "hamburger-active" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}