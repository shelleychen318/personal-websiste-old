import React from "react";
import Photo from "../assets/photo.png";
import { HiArrowRight } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  const links = [
    {
      id: 1,
      child: <FaLinkedinIn size={30} />,
      href: "https://linkedin.com/in/shelleychenn",
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: "https://github.com/shelleychen318",
    },
  ];

  return (
    <div name="home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row border-b-4 border-b-dark_beige">
        <div className="hidden lg:flex flex-col top-[45%]">
          <ul>
            {links.map(({ id, child, href }) => (
              <li
                key={id}
                className="flex justify-between items-center h-14 w-full hover:text-pink"
              >
                <a href={href} target="_blank" rel="noreferrer">
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col min-w-fit max-w-full justify-center items-center mx-4 md:ml-20 md:items-baseline">
          <h2 className="flex text-3xl font-semibold sm:text-4xl lg:text-7xl ">
            Hi, I'm Shelley!
          </h2>
          <p className="py-6 max-w-xl md:text-xl">
            Designer, developer, and lifelong learner.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-pink cursor-pointer"
              offset={-160}
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Photo}
            alt="me"
            className="rounded-full mx-auto w-2/3 max-w-fit md:w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
