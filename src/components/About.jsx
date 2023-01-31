import React from "react";

const About = () => {
  return (
    <div name="about" className="h-screen w-full">
      <div className="max-w-screen-lg px-8 sm:p-4 mx-auto flex flex-col justify-center items-center w-full h-full border-b-4 border-b-dark_beige">
        <div className="pb-8">
          <p className="text-5xl font-semibold">About</p>
        </div>
        <p className="md:text-xl md:mt-16">
          My name is Shelley Chen. I am a first year Systems Design Engineering
          student at the Unviersity of Waterloo. I am passionate about
          technology, design, and innovation and am looking to gain more
          experience in full stack development and UI/UX.
        </p>
        <br />
        <p className="md:text-xl">
          Currently, I am working at Health and Rehab Research Inc. as a
          Software Engineering Research Assistant where I work with machine
          learning algorithms to develop products that contribute to the health
          care of patients.
        </p>
        <br />
        <p className="md:text-xl">
          In my free time, I enjoy travelling, playing badminton, and trying out
          new restaurants. I am also an avid Netflix watcher when I have enough
          time to do that!
        </p>
      </div>
    </div>
  );
};

export default About;
