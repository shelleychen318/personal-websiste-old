import React from 'react';
import Person from '../assets/img/person.jpeg';
import { HiArrowRight } from 'react-icons/hi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Home = () => {

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
        <div name="home" className="h-screen w-full">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row md:border-b-4 border-b-dark_beige">

            <div className="hidden lg:flex flex-col top-[45%]">
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

                <div className="flex flex-col justify-center items-center mx-4 md:mx-20 md:items-baseline">
                    <h2 className="text-4xl font-semibold sm:text-7xl">
                        Hi, I'm Shelley!
                    </h2>
                    <p className="py-6 max-w-lg md:text-xl">
                        I am first year Systems Design Engineering student at the University of Waterloo! 
                    </p>

                    <div>
                        <button className="group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-pink cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowRight className="ml-1" />
                            </span>
                        </button>
                    </div>
                </div>

                <div className="">
                    <img 
                        src={Person} 
                        alt="person" 
                        className="rounded-3xl mx-auto w-2/3 md:w-full"/>
                </div>
            </div>
        </div>
    )
}

export default Home