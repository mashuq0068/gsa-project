import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons for the hamburger menu

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the mobile menu

  useEffect(() => {
    setActive(window.location.pathname);

    // Scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`lg:fixed top-0 left-0 w-full text-white py-4 transition-all duration-300 z-50 ${
        isScrolled ? "bg-gray-800 text-white shadow-md" : "lg:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <img src="/images/logo.png" alt="GSA Logo" className="w-20 h-20 rounded-full" />

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center space-x-6">
          <nav className="flex space-x-6">
            {[
              { path: "/", label: "Home" },
              { path: "/about-us", label: "About Us" },
              { path: "/team", label: "Our Team" },
              { path: "/programs", label: "Our Programs" },
            ].map(({ path, label }) => (
              <a
                key={path}
                href={path}
                className={`pb-1 transition-colors duration-300 hover:text-gray-300 ${
                  active === path ? "border-b-2 border-white" : ""
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <button className="bg-orange-400 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all">
            Donate
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-0 left-0 w-full z-50 h-full bg-gray-800 bg-opacity-90 py-6 px-6 space-y-6 text-center`}
      >
         <div className="lg:hidden flex justify-end items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          {[
            { path: "/", label: "Home" },
            { path: "/about-us", label: "About Us" },
            { path: "/team", label: "Our Team" },
            { path: "/programs", label: "Our Programs" },
          ].map(({ path, label }) => (
            <a
              key={path}
              href={path}
              className={`transition-colors duration-300 hover:text-gray-300 w-max mx-auto text-white ${
                active === path ? "border-b-2  border-white" : ""
              }`}
              onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="bg-orange-400 hover:bg-orange-600 text-white py-3 px-8 rounded-full transition-all"
          onClick={() => setIsMenuOpen(false)} // Close the menu when the button is clicked
        >
          Donate
        </button>
      </div>
    </header>
  );
};

export default Navbar;
