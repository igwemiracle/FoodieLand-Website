import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import SocialIcons from "../../components/SocialIcons";
import { cn } from "../../utils";
import { icons } from "../../assets/icons";

const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <footer className={cn(`p-4 text-center bg-white text-black`, isDark && `bg-gray-900 text-white`)}>
      <div className="flex flex-col md:flex-row justify-between w-[90%] mx-auto border-b border-solid border-gray-300 pb-6">
        <div className="flex items-start flex-col gap-4 mb-4 md:mb-0">
          {/* <Link to={"/"}>
            <img src={icons.FoodieLand} alt="foodie" />
          </Link> */}
          <Link to={"/"} className="font-lobster text-[24px]">
            Foodieland<span className="text-[orange]">.</span>
          </Link>
          <p className="text-sm md:text-base text-gray-500 dark:text-white">
            Lorem ipsum dolor sit amet, consectetuipisicing elit.
          </p>
        </div>

        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap gap-4 md:gap-16 justify-center">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/recipes"}>Recipes</Link></li>
            <li><Link to={"/blog"}>Blog</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li> <Link to={"/about"}>About us</Link></li>
          </ul>
        </nav>
      </div>

      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 my-6">
        <div className=" md:block"></div>

        <p className={cn(`text-sm md:text-base text-gray-500`, isDark && "text-white")}>
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