import { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { cn } from "../../utils";
import { X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { icons } from "../../assets/icons";
import SocialIcons from "../SocialIcons";
import { navLinks } from "../../constants";


const IsMobileDev = ({ isMenuOpen, closeMenu }) => {
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Cleanup when the component unmounts
    };
  }, [isMenuOpen]);

  return (
    <div
      className={cn(
        `flex flex-col justify-between fixed inset-0 w-screen min-h-screen overflow-hidden z-[9999] bg-white  p-4 transform transition-transform duration-500 ease-in-out  `,
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div>
        <div className="flex justify-between">
          <Link to="/" onClick={closeMenu}>
            <img
              className="w-44 ss:w-24 sm:w-40"
              src={icons.FoodieLand}
              alt="FoodieLand Logo"
            />
          </Link>
          <div>
            <X size={30} className="ss:text-[96px] cursor-pointer" onClick={closeMenu} />
          </div>
        </div>
        {/* NavLinks Section */}
        <div className="flex flex-col gap-6 text-xl sm:text-3xl justify-start mt-4">
          {navLinks.map((navlink) => (
            <Link key={navlink.id} to={navlink.path} onClick={closeMenu}>
              {navlink.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col items-center gap-8">
        <p className={cn("text-gray-500", isDark && "text-white")}>
          © 2020 Flowbase. Powered by
          <span className="text-[#FF7967]"> Webflow</span>
        </p>
        <SocialIcons />
      </div>
    </div>
  );
};



export default IsMobileDev;