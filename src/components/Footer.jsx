import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: <FaLinkedinIn size={25} />,
      href: "https://linkedin.com/in/shelleychenn",
    },
    {
      id: 2,
      child: <FaGithub size={25} />,
      href: "https://github.com/shelleychen318",
    },
  ];

  return (
    <div className="relative bottom-0 left-1/2 transform -translate-x-1/2 pt-24 pb-10 w-fit">
      &#169; Shelley Chen 2023
      <div className="flex items-center justify-center">
        <ul className="flex flex-row">
          {links.map(({ id, child, href }) => (
            <li key={id} className="px-3 pt-4 hover:text-pink">
              <a href={href} target="_blank" rel="noreferrer">
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
