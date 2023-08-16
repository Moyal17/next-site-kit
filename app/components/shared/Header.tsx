"use client"
import Logo from "@/app/components/shared/Logo";
import config from "@/app/config/config.json"
import menu from "@/app/config/menu.json";
import Link from "next/link";
import {useRouter} from 'next/navigation';
import React, {useEffect, useRef, useState} from "react";
import {CgClose} from "react-icons/cg";
import {FaChevronDown} from "react-icons/fa";

const Header = () => {
  // distructuring the main menu from menu object
  const {main} = menu;
  // states declaration
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef(null);
  const [direction, setDirection] = useState(null);
  const router = useRouter();

  //sticky header
  useEffect(() => {
    const header = headerRef.current;
    // @ts-ignore
    const headerHeight = header.clientHeight + 200;
    let prevScroll = 0;
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      scrollY > 0 ? setSticky(true) : setSticky(false);
      if (scrollY > headerHeight) {
        // @ts-ignore
        prevScroll > scrollY ? setDirection(-1) : setDirection(1);
        prevScroll = scrollY;
      } else {
        setDirection(null);
      }
    });
  }, []);

  // logo source
  const {logo} = config.site;

  return (
    <>
      <div className="header-height-fix"></div>
      <header
        className={`header flex-row ${sticky && "header-sticky"} ${direction === 1 && "unpinned"}`} ref={headerRef}>
        <nav className="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
          <div className="flex items-center">
            <Logo src={logo} />
          </div>
          <div className="items-center hidden space-x-8 lg:flex">
            {main.map((menu, i) => (
              <span key={`menu-${i}`} className="flex text-gray-600 cursor-pointer transition-colors duration-300">
                <Link href={menu.url} className={`nav-link block`}>
                  {menu.name}
                </Link>
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-5">
            <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
              Register
            </a>
            <a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
              Login
            </a>
          </div>
        </nav>
        </header>
    </>
);
};

export default Header;
