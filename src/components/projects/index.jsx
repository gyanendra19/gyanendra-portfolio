import React, { useState } from "react";
import ProjectImage from "./projectEach";
import { RiExternalLinkFill } from "@remixicon/react";

const Projects = () => {
  const [project, setProject] = useState("fitness");

  const prolectLinks =
    project === "fitness"
      ? [
          "https://github.com/gyanendra19/everydayfit",
          "https://everydayfit.vercel.app",
        ]
      : project === "form"
      ? [
          "https://github.com/gyanendra19/aeonaxyfirst",
          "https://aeonaxyfirst.netlify.app",
        ]
      : project === "dribble"
      ? [
          "https://github.com/gyanendra19/aeonaxySecond",
          "https://aeonaxy-second.vercel.app",
        ]
      : [
          "https://github.com/gyanendra19/climate-crafter",
          "https://climate-crafter.vercel.app",
        ];

  return (
    <>
      <div className="absolute w-44 h-32 bg-red-400 z-[1] top-10 md:left-64 blur-[240px]"></div>
      <div className="flex flex-wrap justify-center gap-6 whitespace-nowrap pb-4 text-black md:text-lg text-sm font-medium tracking-wider relative z-[2]">
        <p
          onClick={() => setProject("fitness")}
          className="px-4 cursor-pointer py-1 bg-white rounded-sm"
        >
          Fitness app
        </p>
        <p
          onClick={() => setProject("form")}
          className="px-4 cursor-pointer py-1 bg-white rounded-sm"
        >
          Multi-step Form
        </p>
        <p
          onClick={() => setProject("dribble")}
          className="px-4 cursor-pointer py-1 bg-white rounded-sm"
        >
          Dribble sign-up form
        </p>
        <p
          onClick={() => setProject("weather")}
          className="px-4 cursor-pointer py-1 bg-white rounded-sm"
        >
          Live weather
        </p>
      </div>
      <div className="md:w-[93%]">
        <div className="h-full flex gap-10 pl-2 overflow-x-scroll border-t border-gray-200">
            <ProjectImage project={project} />
        </div>
        <div className="flex w-full mt-6 md:mt-4 justify-center gap-8">
          <a
            href={`${prolectLinks[0]}`}
            target="_blank"
            className="text-gray-300 flex gap-2 items-center cursor-pointer text-xl tracking-widest"
          >
            Github <RiExternalLinkFill size={16} />
          </a>
          <a
            href={`${prolectLinks[1]}`}
            target="_blank"
            className="text-gray-300 items-center flex gap-2 cursor-pointer text-xl tracking-widest"
          >
            Live <RiExternalLinkFill size={16} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
