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
    title: "Dark Sky Tourism",
    description:"Dark Sky Tourism is a modern tourism website built with Next.js and custom CSS animations. It offers a smooth, interactive experience for exploring night sky destinations, tours, and stargazing spots, blending performance with elegant motion design.",
    image: "/images/tep2.png",
    href: "https://darkskytourism.com/",
  },
  {
    id: 2,
    title: "GatherGram",
    description:
      "GatherGram is a modern online platform for weddings and special events, built with Next.js 15, JavaScript, CSS, and MUI. It brings couples and guests together in one secure, beautifully designed space to share photos, send gifts, play trivia.",
    image: "/images/tep1.png",
    href: "https://gathergram-site.netlify.app/",
  },
  {
    id: 3,
    title: "JBay Solutions",
    description:
      "JBay Solutions is a fully responsive, static website developed using HTML, CSS, and JavaScript. It delivers a fast, lightweight experience with simple animations and a clear layout to highlight business services effectively.",
    image: "/images/tep3.png",
    href: "https://preview--jbay-website-revamp-project.lovable.app/",
  },
   {
    id: 4,
    title: "GameGain",
    description:
      "GameGain Dashboard is a sleek, responsive web app built with Next.js and MUI. Designed for gamers and analytics, it presents performance stats and user data in a clean, intuitive interface optimized for both desktop and mobile.",
    image: "/images/tep4.png",
    href: "https://gamegaindashboard.netlify.app/",
  },
   {
    id: 5,
    title: "Rick & Morty Characters",
    description:
      "A fun app displaying character details from the Rick & Morty series using the official API.",
    image: "/images/Rick and Morty.jpg",
    href: "https://rick-morty-roan.vercel.app",
  },
   {
    id: 6,
    title: "Sky Sojourn",
    description:
      "Sky Sojourn is a modern React-based travel showcase featuring smooth UI, responsive design, and custom CSS styling. It offers an engaging interface for discovering destinations with a focus on clarity and user experience.",
    image: "/images/tep6.png",
    href: "https://gathergram-site.netlify.app/",
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
              <h2
                className="text-2xl font-bold text-white"
              >
                {project.title}
              </h2>
              {activeIndex === index && (
               <>
                <p className="text-white text-sm mt-2">{project.description}</p>
                 <Link
                target="blank"
                href={`${project.href}`}
                className="text-[14px] text-white underline"
              >
                Visit Now....
              </Link>
               </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
