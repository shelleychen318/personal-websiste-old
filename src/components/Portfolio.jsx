import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import project1 from '../assets/portfolio/project1.jpg';
import random2 from '../assets/portfolio/random2.jpg';


const Portfolio = () => {

    const projects = [
        {
            id: 1,
            src: project1
        },
        {
            id: 2,
            src: random2
        },
        {
            id: 3,
            src: project1
        },
        {
            id: 4,
            src: project1
        },
        {
            id: 5,
            src: project1
        },
        {
            id: 6,
            src: project1
        },
    ]
    return (
        <div name="portfolio" className="w-full">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full">
                <div className="pb-16">
                    <p className="text-5xl font-semibold inline">Portfolio</p>
                </div>


                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map(({id, src}) => (
                        <a key={id} className="duration-200 hover:scale-105 cursor-pointer">
                            <div className="shadow-md border-4 border-dark_beige rounded-2xl">
                                <img
                                    src={src} 
                                    alt="project" 
                                    className="rounded-t-xl"
                                />
                                <div className="flex flex-col px-4 py-4">
                                    <p className="text-2xl font-md pb-4">Project Name</p>
                                    <p className="leading-7 pb-4">This is the project description. It should be about this long. It is concise, but descriptive.</p>
                                    {/* <button>Github
                                        <span className="group-hover:rotate-90 duration-300">
                                            <HiArrowRight className="" />
                                        </span>
                                    </button> */}
                                    <a className="pb-4 underline underline-offset-4 decoration-2 decoration-pink hover:bg-pink ">Github</a>
                                </div>
                            </div>
                        </a>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Portfolio