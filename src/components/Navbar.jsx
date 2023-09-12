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
      // z-20 will place items on top of other items on the page
      className={`
      ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="logo">
        <Link href="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain logo-img"
          />
        </Link>
      </div>
      <div className="w-full flex justify-between items-center mx-auto">
        <ul className="list-none hidden sm:flex flex-row py-5 fixed gap-6 xl:ml-[900px]">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white xl:text-[15px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* mobile setup */}
        <div className="sm:hidden flex flex-1 justify-end mt-[60px] items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-4 gray-gradient absolute top-20 right-0 mx-4 my-8 min-w-[60px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-black"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
