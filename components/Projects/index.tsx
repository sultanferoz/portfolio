"use client";

import React, { useState } from "react";
// import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Netflix Clone",
    description:
      "A fully responsive Netflix-inspired UI with authentication and media streaming functionality.",
    image: "/images/netfilx.jpg",
    href: "https://sky-sojourn-nj8m.vercel.app",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "An interactive app providing weather updates with a clean, user-friendly interface.",
    image: "/images/Weather.jpg",
    href: "https://sky-sojourn-nj8m.vercel.app",
  },
  {
    id: 3,
    title: "Rick & Morty Characters",
    description:
      "A fun app displaying character details from the Rick & Morty series using the official API.",
    image: "/images/Rick and Morty.jpg",
    href: "https://rick-morty-roan.vercel.app",
  },
];

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center bg-[rgb(247,239,226)] text-black w-full min-h-[90vh] overflow-hidden relative"
    >
      <header className="w-full text-center py-4  z-10">
        <h1 className={`text-4xl font-bold text-center mb-4 fade-in-up `}>
          My Projects
        </h1>
        <p className={`text-2xl text-[#FFA500] text-center  fade-in-up`}>
          A showcase of my work and creativity.
        </p>
      </header>

      <div className="flex gap-2 p-1 sm:my-10 w-full max-w-[1100px] z-10 overflow-hidden">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => setActiveIndex(index)}
            className={`relative bg-opacity-40 bg-[#313734] backdrop-blur-lg rounded-3xl overflow-hidden shadow-md  cursor-pointer ${
              activeIndex === index
                ? "w-[75%] h-[250px] sm:w-[80%] sm:h-[450px]"
                : " w-[8%] h-[450x]"
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div
              className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-10 transition-opacity duration-500 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                target="blank"
                href={`${project.href}`}
                className="text-2xl font-bold text-white"
              >
                {project.title}
              </Link>
              {activeIndex === index && (
                <p className="text-white text-sm mt-2">{project.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
