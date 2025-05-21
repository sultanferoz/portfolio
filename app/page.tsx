"use client";

import { Monitor, Smartphone, Layout, ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { StatType } from "./types";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats: StatType[] = [
    { number: "50+", text: "Projects Completed" },
    { number: "10+", text: "Happy Clients" },
    { number: "3+", text: "Years Experience" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 container mx-auto px-4 py-16 flex flex-wrap items-center"
      >
        <div
          className={`w-full lg:w-1/2 space-y-6 sliding-in ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-block bg-[#F5E6D3] rounded-full px-4 py-2 mb-4 floating">
            Hello There!
          </div>
          <h1 className="text-5xl font-bold">
            I am <span className="text-[#FFA500]">Sultan Feroz</span>
          </h1>
          <h2 className="text-3xl font-bold">Front End Engineer </h2>
          <h3 className="text-2xl font-bold">Based in GB Pakistan.</h3>
          <p className="text-gray-600 max-w-md">
            I am an experienced Engineer with 3+ years in Front End Development,
            collaborating with various companies and startups.
          </p>
          <div className="flex gap-4">
            <button className="btn-primary">
              View My Portfolio <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">Hire Me</button>
          </div>
        </div>
        <div
          className={`w-full lg:w-1/2 relative mt-8 lg:mt-0 ${
            isVisible ? "scaling-in" : "opacity-0"
          }`}
        >
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={800}
            height={600}
            className="hero-image mx-auto"
          />
          <div className="absolute top-4 right-4 bg-[#FFA500] text-white px-4 py-2 rounded-full floating">
            Front End Engineer
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <section id="about" className="bg-[#1B4D3E] text-white py-16">
        <div className="container mx-auto px-4 flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/images/profile.png"
              alt="About"
              width={800}
              height={600}
              className="rounded-full mx-auto floating"
            />
          </div>
          <div className="w-full lg:w-1/2 sliding-in">
            <h2 className="text-4xl font-bold mb-4">
              Who is <span className="text-[#FFA500]">Sultan Feroz</span>?
            </h2>
            <p className="mb-8">
              Front-End Developer | 3+ years building modern, responsive web
              apps with JavaScript, TypeScript, React.js, Next.js, and GraphQL.
              Expert in Firebase, Clerk, and NextAuth for authentication &
              real-time functionality. Skilled in Figma, Tailwind CSS, Material
              UI, and Git. Passionate about clean code, testing, and delivering
              exceptional user experiences.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="fading-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="stats-number">{stat.number}</h3>
                  <p>{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <Tools />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
