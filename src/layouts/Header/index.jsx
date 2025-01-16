import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { ThemeContext } from "../../contexts/ThemeContext";
import SocialIcons from "../../components/SocialIcons";
import IsMobileDev from "../../components/IsMobileHeader";
import { navLinks } from "../../constants";

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setScrolled(currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 ss:py-3 sm:py-6 lg:border-b lg:border-gray-300 bg-white transition-transform duration-700 ease-in-out
        ${scrolled ? "shadow-md bg-gray-50" : ""}
        ${scrolled && scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <div className="flex items-center ss:gap-4 lg:gap-6">
            {/* Menu Button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={35} style={{ width: "auto" }} className="w-8 h-8 ss:w-8 ss:h-8 sm:w-14 sm:h-14" />
            </button>
            {/* Logo */}
            <Link to={"/"} className="font-lobster ss:text-base sm:text-[28px]">
              Foodieland<span className="text-[orange]">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="lg:flex hidden">
            <ul className="flex gap-8">
              {navLinks.map((navlink) => (
                <li key={navlink.id}>
                  <Link to={`${navlink.path}`}>{`${navlink.title}`}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <SocialIcons className="hidden lg:block" />
        </div>
      </header>

      {/* Mobile Navigation */}
      <IsMobileDev isMenuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
