import React, { useState } from "react";
import {
  Monitor,
  Smartphone,
  Layout,
  ArrowRight,
  Lock,
  Code,
  Cpu,
  Paintbrush,
  Database,
  TestTube2,
} from "lucide-react";
import { ServiceType } from "../../app/types";

const services: ServiceType[] = [
  {
    icon: <Layout className="w-8 h-8" />, // Represents web development
    title: "Custom Web Application Development",
    description:
      "Build modern, responsive web applications with cutting-edge technologies like React.js, Next.js, and TypeScript. From dynamic SPAs to SEO-optimized server-rendered apps, I deliver fast, scalable solutions that align with your business goals.",
  },
  {
    icon: <Lock className="w-8 h-8" />, // Represents security
    title: "Secure User Authentication Systems",
    description:
      "Implement robust authentication workflows using Firebase, Clerk, and NextAuth. Whether it’s social logins, passwordless sign-ins, or role-based access control, I ensure your app remains secure and user-friendly.",
  },
  {
    icon: <Cpu className="w-8 h-8" />, // Represents real-time functionality
    title: "Real-Time Web Apps with Firebase",
    description:
      "Integrate live updates, chat systems, or collaborative features using Firebase for real-time databases and event-driven architectures. Keep users engaged with seamless, instant interactions.",
  },
  {
    icon: <Paintbrush className="w-8 h-8" />, // Represents UI/UX design
    title: "Pixel-Perfect UI Development",
    description:
      "Transform Figma designs into flawless, responsive interfaces using Tailwind CSS, Material UI, or Bootstrap. I focus on clean code, cross-browser compatibility, and animations that delight users.",
  },
  {
    icon: <Code className="w-8 h-8" />, // Represents clean code
    title: "Clean Code & Scalable Architecture",
    description:
      "Refactor legacy codebases or build new projects with test-driven development (TDD) and modular architecture. I prioritize readability, performance, and maintainability so your app grows smoothly.",
  },
  {
    icon: <Database className="w-8 h-8" />, // Represents API/GraphQL
    title: "Seamless API & GraphQL Integration",
    description:
      "Connect your front-end to REST/GraphQL APIs with precision. I ensure data flows efficiently, write comprehensive unit/integration tests, and optimize endpoints for speed and reliability.",
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false); // State to manage visibility

  // Slice the services array to show only 3 by default
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div className="sliding-in">
            <h2 className="text-4xl font-bold">
              <span className="text-[#FFA500]">Services </span>I Provide
            </h2>
          </div>
          <button
            className="btn-primary flex items-center gap-2"
            onClick={() => setShowAll(!showAll)} // Toggle showAll state
          >
            {showAll ? "Show Less" : "View All Services"}{" "}
            <ArrowRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className="service-card fading-in p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-icon mb-4 text-[#1B4D3E]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href="#" // Replace with actual link or modal handler
                className="text-[#1B4D3E] hover:text-[#2A3B2A] font-semibold transition-colors duration-300 flex items-center gap-2"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
