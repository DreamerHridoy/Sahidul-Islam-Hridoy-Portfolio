import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="home" smooth={true} duration={500}>
            MyPortfolio
          </Link>
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {["home", "about", "skills", "education", "projects", "contacts"].map(
            (section) => (
              <li key={section} className="hover:text-gray-400 cursor-pointer">
                <Link to={section} smooth={true} duration={500}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:block bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 text-center">
          <ul>
            {[
              "home",
              "about",
              "skills",
              "education",
              "projects",
              "contacts",
            ].map((section) => (
              <li
                key={section}
                className="py-2 border-b border-gray-600 hover:text-gray-400 cursor-pointer"
              >
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="/resume.pdf"
            download
            className="block bg-blue-500 px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
