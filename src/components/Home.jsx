import React from 'react';
import Duck from '../assets/img/duck.jpg';
import Person from '../assets/img/person.jpeg';
import { HiArrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full mx-4 md:mx-20">
                <h2 className="text-4xl font-semibold sm:text-6xl">
                    Hi, I'm Shelley!
                </h2>
                <p className="py-4 max-w-md text-lg">
                    I am a first year Systems Design Engineering student at the University of Waterloo! 
                </p>

                <div>
                    <button className="text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-pink cursor-pointer">
                        Portfolio
                        <span>
                            <HiArrowRight className="ml-1"/>
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img 
                    src={Person} 
                    alt="person" 
                    className="rounded-2xl mx-auto w-2/3 md:w-full" />
            </div>
        </div>
    </div>
  )
}

export default Home