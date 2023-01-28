import React, { useState, useEffect } from "react";
import { HiBars2, HiXMark } from "react-icons/hi2";
import Resume from "../assets/pdf/Shelley_Chen_Resume.pdf";
import { Link } from "react-scroll";
import { useScrollPosition } from "../hooks";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      offset : 0
    },
    {
      id: 2,
      link: "about",
      offset : 0
    },
    {
      id: 3,
      link: "portfolio",
      offset : -80, // height of nav bar
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={classNames(
        scrollPosition > 0 ? "shadow-md" : "shadow-none",
        "transition-shadow flex justify-between items-center w-full h-20 px-4 text-brown-700 bg-light_beige fixed z-10 "
      )}
    >
      <div className="ml-2 font-medium md:ml-10">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer text-2xl font-semibold font-logo"
        >
          shelley chen
        </Link>

        {/* <a href="#" className="text-2xl font-logo">shelley chen</a> */}
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, offset }) => (
          <li
            key={id}
            className="mx-6 cursor-pointer capitalize bg-left-bottom bg-gradient-to-r from-pink to-pink bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-400 ease-out"
          >
            <Link to={link} smooth duration={500} offset={offset} >
              {link}
            </Link>
          </li>
        ))}
        <a
          href={Resume}
          target="_blank"
          rel="noreferrer"
          className="mx-6 cursor-pointer bg-left-bottom bg-gradient-to-r from-pink to-pink bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-400 ease-out"
        >
          Resume
        </a>
      </ul>
      
      <div
        onClick={() => {
          setNav(!nav);
          nav ?  enableScroll() : disableScroll();
        }}
        className="cursor-pointer pr-4 z-10 text-text_colour md:hidden"
      >
        {nav ? <HiXMark size={30} /> : <HiBars2 size={30} />}
      </div>
      {/* only show nav bar when nav icon is pressed */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-light_beige">
          {links.map(({ id, link, offset }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-3xl capitalize"
            >
              <Link
                onClick={() => {
                          setNav(!nav);
                          enableScroll();
                        }}
                to={link}
                smooth
                duration={500}
                offset = {offset}
              >
                {link}
              </Link>
            </li>
          ))}
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
            className="px-4 cursor-pointer py-6 text-3xl capitalize"
          >
            Resume
          </a>
        </ul>
      )}
    </div>
  );
};

function disableScroll(){
  document.body.style.overflow = "hidden";
}

function enableScroll(){
  document.body.style.overflow = null;
}


export default NavBar;
