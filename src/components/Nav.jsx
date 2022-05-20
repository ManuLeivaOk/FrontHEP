import { useState } from "react";
import { Link } from "react-router-dom";
import LogoHEP from "../assets/images/logo.jpeg";
import BurgerMenu from "./BurgerMenu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="justify-between items-center h-20 bg-white text-black sticky top-0 shadow-sm flex">
      <Link to="/" className="pl-8 flex ">
        <img src={LogoHEP} alt="logoHEP" className="w-16 mr-3" />
        <h1 className="font-bold text-xl mt-4 text-gray-600">
          Historia en Podcast
        </h1>
      </Link>

      <div className="px-4 cursor-pointer md:hidden" onClick={toggleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      </div>

      <div className="pr-8 hidden md:block">
        <Link to="/" className="p-4 text-gray-600 hover:text-gray-400 transition-all">
          Inicio
        </Link>
        <Link to="/tienda" className="p-4 text-gray-600 hover:text-gray-400 transition-all">
          Tienda
        </Link>
        <Link to="/blog" className="p-4 text-gray-600 hover:text-gray-400 transition-all">
          Artículos
        </Link>
      </div>
    </nav>
    {isOpen && <BurgerMenu/>}
    </>
  );
};

export default Nav;
