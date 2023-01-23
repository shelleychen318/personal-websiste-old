import React from 'react';
import project1 from '../assets/portfolio/project1.jpg';
import random2 from '../assets/portfolio/random2.jpg';


const Portfolio = () => {

    const projects = [
        {
            id: 1,
            src: project1,
            name: 'Blog Website',
            description: 'A personal blog website where I share my thoughts on various topics. Built using React, GraphQL, Nextjs, and hosted on Vercel.',
            href:'https://javascript-blog.vercel.app/'
        },
        {
            id: 2,
            src: random2,
            name: 'Personal Blog',
            description: 'A personal blog'
        },
        {
            id: 3,
            src: project1,
            name: 'Personal Blog',
            description: 'A personal blog'
        },
        {
            id: 4,
            src: project1,
            name: 'Personal Blog',
            description: 'A personal blog website where I share my thoughts on various topics. Built using React, GraphQL, Nextjs, and hosted on Vercel.'
        },
        {
            id: 5,
            src: project1,
            name: 'Personal Blog',
            description: 'A personal blog'
        },
        {
            id: 6,
            src: project1,
            name: 'Personal Blog',
            description: 'A personal blog'
        },
    ]

    const githubs = [
        {
            id: 1,
            href: 'https://github.com/shelleychen318/javascript-blog'
        }
    ]

    return (
        <div name="portfolio" className="w-full">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full mt-24 mb-24">
                <div className="pb-16">
                    <p className="text-5xl font-semibold inline">Portfolio</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map(({id, src, name, description, href}) => (
                        <a 
                            key={id} 
                            href={href} 
                            className="duration-200 hover:scale-105 cursor-pointer"
                            target="_blank"
                            rel="noreferrer"
                            >
                            <div className="shadow-md border-4 border-dark_beige rounded-2xl h-full">
                                <img
                                    src={src} 
                                    alt="project" 
                                    className="rounded-t-xl"
                                />
                                <div className="flex flex-col px-4 py-4">
                                    <p className="text-2xl font-medium pb-4">{name}</p>
                                    <p className="leading-7 pb-4">{description}</p>

                                    {githubs.map(({id, href}) => (
                                        <a 
                                            className="pb-4 underline underline-offset-4 decoration-2 decoration-pink"
                                            >
                                            <span 
                                                key={id}
                                                href={href}
                                                className="transition ease-in-out hover:bg-pink"
                                                >
                                                GitHub
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div> 
            </div>
            <footer className="flex justify-center mb-10 text-lg">
                &#169; Shelley Chen 2023
            </footer>
        </div>
    )
}

export default Portfolio