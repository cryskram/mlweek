"use client";

import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="top-0 left-0 w-full z-50 fixed">
      <div className="mx-auto flex flex-wrap justify-between items-center py-4 px-4 md:px-8 backdrop-blur-md bg-transparent bg-opacity-30"> {/* Made background transparent and added backdrop blur */}
        <div className="flex items-center">
          <Image
            src="/bmsce-ieee-cs.png"
            alt="Miesha Logo"
            width={200}
            height={200}
          />
        </div>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-2xl text-white">
            {menuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </button>
        </div>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 font-bold w-full md:w-auto">
            <li>
              <a
                href="/"
                className="text-white hover:text-white/60 hover:underline underline-offset-4 transition duration-200 px-4"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="text-white hover:text-white/60 hover:underline underline-offset-4 transition duration-200 px-4"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="/collaborators"
                className="text-white hover:text-white/60 hover:underline underline-offset-4 transition duration-200 px-4"
              >
                Collaborators and Sponsors
              </a>
            </li>
            <li>
              <a
                href="/committee"
                className="text-white hover:text-white/60 hover:underline underline-offset-4 transition duration-200 px-4"
              >
                Organising Committee
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white hover:text-white/60 hover:underline underline-offset-4 transition duration-200 px-4"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
