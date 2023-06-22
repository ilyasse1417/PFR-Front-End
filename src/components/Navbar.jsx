import { useState } from "react";
import styles from '../style';
import close from "../assets/close.png";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import { navLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
        <img src={logo} alt="hrayfi" className="w-[100px] h-[35px] cursor-pointer" onClick={() => setActive("Accueil")}/>
      </Link>
      <div className="flex grow justify-end">
        <Link to="/SignUp" >
          <button onClick={() => setActive()} className={`${styles.button} mr-8 w-[115px]`}>
            Je m'inscris
          </button>
        </Link>
        
      </div>
      

      <ul className="list-none md:flex hidden justify-end items-center ml-10">
        {navLinks.map((nav, index) => (
          // bug: use the { useLocation } from "react-router-dom" and location.pathname to resolve the active navlink problem
          <li
            key={nav.id}
            className={`hover:text-special font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-special underline underline-offset-[15px] decoration-4" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      
      <div className="md:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;