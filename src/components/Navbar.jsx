import React, { useState } from "react";
import logo from "../assets/nashwood-nw-icon-logo-white-rgb-640px-w-72ppi.png";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`
    ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain logo-img"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row py-5 ml-40 fixed ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end mt-[60px] items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
