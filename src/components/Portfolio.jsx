import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import portfolio1 from '../assets/portfolio/portfolio1.jpg';

const Portfolio = () => {
  return (
    <div name="portfolio" className="w-full md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
            <div className="pb-8">
                <p className="text-5xl font-semibold inline">Portfolio</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                <a className="duration-200 hover:scale-105 cursor-pointer">
                    <div className="shadow-md border-4 border-dark_beige rounded-2xl">
                        <img
                            src={portfolio1} 
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
                            <a className="pb-4 underline underline-offset-4 decoration-2 decoration-pink ">Github</a>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Portfolio