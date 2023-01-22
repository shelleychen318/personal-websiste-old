import React, { useState } from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa'
import { HiBars2, HiXMark } from "react-icons/hi2";


const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Portfolio'
        },
        {
            id: 4,
            link: 'Resume'
        }
    ];  

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-brown-700 fixed">
            <div className="font-medium ml-10">
                <a href="#">SHELLEY CHEN</a>
            </div>

            <ul className="hidden md:flex transition-all duration-300 ease-in-out">
                {links.map(({id, link}) => (
                    <li 
                    key={id}
                    className="mx-6 cursor-pointer bg-left-bottom bg-gradient-to-r from-pink to-pink bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_3px] transition-all duration-400 ease-out"
                    >{link}
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
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-bg_colour">
                    {links.map(({id, link}) => (
                        <li 
                        key={id}
                        className="px-4 cursor-pointer py-6 text-3xl"
                        >{link}
                        </li>
                    ))}
                </ul>
            )}

            

            
        </div>
    )
}

export default NavBar