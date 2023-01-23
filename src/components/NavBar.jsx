import React, { useState } from 'react'
import { HiBars2, HiXMark } from "react-icons/hi2";
import Resume from '../assets/pdf/Resume_Fall_2022.pdf';
import { Link } from 'react-scroll';

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'resume',
            href: Resume,
            
        }
    ];  

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-brown-700 bg-light_beige fixed z-10">
            <div className="ml-2 font-medium md:ml-10">
                <Link to="home" smooth duration={500}
                className="cursor-pointer text-2xl font-logo">
                    shelley chen
                </Link>

                {/* <a href="#" className="text-2xl font-logo">shelley chen</a> */}
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="mx-6 cursor-pointer capitalize bg-left-bottom bg-gradient-to-r from-pink to-pink bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-400 ease-out"
                    >
                        <Link to={link} smooth duration={500}>
                        {link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-text_colour md:hidden"
            >
                {nav ? <HiXMark size={30} /> : <HiBars2 size={30} />}
            </div>

            {/* only show nav bar when nav icon is pressed */}
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-light_beige ">
                    {links.map(({id, link}) => (
                        <li 
                        key={id}
                        className="px-4 cursor-pointer py-6 text-3xl capitalize"
                        >
                            <Link 
                                onClick={() => setNav(!nav)} 
                                to={link} 
                                smooth 
                                duration={500}
                                >
                                    {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            

            
        </div>
    )
}

export default NavBar