import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      name: "Blog Website",
      description:
        "A personal blog website where I share my thoughts on various topics. Built using React, Next.js, and GraphQL.",
      github: "https://github.com/shelleychen318/javascript-blog",
      demo: "https://javascript-blog.vercel.app/",
    },
    {
      id: 2,
      image: project2,
      name: "Movie Details App",
      description:
        "Web app that displays details of any movie. Built using Next.js and IMDb API.",
      github: "https://github.com/shelleychen318/movie-details-app",
      demo: "https://movie-details-app.vercel.app",
    },
  ];

  return (
    <div name="portfolio" className="w-full h-fit relative">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full mt-24">
        <div className="pb-16">
          <p className="text-5xl font-semibold inline">Portfolio</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, image, name, description, github, demo }) => (
            <div className="shadow-md border-4 border-dark_beige rounded-2xl h-full duration-200 hover:scale-105">
              <a key={id} href={demo} target="_blank" rel="noreferrer">
                <img src={image} alt="project" className="rounded-t-xl" />
              </a>
              <div className="flex flex-col px-4 py-4">
                <a key={id} href={demo} target="_blank" rel="noreferrer">
                  <p className="text-2xl font-medium pb-4 hover:underline underline-offset-4 decoration-2 decoration-text_colour">
                    {name}
                  </p>
                </a>
                <p className="leading-7 pb-4">{description}</p>

                <div className="flex flex-row space-x-4">
                  <a
                    key={id}
                    href={github}
                    className="text-white w-fit px-4 py-2 my-4 flex items-center rounded-md text-pink font-medium border-pink border-2 hover:bg-pink hover:text-light_beige"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    key={id}
                    href={demo}
                    className="text-white w-fit px-4 py-2 my-4 flex items-center rounded-md font-medium bg-pink border-pink border-2 text-light_beige hover:bg-light_beige hover:text-pink"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
