import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child:(
                <FaLinkedinIn size={30} />
            ),
            href:'https://linkedin.com'
        },
        {
            id: 2,
            child:(
                <FaGithub size={30} />
            ),
            href:'https://github.com/shelleychen318'
        },
    ]

    return (
        <div className="hidden lg:flex flex-col top-[45%] left-44 fixed">
            <ul>

                {links.map(({ id, child, href }) => (
                    <li key={id} className="flex justify-between items-center h-14 hover:text-gray" >
                    <a href={href} 
                        className="flex justify-between items-center w-full"
                        target="_blank"
                        rel="noreferrer"
                        >
                        {child}
                    </a>
                </li>
                ))}

                
            </ul>
        </div>
    )
}

export default SocialLinks