import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import SocialIcons from "../../components/SocialIcons";
import { cn } from "../../utils";
import { icons } from "../../assets/icons";
import { navLinks } from "../../constants";

const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <footer className={cn(`p-4 text-center bg-white text-black`, isDark && `bg-gray-900 text-white`)}>
      <div className="flex flex-col sm:flex-row justify-between w-[90%] mx-auto border-b border-solid border-gray-300 pb-6">
        <div className="flex items-start flex-col gap-4 mb-4 sm:mb-0">
          <Link to={"/"} className="font-lobster ss:text-base sm:text-[28px]">
            Foodieland<span className="text-[orange]">.</span>
          </Link>
          <p className="text-gray-500 paragraph">
            Lorem ipsum dolor sit amet, consectetuipisicing elit.
          </p>
        </div>

        <nav className="mt-4 ss:mt-0 lg:flex">
          <ul className="flex flex-wrap gap-4 sm:gap-6 lg:gap-16 justify-center items-end">
            {navLinks.map((navlink) => (
              <li key={navlink.id}>
                <Link className="ss:text-xs sm:text-[16px]" to={`${navlink.path}`}>{`${navlink.title}`}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="w-[90%] mx-auto flex ss:flex-col sm:flex-row items-center justify-between gap-4 my-6">
        <div className=" sm:block"></div>

        <p className={cn(`ss:text-[10px] sm:text-[12px] text-gray-500`, isDark && "text-white")}>
          © 2020 Flowbase. Powered by
          <span className="text-[#FF7967]"> Webflow</span>
        </p>

        <div className="flex gap-4">
          <SocialIcons />
        </div>
      </div>
    </footer>


  );
}

export default Footer;